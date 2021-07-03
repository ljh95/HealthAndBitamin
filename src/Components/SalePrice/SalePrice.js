import React from 'react';

function SalePrice({ price, discount }) {
  return (
    <div className="item_discount info">
      {(price - price * 0.01 * discount).toLocaleString('en-US')}원
    </div>
  );
}

export default SalePrice;
