import React from 'react';
import './ProductInfoHeader.scss';

export default function ProductInfoHeader() {
  return (
    <div className="productInfoHeader">
      <ol>
        <li>
          <i className="fas fa-home" />
          <span> &nbsp;&gt; PRODUCT </span>
        </li>
      </ol>
    </div>
  );
}
