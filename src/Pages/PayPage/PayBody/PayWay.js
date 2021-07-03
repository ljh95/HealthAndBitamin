import React, { useState } from 'react';
import SelectWay from '../PayWay/SelectWay';
import UseNext from '../PayWay/UseNext';
import PayWayContent from '../PayWay/PayWayContent';
import './PayWay.scss';

const radioList = [
  {
    id: 'card',
    desc: '카드결제',
  },
  {
    id: 'rTime',
    desc: '에스크로(실시간 계좌이체)',
  },
  {
    id: 'phone',
    desc: '휴대폰 결제',
  },
  {
    id: 'virtualAccount',
    desc: '가상계좌',
  },
  {
    id: 'kakao',
    desc: '카카오페이(간편결제)',
  },
];

export default function PayWay() {
  const [currentDisplay, setCurrentDisplay] = useState('card');

  return (
    <div className="way">
      <div className="content">
        <SelectWay
          radioList={radioList}
          changeCurrentDisplay={id => setCurrentDisplay(id)}
        />
        <PayWayContent id={currentDisplay} />
        <UseNext />
      </div>
    </div>
  );
}
