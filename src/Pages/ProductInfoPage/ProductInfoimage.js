import React from 'react';
import './ProductInfoimage.scss';

export default function ProductInfoimage({
  id,
  index,
  image,
  changeCurrentImage,
}) {
  return (
    <div className="infoImage">
      <li onMouseOver={() => changeCurrentImage(index)}>
        <img src={image} alt={id} />
      </li>
    </div>
  );
}
