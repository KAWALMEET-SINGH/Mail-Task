import React from 'react';
import { Handle } from 'reactflow';

export default function CustomHandle(props) {
  return (
    <Handle
      style={{
        width: 10,
        height: 10,
        background: 'white',
        border: '2px solid blue',
      }}
      {...props}
    />
  );
}