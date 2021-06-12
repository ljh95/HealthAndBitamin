import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from './ProductListComponent/Title/Title';
import Products from './ProductListComponent/Products/Products';
import './ProductList.scss';
import { isTruthyObj } from '../../utils/function';

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [categoryData, setCategoryData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch('http://18.116.64.187:8000/products/category')
      .then(res => res.json())
      .then(data => {
        setCategoryData(data.category[id]);
      });
    fetch(`http://18.116.64.187:8000/products/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProductList(data.product);
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
