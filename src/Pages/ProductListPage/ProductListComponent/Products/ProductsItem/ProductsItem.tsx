import React from 'react';
import { useHistory } from 'react-router-dom';
import SalePrice from '../../../../../Components/SalePrice/SalePrice';
import { ProductListResponse } from '../../../ProductList';
import './ProductsItem.scss';

type ProductsItemProps = {
  product: ProductListResponse;
};

function ProductsItem({ product }: ProductsItemProps) {
  const history = useHistory();

  const clickProduct = (id: number) => {
    history.push(`/productInfo/${id}`);
  };

  const { image, name, price, discount, id } = product;

  return (
    <div className="product_item" onClick={() => clickProduct(id)}>
      <img className="item_img" src={image} alt="vitamin" />
      <div className="item_title info">{name}</div>
      <div className="info_icon">
        <i className="fab fa-elementor"></i>
        <i className="fas fa-search"></i>
      </div>
      <div
        className={
          discount === 0 ? 'info item_price_noDiscount' : 'info item_price'
        }
      >
        {price.toLocaleString('en-US')}원
      </div>

      {discount !== 0 && <SalePrice price={price} discount={discount} />}
    </div>
  );
}

export default ProductsItem;
