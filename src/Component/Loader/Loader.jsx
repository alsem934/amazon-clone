import React from 'react';
import { HashLoader } from 'react-spinners';

const Loader = ({ color = 'rgb(9, 132, 209)', size = 50 }) => {
  return (
    <div
      style={{  
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
      }}
    >
      <HashLoader color={color} size={size} />
    </div>
  );
};

export default Loader;
