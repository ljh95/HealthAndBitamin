import React from 'react';
import SubTitle from './SubTitle';
import './Title.scss';

function Title({ categoryData }) {
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
