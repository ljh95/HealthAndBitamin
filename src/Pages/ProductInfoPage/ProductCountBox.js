import React from 'react';
import './ProductCountBox.scss';

export default function ProductCountBox({
  count,
  updateItem,
  deleteItem,
  id,
  type,
  stock,
  price,
  discount,
  name,
}) {
  const inputOnChange = e => {
    let newCout = maxValueCheck(e.target.value);
    updateItem(type, newCout, id);
  };

  const upClick = () => {
    let newCout = maxValueCheck(count * 1 + 1);
    updateItem(type, newCout, id);
  };

  const downClick = () => {
    let newCout = maxValueCheck(count <= 1 ? 2 : count);
    updateItem(type, newCout * 1 - 1, id);
  };

  const maxValueCheck = count => {
    if (count > stock) {
      count = stock;
      alert('최대 주문 수량입니다!');
    }
    return count;
  };

  const xBtnOnClick = () => {
    deleteItem(type, id);
  };

  const calcPrice = () => {
    return discount
      ? (price - price * (discount / 100)) * (count ? count : 1)
      : price * (count ? count : 1);
  };

  // const { inputOnChange, upClick, downClick, xBtnOnClick, calcPrice } = this;
  return (
    <div className="productCountBox">
      <span className="name">{name}</span>
      <div className="inputBox">
        <input
          className="input"
          type="number"
          value={count}
          onChange={inputOnChange}
        />
        <div className="arrowBox">
          <i className="fas fa-sort-up" onClick={upClick} />
          <i className="fas fa-sort-down" onClick={downClick} />
        </div>
        <p className="x" onClick={xBtnOnClick}>
          x
        </p>
      </div>
      <span className="price">{calcPrice()}원</span>
    </div>
  );
}
