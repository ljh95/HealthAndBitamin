import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BestType } from '../../../Components/Types';
import './Best.scss';

function Best() {
  const history = useHistory();
  const [bestList, setBestList] = useState<BestType[]>([]);

  useEffect(() => {
    fetch('/data/MainData/Best.json')
      .then(res => res.json())
      .then(data => {
        setBestList(data.BEST_PRODUCT.slice(0, 8));
      });
  }, []);

  const makeTotalPrice = (price: number, discount: number) => {
    return (price - (price * discount) / 100).toLocaleString();
  };

  const goDetailPage = (id: number) => {
    history.push(`/productInfo/${id}`);
  };

  return (
    <section className="bestSection">
      <header>
        <h1>BEST</h1>
        <p>지금 가장 잘나가는 상품을 만나보세요</p>
      </header>
      <ul className="productList">
        {bestList.map(product => {
          const { product_id, image, name, price, discount } = product;

          return (
            <article
              key={product_id}
              className="product"
              onClick={() => goDetailPage(product_id)}
            >
              <img className="productImage" src={image} alt="product" />
              <p className="name">
                {name} <i className="fas fa-search" />
              </p>
              <p className="price">{price.toLocaleString()}원</p>
              <p className="result">
                <span className="applyPrice">
                  {makeTotalPrice(price, discount)}원
                </span>
                <span className="discount">({discount}%)할인</span>
              </p>
            </article>
          );
        })}
      </ul>
    </section>
  );
}

export default Best;
