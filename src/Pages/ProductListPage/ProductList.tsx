import React, { useEffect, useState } from 'react';
import Title from './ProductListComponent/Title/Title';
import Products from './ProductListComponent/Products/Products';
import './ProductList.scss';
import { api } from '../../utils/function';

export type CategoryListResponse = {
  category_id: number;
  category_name: string;
};

export type ProductListResponse = {
  id: number;
  image: string;
  name: string;
  price: number;
  discount: number;
};

function ProductList() {
  const [productList, setProductList] = useState<ProductListResponse[]>([]);
  const [categoryData, setCategoryData] = useState<CategoryListResponse[]>([]);

  useEffect(() => {
    api<CategoryListResponse[]>('/data/ProductList/categoryList.json').then(
      data => {
        setCategoryData(data);
      }
    );
    api<ProductListResponse[]>('/data/ProductList/productList.json').then(
      data => {
        setProductList(data);
      }
    );
  }, []);

  return (
    <div className="productList">
      {!!categoryData.length && <Title categoryData={categoryData} />}
      <Products prList={productList} />
      <footer></footer>
    </div>
  );
}

export default ProductList;
