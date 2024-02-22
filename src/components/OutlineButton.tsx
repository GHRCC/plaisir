import React from "react";

type OutlineButtonProps = {
  onClick: () => void;
  children: string;
};

const OutlineButton = (props: OutlineButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className="hover:bg-primary py-2 px-4 rounded-md border-2 border-primary"
    >
      {props.children}
    </button>
  );
};

export default OutlineButton;
