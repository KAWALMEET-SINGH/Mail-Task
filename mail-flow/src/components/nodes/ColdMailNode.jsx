import React from 'react';
import { Handle } from 'react-flow-renderer';

const ColdMailNode = ({ data }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md p-4">
      <Handle type="target" position="left" className="bg-gray-600 absolute h-2 w-2 top-1/2 transform -translate-y-1/2 left-0" />
      <div className="text-lg font-semibold mb-2">{data.label}</div>
      <Handle type="source" position="right" className="bg-gray-600 absolute h-2 w-2 top-1/2 transform -translate-y-1/2 right-0" />
    </div>
  );
};

export default ColdMailNode;
