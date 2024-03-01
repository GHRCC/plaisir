import React from "react";

type TitleProps = {
  children: React.ReactNode;
};

const Title = (props: TitleProps) => {
  return (
    <h1 className="text-center font-bold text-xl md:text-2xl">
      {props.children}
    </h1>
  );
};

export default Title;
