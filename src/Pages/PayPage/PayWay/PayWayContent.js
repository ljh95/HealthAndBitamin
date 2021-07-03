import React from 'react';
import Kakao from './Kakao';
import PGPolicy from './PGPolicy';
import RealTimeAccount from './RealTimeAccount';
import VirtualAccount from './VirtualAccount';

export default function PayWayContent({ id }) {
  return (
    <>
      {id === 'card' && <PGPolicy />}
      {id === 'rTime' && <RealTimeAccount />}
      {id === 'phone' && <PGPolicy />}
      {id === 'virtualAccount' && <VirtualAccount />}
      {id === 'kakao' && <Kakao />}
    </>
  );
}
