import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './HotKeyword.scss';

const NAME_LIST = [
  '# 우리 아이 성장에 쑥쑥! 도움이 되는!',
  '# 수험생인 우리 아이, 집중력을 높이고 싶을 땐?',
  '# 탄력 있는 피부를 원해요! (비타민 a)',
  '# 눈이 침침해졌다고 느낄 땐?(비타민 c)',
];
function HotKeyword() {
  const history = useHistory();

  const [tagCategoryList, setTagCategoryList] = useState({});
  const [currentCategory, setCurrentCategory] = useState('');

  useEffect(() => {
    // fetch('localhost:8000/products/main-hashtag')
    fetch('/data/MainData/Hashtag.json')
      .then(res => res.json())
      .then(data => {
        setTagCategoryList(data);
        setCurrentCategory(Object.keys(data)[0]);
      });
  }, []);

  const categoryClickHandler = category => {
    setCurrentCategory(category);
  };

  const productClick = id => {
    history.push(`/productInfo/${id}`);
  };

  return (
    <section className="hotKeywordSection">
      <article className="content">
        <header>
          <h2 className="title">라인별 HOT 키워드</h2>
          <p className="desc">향기 맛집 더프트앤도프트.</p>
          <ul className="categoryList">
            {Object.keys(tagCategoryList).map((category, i) => {
              return (
                <li
                  key={category}
                  className="category"
                  onClick={() => categoryClickHandler(category)}
                >
                  {category === currentCategory ? (
                    <span className="liContent select">{NAME_LIST[i]}</span>
                  ) : (
                    <span className="liContent">{NAME_LIST[i]}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </header>
        <ul className="productList">
          {tagCategoryList[currentCategory] &&
            tagCategoryList[currentCategory].map(product => {
              const { image, name, price, product_id, discount } = product;

              return (
                <article
                  key={product_id}
                  className="product"
                  onClick={() => productClick(product_id)}
                >
                  <img className="productImage" src={image} alt="product" />
                  <p className="name">
                    {name}
                    <i className="fas fa-search" />
                  </p>
                  <p className="price">{price.toLocaleString()}원</p>
                  <p className="result">
                    <span className="applyPrice">
                      {(price - (price * discount) / 100).toLocaleString()}원
                    </span>
                    <span className="discount">({discount}%)할인</span>
                  </p>
                </article>
              );
            })}
        </ul>
      </article>
    </section>
  );
}

export default HotKeyword;
