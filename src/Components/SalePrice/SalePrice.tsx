import React from 'react';

type SalePriceProps = {
  price: number;
  discount: number;
};

function SalePrice({ price, discount }: SalePriceProps) {
  return (
    <div className="item_discount info">
      {(price - price * 0.01 * discount).toLocaleString('en-US')}원
    </div>
  );
}

export default SalePrice;
