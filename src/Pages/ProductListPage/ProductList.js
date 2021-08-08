import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import Title from './ProductListComponent/Title/Title';
import Products from './ProductListComponent/Products/Products';
import './ProductList.scss';
import { isTruthyObj } from '../../utils/function';

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [categoryData, setCategoryData] = useState({});

  useEffect(() => {
    fetch('/data/ProductList/categoryList.json')
      .then(res => res.json())
      .then(data => {
        setCategoryData(data);
      });
    fetch('/data/ProductList/productList.json')
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);

  return (
    <div className="productList">
      {isTruthyObj(categoryData) && <Title categoryData={categoryData} />}
      <Products prList={productList} />
      <footer></footer>
    </div>
  );
}

export default ProductList;
