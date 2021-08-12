import React from 'react';
import './ProductInfoimage.scss';

type ProductInfoimageType = {
  id: number;
  index: number;
  image: string;
  changeCurrentImage: (index: number) => void;
};

export default function ProductInfoimage({
  id,
  index,
  image,
  changeCurrentImage,
}: ProductInfoimageType) {
  return (
    <div className="infoImage">
      <li onMouseOver={() => changeCurrentImage(index)}>
        <img src={image} alt={String(id)} />
      </li>
    </div>
  );
}
