// Canvas.js
import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import PaymentProvider from "./nodes/TestNode";
import CustomEdge from './CustomEdge';
// import ColdMailNode from './Nodes/ColdMailNode';


const nodeTypes = {
    paymentProvider: PaymentProvider,
  };
  const edgeTypes = {
    customEdge: CustomEdge,
  };
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: 'Node 2' } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const Canvas = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
    const onConnect = useCallback(
      (connection) => {
        const edge = {
          ...connection,
          animated: true,
          id: `${edges.length} + 1`,
          type: "customEdge",
        };
        setEdges((prevEdges) => addEdge(edge, prevEdges));
      },
      [edges]
    );

  const addColdMailNode = () => {
    const newNode = {
      id: (nodes.length + 1).toString(),
      position: { x: 0, y: 200 },
      data: { label: 'Cold Email' },
    };

    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  return (
    <div className="w-screen h-screen bg-gray-200 p-8">
        <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        onClick={addColdMailNode}
      >
        Add Cold Email Node
      </button>
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
  );
};

export default Canvas;
