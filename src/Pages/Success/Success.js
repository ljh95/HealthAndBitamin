import React from 'react';
import { useHistory } from 'react-router-dom';
import './Success.scss';

function Success() {
  const history = useHistory();
  return (
    <div className="success">
      <div className="messageBox">
        <p className="desc">결제가 완료되었습니다!</p>
        <p className="hi">
          Have a Vitamin Day<i className="fas fa-heart"></i>
        </p>

        <div>
          <button
            className="btn"
            onClick={() => {
              history.push('/');
            }}
          >
            Go Main
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success;
