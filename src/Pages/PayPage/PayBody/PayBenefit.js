import React from 'react';
import './PayBenefit.scss';

export default function PayBenefit() {
  return (
    <div className="payBenefit">
      <ul className="benefitList">
        <li>
          <span>상품별 적립금</span>
          <span>0원</span>
        </li>
        <li>
          <span>회원 적립금</span>
          <span>736원</span>
        </li>
        <li>
          <span>쿠폰 적립금</span>
          <span>0원</span>
        </li>
      </ul>
      <div className="benefitExpect">
        <span>적립 예정금액</span>
        <span className="result">736원</span>
      </div>
    </div>
  );
}
