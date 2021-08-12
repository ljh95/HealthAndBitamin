import React from 'react';
import { ProductListResponse } from '../../../ProductList';
import './ProductsInfo.scss';

type ProductsInfoProps = {
  prList: ProductListResponse[];
};

function ProductsInfo({ prList }: ProductsInfoProps) {
  return (
    <div className="products_info">
      <div className="product_count">
        <span className="num">{prList.length}</span> ITEMS
      </div>
      <div className="product_filters">
        <button>신상품</button>
        <button>상품명</button>
        <button>낮은 가격</button>
        <button>높은 가격</button>
      </div>
    </div>
  );
}

export default ProductsInfo;
