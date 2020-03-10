'use strict';
import React from 'react';

const Square = ({ color }) => {
  return (
    <div
      style={{
        background: color,
        height: '100px',
        width: '100px'
        // display: 'inline-block'
        // borderRadius: "50%"
      }}
      onClick={e => {
        alert(e.target);
      }}
    />
  );
};

Square.defaultProps = {
  color: 'red'
};

export default Square;
