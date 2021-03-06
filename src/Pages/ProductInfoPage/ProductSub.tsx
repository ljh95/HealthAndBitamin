import React from 'react';
import ProductSubHeader from './ProductSubHeader';
import ProductSubItem from './ProductSubItem';
import './ProductSub.scss';
import { SubItemType } from '../../Components/Types';

type ProductSubType = {
  subItemList: SubItemType[];
  subItemAddList: number[];
  addSubItemList: (id: number) => void;
};

export default function ProductSub({
  subItemList,
  subItemAddList,
  addSubItemList,
}: ProductSubType) {
  return (
    <div className="productSub">
      <ProductSubHeader />
      <div className="subItemBox">
        {subItemList.map(el => {
          return (
            <ProductSubItem
              key={el.id}
              subItem={el}
              id={el.id}
              addSubItemList={addSubItemList}
              selectValue={
                subItemAddList.includes(el.id) ? 'choose' : 'default'
              }
            />
          );
        })}
      </div>
    </div>
  );
}
