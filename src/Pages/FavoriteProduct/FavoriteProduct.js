import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../FavoriteProduct/FavoriteProduct.scss';

const LISTS = [
  <input className="checkBox" type="checkbox" />,
  '이미지',
  '상품정보',
  '판매가',
  '적립금',
  '배송구분',
  '배송비',
  '합계',
  '선택',
];

function FavoriteProduct({ id, deleteBasketItem }) {
  const history = useHistory();

  const [favoritList, setFavoritList] = useState([]);
  // const [orderItem, setOrderItem] = useState([]);
  // const [deleteItem, setDeleteItem] = useState([]);
  // const [addCart, setAddCart] = useState([]);

  useEffect(() => {
    fetch('/data/Favorite/Favorite.json', {
      headers: {
        Authorization: localStorage
          .getItem('token')
          .slice(1, localStorage.getItem('token').length - 1),
      },
    })
      .then(res => res.json())
      .then(data => {
        setFavoritList(data);
      });
  }, []);

  const addCartFunc = () => {
    history.push('/basket');
  };

  const goMain = () => {
    history.push('/');
  };

  // const deleteCart = () => {
  //   deleteBasketItem(id);
  // };

  const deleteItemFunc = e => {
    let index = e.target.id;

    // 1. 원본 배열 접근
    // 2. filter 함수 사용
    // 3. 조건을 통해 원하는 값 선택

    setFavoritList(
      favoritList.filter(favorite => {
        console.log(favorite.id);
        if (favorite.id === Number(index)) {
          return false;
        } else {
          return true;
        }
      })
    );
  };

  return (
    <div className="allFavorite">
      <div className="all">
        <header className="olFavoriteBox">
          <ol className="favoriteList">
            <li>
              <span to="main" className="goToLink" onClick={goMain}>
                <i className="fas fa-home" />
              </span>
            </li>
            <li>
              <i className="fas fa-angle-right" />
            </li>
            <li className="goSignUp">마이쇼핑</li>
            <li>
              <i className="fas fa-angle-right" />
            </li>
            <li className="goSignUp">관심상품</li>
          </ol>
        </header>
        <div className="loginKo">
          <h2 className="nameLogin">관심상품</h2>
        </div>
        <div id="table">
          {favoritList.length > 0 ? (
            <div className="row">
              <ul>
                <li className="menuBar">
                  {LISTS.map(item => {
                    return <span key={item}>{item}</span>;
                  })}
                </li>
              </ul>

              {favoritList.map(favorite => {
                return (
                  <ul>
                    <li className="menuItem">
                      <span>
                        <input className="checkBox" type="checkbox" />
                      </span>
                      <img src={favorite.imageUrl} alt="favorite" />
                      <span>{favorite.name}</span>
                      <span>{favorite.price}</span>
                      <span>&nbsp;&nbsp;&nbsp;</span>
                      <span>{favorite.delivery}</span>
                      <span>배송비</span>
                      <span>합계</span>
                      <span>
                        <div className="select">
                          <button
                            onClick={addCartFunc}
                            type="submit"
                            className="orderItem"
                          >
                            주문하기
                          </button>
                          <button
                            onClick={addCartFunc}
                            type="submit"
                            className="addCart"
                          >
                            장바구니담기
                          </button>
                          <button
                            id={favorite.id}
                            onClick={deleteItemFunc}
                            type="submit"
                            className="deleteCart"
                          >
                            x 삭제
                          </button>
                        </div>
                      </span>
                    </li>
                  </ul>
                );
              })}
            </div>
          ) : (
            <p className="message">관심상품이 내역이 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FavoriteProduct;
