import React from 'react';
import './ProductTotalBox.scss';

export default function ProductTotalBox({ totalPrice, count }) {
  return (
    <div className="productTotalBox">
      <div className="box">
        <span className="description">총 상품금액(수량)&nbsp;</span>
        <span className="price">{totalPrice.toLocaleString()}원</span>
        <span className="count">({count}개)</span>
      </div>
    </div>
  );
}
