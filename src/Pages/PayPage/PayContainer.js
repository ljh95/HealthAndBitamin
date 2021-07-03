import React, { useState } from 'react';
import PayBody from './PayBody';
import PayHeader from './PayHeader';
import './PayContainer.scss';

export default function PayContainer({
  type,
  productList,
  shippingFee,
  formData,
  changeValue,
}) {
  const [isDiplay, setIsDiplay] = useState(false);
  return (
    <div>
      <PayHeader
        isDiplay={isDiplay}
        type={type}
        changeIsDiplay={() => setIsDiplay(!isDiplay)}
      />
      {isDiplay && (
        <PayBody
          type={type}
          productList={productList}
          shippingFee={shippingFee}
          formData={formData}
          changeValue={changeValue}
        />
      )}
    </div>
  );
}
