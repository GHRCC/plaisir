import { type } from "os";
import React from "react";

export type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} className="bg-primary py-2 px-4 rounded-md">
      {props.children}
    </button>
  );
};

export default Button;
