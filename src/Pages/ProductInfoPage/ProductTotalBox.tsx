import React from 'react';
import './ProductTotalBox.scss';

type ProductTotalBoxType = {
  totalPrice: number;
  count: number;
};

export default function ProductTotalBox({
  totalPrice,
  count,
}: ProductTotalBoxType) {
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
