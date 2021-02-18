import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.color}`}>
        <i className='fas fa-info-circle'>{alert.msg}</i>
      </div>
    )
  );
};

export default Alert;
