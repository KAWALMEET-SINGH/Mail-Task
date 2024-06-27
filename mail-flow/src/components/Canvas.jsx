import React, { useCallback, useState } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css'; 
import CustomEdge from './CustomEdge';
import ColdMailNode from './nodes/ColdMailNode';
import { initialEdges, initialNodes } from './Constants';
import Dropdown from './Dropdown';
import LeadSourceNode from './nodes/LeadSourceNode';
import DelayNode from './nodes/DelayNode';

const nodeTypes = {
  lead: LeadSourceNode,
  delay : DelayNode,
  coldMail: ColdMailNode,
};
const edgeTypes = {
  customEdge: CustomEdge,
};

const Canvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection) => {
      const edge = {
        ...connection,
        animated: true,
        id: `${edges.length + 1}`,
        type: 'customEdge',
      };
      setEdges((prevEdges) => addEdge(edge, prevEdges));
    },
    [edges, setEdges]
  );

  const addDelay = () => {
    const newNode = {
      id: (nodes.length + 1).toString(),
      position: { x: 0, y: 200 },
      data: { label: 'Delay' },
      type: 'delay', 
    };

    setNodes((prevNodes) => [...prevNodes, newNode]);
  };
  const addLead = () => {
    const newNode = {
      id: (nodes.length + 1).toString(),
      position: { x: 0, y: 200 },
      data: { label: 'Lead' },
      type: 'lead', 
    };

    setNodes((prevNodes) => [...prevNodes, newNode]);
  };
  const addColdMailNode = () => {
    const newNode = {
      id: (nodes.length + 1).toString(),
      position: { x: 0, y: 200 },
      data: { label: 'Cold Email' },
      type: 'coldMail', 
    };

    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  return (
    <div className="w-full h-full bg-gray-200 p-8">
     <Dropdown addColdMail={addColdMailNode} addDelay={addDelay} addLead={addLead} />
     


      <div className='h-[450px]'>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Canvas;