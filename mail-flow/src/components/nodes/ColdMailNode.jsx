import React, { useState } from 'react';
import { X } from 'react-bootstrap-icons';
import { useReactFlow } from 'reactflow';
import CustomHandle from '../CustomHandle';
import useToggle from '../../hooks/useToogle';

const ColdMailNode = ({ data, id, onClick }) => {
  const { setNodes } = useReactFlow();
  const { title, content, reciever } = data;

  const [isExpanded, setIsExpanded] = useToggle(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedContent, setUpdatedContent] = useState(content);
  const [updatedReciever, setUpdatedReciever] = useState(reciever);

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
              title: updatedTitle,
              content: updatedContent,
              reciever: updatedReciever,
            },
          };
        }
        return node;
      })
    );
    setIsExpanded(false);
  };

  return (
    <div className="rounded-lg border-2 border-blue-500 flex flex-col bg-white p-1 pb-1 pl-2 gap-2 w-60">
      <div className="flex items-center">
        <div className="h-12 w-12">
          <img
            alt="Cold Mail Logo"
            src="https://th.bing.com/th/id/OIP.APr6vLa_5OAfVgvEAuHr0wHaHa?rs=1&pid=ImgDetMain"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg font-bold text-blue-700 flex-1">{title}</h3>
        <button onClick={handleDelete} className="ml-auto p-1 text-red-600">
          <X size={30} />
        </button>
      </div>
      <p className="text-gray-700 mb-2">Content: {content}</p>
      <p className="text-gray-700 mb-2">Reciever: {reciever}</p>
      <button onClick={setIsExpanded} className="mt-2 p-1 border rounded bg-blue-500 text-white">
        {isExpanded ? 'Cancel' : 'Update'}
      </button>
      {isExpanded && (
        <div className="mt-2">
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            className="w-full mb-1 p-1 border rounded"
            placeholder="Title"
          />
          <input
            type="text"
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
            className="w-full mb-1 p-1 border rounded"
            placeholder="Content"
          />
          <input
            type="text"
            value={updatedReciever}
            onChange={(e) => setUpdatedReciever(e.target.value)}
            className="w-full mb-1 p-1 border rounded"
            placeholder="Reciever"
          />
          <button onClick={handleUpdate} className="w-full mt-2 p-1 border rounded bg-green-500 text-white">
            Save
          </button>
        </div>
      )}
      <CustomHandle id={`${id}-source`} type="source" position="right" />
      <CustomHandle id={`${id}-target`} type="target" position="left" />
    </div>
  );
};

export default ColdMailNode;
