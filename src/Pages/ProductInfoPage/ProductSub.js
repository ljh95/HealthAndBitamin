import React from 'react';
import ProductSubHeader from './ProductSubHeader';
import ProductSubItem from './ProductSubItem';
import './ProductSub.scss';

export default function ProductSub({
  subItemList,
  subItemAddList,
  addSubItemList,
}) {
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
              subItemList={subItemList}
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
