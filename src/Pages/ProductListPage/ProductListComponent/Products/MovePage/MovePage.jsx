import React from 'react';
import './MovePage.scss';

function MovePage() {
  return (
    <div className="change_page">
      <div className="change left">
        <div className="change-btn">
          <button>
            <i className="change-icon fas fa-angle-left"></i>
          </button>
        </div>
        <div className="change-btn">
          <button>
            <i className="change-icon fas fa-angle-double-left"></i>
          </button>
        </div>
      </div>
      <div className="page">1</div>
      <div className="change pr-right">
        <div className="change-btn">
          <button>
            <i className="change-icon fas fa-angle-right"></i>
          </button>
        </div>
        <div className="change-btn">
          <button>
            <i className="change-icon fas fa-angle-double-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovePage;
