import React, { useState } from 'react';
import SignReceipt from './SignReceipt';
import './Cache.scss';

export default function Cache() {
  const [isReceiept, setIsReceiept] = useState(false);

  const onClick = e => {
    setIsReceiept(e.target.id === 'cacheReceipt');
  };

  return (
    <div className="cacheBox">
      <p className="cache">현금영수증</p>
      <input type="radio" id="cacheReceipt" name="test" onClick={onClick} />
      <label htmlFor="cacheReceipt" className="cacheReceiptLabel">
        현금영수증 신청
      </label>
      <input
        type="radio"
        id="cacheReceiptNot"
        name="test"
        onClick={onClick}
        defaultChecked
      />
      <label htmlFor="cacheReceiptNot">신청안함</label>
      {isReceiept && <SignReceipt />}
    </div>
  );
}
