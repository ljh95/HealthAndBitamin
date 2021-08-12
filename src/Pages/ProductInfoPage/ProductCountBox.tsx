import React from 'react';
import { ProductType } from '../../Components/Types';
import './ProductCountBox.scss';

type ProductCountBoxType = {
  count: number;
  updateItem: (type: ProductType, count: number, id: number) => void;
  deleteItem: (type: ProductType, id: number) => void;
  id: number;
  type: ProductType;
  stock: number;
  price: number;
  discount: number;
  name: string;
};

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
}: ProductCountBoxType) {
  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newCout = maxValueCheck(Number(e.target.value));
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

  const maxValueCheck = (count: number) => {
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
