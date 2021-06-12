import React from 'react';
import './ProductSubItem.scss';

export default function ProductSubItem({
  addSubItemList,
  id,
  subItem,
  selectValue,
}) {
  const optionSelectOnChange = e => {
    if (e.target.options.selectedIndex) {
      addSubItemList(id);
    }
  };

  const { image_url, name, price } = subItem;

  return (
    <div className="productSubItem">
      <img className="itemImage" src={image_url} alt="product" />
      <div>
        <div className="information">
          <p className="informationTitle">{name}</p>
          <p className="informationPrice">{price.toLocaleString()}원</p>
        </div>
        <div className="option">
          <p className="optionName">상품선택</p>
          <select
            className="optionSelect"
            name="optionSelect"
            onChange={optionSelectOnChange}
            value={selectValue}
          >
            <option value="default">- [필수] 상품 선택 -</option>
            <option value="choose">{name}</option>
          </select>
        </div>
      </div>
    </div>
  );
}
