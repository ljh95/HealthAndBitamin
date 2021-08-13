import React from 'react';
import { SubItemType } from '../../Components/Types';
import './ProductSubItem.scss';

export type ProductSubItemType = {
  addSubItemList: (id: number) => void;
  id: number;
  subItem: SubItemType;
  selectValue: selectValueType;
};

type selectValueType = 'choose' | 'default';

export default function ProductSubItem({
  addSubItemList,
  id,
  subItem,
  selectValue,
}: ProductSubItemType) {
  const optionSelectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
