import React from "react";
// import { X } from "react-bootstrap-icons";
import {
  BezierEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
} from "reactflow";

export default function CustomEdge(props) {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  } = props;

  const { setEdges } = useReactFlow();

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <>
      <BezierEdge {...props} />
      <EdgeLabelRenderer>
        <button
          aria-label="Delete Edge"
          className="absolute text-red-500 bg-transparent rounded-full p-1 cursor-pointer"
          style={{
            left: `calc(${labelX}px - 50%)`,
            top: `calc(${labelY}px - 50%)`,
            transform: `translate(-50%, -50%)`,
            pointerEvents: "all",
          }}
          onClick={() =>
            setEdges((prevEdges) => prevEdges.filter((edge) => edge.id !== id))
          }
        >
          <X size={20} />
        </button>
      </EdgeLabelRenderer>
    </>
  );
}
