import React from 'react';

type SubTitleProps = {
  categoryName: string;
};

function SubTitle({ categoryName }: SubTitleProps) {
  return <li className="sub_title">{categoryName}</li>;
}

export default SubTitle;
