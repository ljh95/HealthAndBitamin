import React, { useState } from 'react';
import RadioButton from '../RadioButton';
import Entrepreneur from './Entrepreneur';
import Individual from './Individual';
import './SignReceipt.scss';

export default function SignReceipt() {
  const [currentId, setCurrentId] = useState('individual');

  return (
    <div className="signReceipt">
      <span className="radioGroup">
        <RadioButton
          id="individual"
          desc={'개인'}
          name={'cacheReceipt'}
          defaultId={'individual'}
          changeCurrentDisplay={id => setCurrentId(id)}
        />
        <RadioButton
          id="entrepreneur"
          desc={'사업자'}
          name={'cacheReceipt'}
          defaultId={'individual'}
          changeCurrentDisplay={id => setCurrentId(id)}
        />
      </span>
      {currentId === 'individual' ? <Individual /> : <Entrepreneur />}
    </div>
  );
}
