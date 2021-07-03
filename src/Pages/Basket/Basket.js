import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MainBasket from './MainBasket/MainBasket';
import './Basket.scss';

function Basket() {
  const history = useHistory();

  const [orderList, setOrderList] = useState([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [isDeliveryFree, setIsDeliveryFree] = useState(false);

  //[장바구니] (서버 -> 장바구니) Item 가져오기
  useEffect(() => {
    fetch('http://18.116.64.187:8000/carts', {
      headers: {
        Authorization: localStorage
          .getItem('token')
          .slice(1, localStorage.getItem('token').length - 1),
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log('cart정보');
        console.log(data);
        this.setState({ orderList: data.PRODUCT_LIST });
      });
  }, []);

  // [장바구니](장바구니 -> 서버) 장바구니 담은 상품 전달하기
  const giveItemList = () => {
    let products = orderList.map(order => {
      return {
        product_id: order.id,
        count: order.count,
      };
    });
    console.log('products');
    console.log(products);

    fetch('http://18.116.64.187:8000/carts', {
      method: 'POST',
      headers: {
        Authorization: localStorage
          .getItem('token')
          .slice(1, localStorage.getItem('token').length - 1),
      },
      body: {
        products,
      },
    })
      .then(res => res.json())
      .then(data => {
        // { MESSAGE: SUCCESS }
      });
    history.push('/pay');
  };

  const deleteBasketItem = cool => {
    // cool 이란 어떤 객체인지 구분해 주는 특정 데이터이다. ex) id
    setOrderList(
      orderList.filter(({ id }) => {
        return id !== cool;
      })
    );
    deleteFetch(cool);
  };

  const deleteAllOrder = () => {
    setOrderList([]);
  };

  const deleteFetch = id => {
    fetch('http://18.116.64.187:8000/carts', {
      method: 'DELETE',
      headers: {
        Authorization: localStorage
          .getItem('token')
          .slice(1, localStorage.getItem('token').length - 1),
      },
      body: JSON.stringify({
        products: [{ id }],
      }),
    });
  };

  const changeCount = (itemId, count) => {
    if (!count) return;

    setOrderList(
      orderList.map(order => {
        if (order.id !== itemId) return order;
        return { ...order, count };
      })
    );
  };

  const goToMain = () => {
    history.push('/');
  };

  useEffect(() => {
    let totalAmount = 0;
    let totalDiscount = 0;

    orderList.forEach(order => {
      totalAmount += order.price * order.count;
      totalDiscount += order.price * (order.discount / 100) * order.count;
      if (totalAmount - totalDiscount > 20000) {
        setIsDeliveryFree(true);
      } else {
        setIsDeliveryFree(false);
      }
    });

    setTotal(totalAmount);
    setDiscount(totalDiscount);
  }, [orderList]);

  return (
    <div className="basket_page_body">
      <div className="basket_page">
        <div className="title">장바구니</div>
        <div className="basket">
          {orderList !== {} && (
            <MainBasket
              total={total}
              discount={discount}
              delivery={isDeliveryFree ? 0 : 2500}
              orderList={orderList}
              changeCount={changeCount}
              deleteBasketItem={deleteBasketItem}
              deleteAllOrder={deleteAllOrder}
            />
          )}

          <div className="btns">
            <div className="order_btns">
              <button className="order_all_btn" onClick={giveItemList}>
                전체상품주문
              </button>
              <button className="order_select_btn">선택상품주문</button>
            </div>
            <button onClick={goToMain} className="keep_shopping">
              쇼핑계속하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
