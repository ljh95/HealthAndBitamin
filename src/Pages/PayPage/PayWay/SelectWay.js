import React from 'react';
import RadioButton from '../RadioButton';
import './SelectWay.scss';

export default function SelectWay({ radioList, changeCurrentDisplay }) {
  return (
    <div className="selectPayWay">
      <p className="title">결제 수단 선택</p>
      <div className="flexBox">
        {radioList.map(radio => {
          return (
            <RadioButton
              key={radio.id}
              id={radio.id}
              desc={radio.desc}
              name={'payway'}
              defaultId={'card'}
              changeCurrentDisplay={changeCurrentDisplay}
            />
          );
        })}
      </div>
    </div>
  );
}
