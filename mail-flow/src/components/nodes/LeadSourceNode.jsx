import React, { useState } from 'react';
import { X } from 'react-bootstrap-icons';
import { useReactFlow } from 'reactflow';
import CustomHandle from '../CustomHandle';
import useToggle from '../../hooks/useToogle';

const LeadSourceNode = ({ data, id, onClick }) => {
  const { setNodes } = useReactFlow();
  const { name, email } = data;

  const [isExpanded, setIsExpanded] = useToggle(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);

  const handleDelete = () => {
    setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
  };


  const handleUpdate = () => {
    setNodes((prevNodes) =>
      prevNodes.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            data: {
              ...node.data,
              name: updatedName,
              email: updatedEmail,
            },
          };
        }
        return node;
      })
    );
    setIsExpanded(false);
  };

  return (
    <div  className="rounded-lg border-2 border-blue-500 flex flex-col bg-white p-1 pb-1 pl-2 gap-2 w-60">
      <div className="flex items-center">
        <div className="h-12 w-12">
          <img
            className="mix-blend-multiply h-full w-full"
            alt="Lead Logo"
            src="https://th.bing.com/th/id/OIP.IgHYOdhIpMEazOl5oxKfJwHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          />
        </div>
        <div className="flex-grow">
          <p className="text-sm mt-px">{name}</p>
          <p className="text-sm mt-px">{email}</p>
        </div>
        <button
          aria-label="Delete Cold Mail"
          className="text-red-500 bg-transparent hover:bg-red-100 rounded cursor-pointer"
          onClick={handleDelete}
        >
          <X size={20} />
        </button>
      </div>
      <button onClick={setIsExpanded} className="mt-2 p-1 border rounded bg-blue-500 text-white">
        {isExpanded ? 'Cancel' : 'Update'}
      </button>
      {isExpanded && (
        <div className="mt-2">
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            className="w-full mb-1 p-1 border rounded"
            placeholder="Name"
          />
          <input
            type="text"
            value={updatedEmail}
            onChange={(e) => setUpdatedEmail(e.target.value)}
            className="w-full mb-1 p-1 border rounded"
            placeholder="Email"
          />
          <button onClick={handleUpdate} className="w-full mt-2 p-1 border rounded bg-green-500 text-white">
            Save
          </button>
        </div>
      )}
      <CustomHandle type="source" position="right" />
    </div>
  );
};

export default LeadSourceNode;
