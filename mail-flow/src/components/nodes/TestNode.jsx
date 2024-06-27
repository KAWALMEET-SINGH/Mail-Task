import React from "react";
// import { X } from "react-bootstrap-icons";
import { useReactFlow } from "reactflow";
// import CustomHandle from "./CustomHandle";

const PAYMENT_PROVIDER_IMAGE_MAP = {
  St: "https://cdn.worldvectorlogo.com/logos/stripe-2.svg",
  Ap: "https://cdn.worldvectorlogo.com/logos/apple-14.svg",
  Gp: "https://cdn.worldvectorlogo.com/logos/google-g-2015.svg",
  Pp: "https://avatars.githubusercontent.com/u/476675?s=280&v=4",
  Am: "https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png",
};

export default function PaymentProvider({ data, id }) {
  const { setNodes } = useReactFlow();

  const { name, code } = data;

  const handleDelete = () => {
    setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
  };

  return (
    <div className="rounded-lg border-2 border-blue-500 flex items-center bg-white p-1 pb-1 pl-2 gap-2 w-140">
      <div className="h-6 w-6">
        <img
          alt="Payment Provider Logo"
          src={PAYMENT_PROVIDER_IMAGE_MAP[code]}
          className="h-full w-full"
        />
      </div>
      <div className="flex-grow">
        <p className="text-sm mt-px">{name}</p>
      </div>
      <button
        aria-label="Delete Payment Provider"
        className="text-red-500 bg-transparent hover:bg-red-100 rounded cursor-pointer"
        onClick={handleDelete}
      >
        <X size={20} />
      </button>
      <CustomHandle type="target" position="left" />
    </div>
  );
}
