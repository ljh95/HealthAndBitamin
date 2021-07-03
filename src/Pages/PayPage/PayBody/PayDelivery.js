import React, { useState } from 'react';
import RadioButton from '../RadioButton';
import './PayDelivery.scss';

export default function PayDelivery({ name, changeValue }) {
  const [currentId, setCurrentId] = useState('sameDelivery');

  const [formData, setFormData] = useState({
    firstNum: '',
    secondNum: '',
    thirdNum: '',
    emailFirst: '',
    emailSec: '',
    address: '',
    subAddress: '',
  });

  const changeCurrentDisplay = id => {
    setCurrentId(id);
  };

  const onChangeHandler = e => {
    const { id, value } = e.target;
    if (id === 'name' || id === 'message') {
      changeValue(id, value);
      return;
    }

    setFormData({
      ...formData,
      [id]: value,
    });

    const {
      address,
      subAddress,
      firstNum,
      secondNum,
      thirdNum,
      emailFirst,
      emailSec,
    } = formData;

    switch (id) {
      case 'address':
      case 'subAddress':
        changeValue('address', [address, subAddress].join(','));
        break;

      case 'firstNum':
      case 'secondNum':
      case 'thirdNum':
        changeValue('phone_number', [firstNum, secondNum, thirdNum].join('-'));
        break;

      case 'emailFirst':
      case 'emailSec':
        changeValue('email', [emailFirst, emailSec].join('@'));
        break;

      default:
        break;
    }
  };

  return (
    <div className="payDelivery">
      <div className="delieveryForm">
        <RadioButton
          id="sameDelivery"
          desc="회원 정보와 동일"
          name="delivery"
          defaultId="sameDelivery"
          changeCurrentDisplay={changeCurrentDisplay}
        />
        <RadioButton
          id="newDelivery"
          desc="새로운 배송지"
          name="delivery"
          defaultId="sameDelivery"
          changeCurrentDisplay={changeCurrentDisplay}
        />
        <div className="receiverBox">
          <label htmlFor="receiver" className="lb">
            받는 사람 *
          </label>
          <input
            type="input"
            className="receiver"
            name="receiver"
            value={name}
            id="name"
            onChange={onChangeHandler}
          />
        </div>
        <div className="box">
          <label htmlFor="address" className="lb">
            주소 *
          </label>
          <input
            type="input"
            className="addressInput"
            value={formData.address}
            id="address"
            onChange={onChangeHandler}
          />
          <input
            type="input"
            className="addressInput"
            value={formData.subAddress}
            id="subAddress"
            onChange={onChangeHandler}
          />
        </div>
        <div className="box">
          <label htmlFor="phone" className="lb">
            휴대 전화 *
          </label>
          <select name="phone" id="firstNum" onChange={onChangeHandler}>
            <option value="">-- 번호 --</option>
            <option value="010">010</option>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
            <option value="019">019</option>
          </select>
          -
          <input
            type="input"
            name="phoneNumSec"
            id="secondNum"
            onChange={onChangeHandler}
          />
          -
          <input
            type="input"
            name="phoneNumThr"
            id="thirdNum"
            onChange={onChangeHandler}
          />
        </div>
        <div className="box emailBox">
          <label htmlFor="email" className="lb">
            이메일 *
          </label>
          <input
            type="input"
            name="newUserData"
            id="emailFirst"
            onChange={onChangeHandler}
          />
          @
          <select name="email" id="emailSec" onChange={onChangeHandler}>
            <option value="">- 이메일 선택 -</option>
            <option value="naver.com">naver.com</option>
            <option value="daum.net">daum.net</option>
            <option value="nate.com">nate.com</option>
            <option value="hotmail.com">hotmail.com</option>
            <option value="yahoo.com">yahoo.com</option>
            <option value="empas.com">empas.com</option>
            <option value="korea.com">korea.com</option>
            <option value="dreamwiz.com">dreamwiz.com</option>
            <option value="gmail.com">gmail.com</option>
          </select>
          <p className="emailSub">
            이메일로 주문 처리 과정을 보내드립니다.
            <br /> 수신 가능한 이메일 주소를 입력해 주세요.
          </p>
        </div>
      </div>
      <div className="safeNumberServiceBox">
        <div className="SafeNumberService">
          <div>
            <input type="checkbox" className="safeService" name="safeService" />
            <label htmlFor="safeService">안심번호 서비스 사용 (무료)</label>
          </div>

          <span>안내 &gt;</span>
        </div>

        <div className="SelectMessage">
          <select
            name="message"
            id="message"
            className="message"
            onChange={onChangeHandler}
          >
            <option value="선택 안함">-- 메시지 선택 (선택사항) --</option>
            <option value="배송 전에 미리 연락바랍니다.">
              배송 전에 미리 연락바랍니다.
            </option>
            <option value="부재 시 경비실에 맡겨주세요.">
              부재 시 경비실에 맡겨주세요.
            </option>
            <option value="부재 시 문 앞에 놓아주세요.">
              부재 시 문 앞에 놓아주세요.
            </option>
            <option value="빠른 배송 부탁드립니다.">
              빠른 배송 부탁드립니다.
            </option>
            <option value="택배함에 보관해 주세요.">
              택배함에 보관해 주세요.
            </option>
          </select>
        </div>

        <div className="SaveDeliveryBasis">
          <input type="checkbox" className="saveBasis" name="saveBasis" />
          <label htmlFor="safeService">기본 배송지로 저장</label>
        </div>
      </div>
    </div>
  );
}
