import React from 'react';
import { CategoryListResponse } from '../../ProductList';
import SubTitle from './SubTitle';
import './Title.scss';

type TitleProps = {
  categoryData: CategoryListResponse[];
};

function Title({ categoryData }: TitleProps) {
  return (
    <header className="title">
      <div className="category_title">{'category_name'}</div>
      <ul className="category_sub">
        {categoryData.map(cate => {
          return (
            <SubTitle
              key={cate.category_id}
              categoryName={cate.category_name}
            />
          );
        })}
      </ul>
    </header>
  );
}

export default Title;
