import React, { useState, useEffect } from 'react';
import { X } from 'react-bootstrap-icons';
import { useReactFlow } from 'reactflow';
import CustomHandle from '../CustomHandle';
import { toast } from 'react-hot-toast';

const DelayNode = ({ data: { time, leadMail }, id, onClick }) => {
  const { setNodes } = useReactFlow();
  const [remainingTime, setRemainingTime] = useState(time);
  const [isExpanded, setIsExpanded] = useState(false);
  const [updatedTime, setUpdatedTime] = useState(time);
  const [updatedLeadMail, setUpdatedLeadMail] = useState(leadMail);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime((prevTime) => prevTime - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 3600000);

    return () => clearInterval(intervalId);
  }, [remainingTime]);

  const handleDelete = () => {
    setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
  };

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleUpdate = () => {
    setNodes((prevNodes) =>
      prevNodes.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            data: {
              ...node.data,
              time: updatedTime,
              leadMail: updatedLeadMail,
            },
          };
        }
        return node;
      })
    );
    setRemainingTime(updatedTime);
    setIsExpanded(false);
  };

  return (
    <div
      onClick={() => onClick(id)}
      className="rounded-lg border-2 border-blue-500 flex flex-col bg-white p-1 pb-1 pl-2 gap-2 w-60"
    >
      <div className="flex items-center">
        <div className="h-12 w-12">
          <img
            alt="Delay Logo"
            src="https://static.vecteezy.com/system/resources/previews/010/387/263/original/watch-wristwatch-clock-time-thin-line-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg"
            className="h-full w-full"
          />
        </div>
        <div className="flex-grow">
          {remainingTime > 0 ? (
            <p className="text-sm mt-px">{remainingTime} hour(s) remaining</p>
          ) : (
            <p className="text-sm mt-px text-red-500">Time's up!</p>
          )}
        </div>
        <button
          aria-label="Delete Delay"
          className="text-red-500 bg-transparent hover:bg-red-100 rounded cursor-pointer"
          onClick={handleDelete}
        >
          <X size={20} />
        </button>
      </div>
      <button onClick={handleExpandToggle} className="mt-2 p-1 border rounded bg-blue-500 text-white">
        {isExpanded ? 'Cancel' : 'Update'}
      </button>
      {isExpanded && (
        <div className="mt-2">
          <input
            type="number"
            value={updatedTime}
            onChange={(e) => setUpdatedTime(e.target.value)}
            className="w-full mb-1 p-1 border rounded"
            placeholder="Time (hours)"
          />
          <input
            type="email"
            value={updatedLeadMail}
            onChange={(e) => setUpdatedLeadMail(e.target.value)}
            className="w-full mb-1 p-1 border rounded"
            placeholder="Lead Mail"
          />
          <button onClick={handleUpdate} className="w-full mt-2 p-1 border rounded bg-green-500 text-white">
            Save
          </button>
        </div>
      )}
      <CustomHandle type="target" position="left" />
      {remainingTime === 0 &&
        toast((t) => (
          <span>
            Time's up! Send a mail to <b>{leadMail}</b>
            <button onClick={() => toast.dismiss(t.id)}>Dismiss</button>
          </span>
        ))}
    </div>
  );
};

export default DelayNode;
