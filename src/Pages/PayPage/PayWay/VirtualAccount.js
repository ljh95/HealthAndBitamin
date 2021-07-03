import React from 'react';
import Cache from './Cache';
import PGPolicy from './PGPolicy';
import './VirtualAccount.scss';

export default function VirtualAccount() {
  return (
    <div className="virtual">
      <PGPolicy />
      <Cache />
    </div>
  );
}
