import React from 'react';
import './UseNext.scss';

export default function UseNext() {
  return (
    <div className="useNextBox">
      <input type="checkbox" id="useNext" className="useNext" />
      <label htmlFor="useNext">결제수단과 입력정보를 다음에도 사용</label>
    </div>
  );
}
