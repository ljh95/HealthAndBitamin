import React from 'react';
import PayDelivery from './PayBody/PayDelivery';
import PayOrder from './PayBody/PayOrder';
import PayDiscount from './PayBody/PayDiscount';
import PayInfo from './PayBody/PayInfo';
import PayWay from './PayBody/PayWay';
import PayBenefit from './PayBody/PayBenefit';
import './PayBody.scss';

export default function PayBody({
  type, //
  productList, //
  shippingFee, //
  formData,
  changeValue, //
}) {
  const payTypeTable = {
    delivery: (
      <PayDelivery
        name={formData.name}
        address={formData.address}
        subAddress={formData.subAddress}
        phone_number={formData.phone_number}
        email={formData.email}
        message={formData.message}
        changeValue={changeValue}
      />
    ),
    order: <PayOrder productList={productList} shippingFee={shippingFee} />,
    discount: <PayDiscount />,
    info: <PayInfo />,
    way: <PayWay />,
    benefit: <PayBenefit />,
  };

  return <>{payTypeTable[type]}</>;
}
