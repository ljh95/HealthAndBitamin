import React from 'react';
import ProductsInfo from './ProductsInfo/ProductsInfo';
import ProductsItem from './ProductsItem/ProductsItem';
import MovePage from './MovePage/MovePage';
import './Products.scss';

function Products({ prList }) {
  return (
    <main className="Products">
      <ProductsInfo prList={prList} />
      <div className="product_items">
        {prList.map((el, i) => {
          return <ProductsItem key={i} product={el} />;
        })}
      </div>
      <MovePage />
    </main>
  );
}
export default Products;
