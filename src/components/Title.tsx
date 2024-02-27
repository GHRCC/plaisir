import React from "react";

type TitleProps = {
  text: string;
};

const Title = (props: TitleProps) => {
  return (
    <div className="bg-primary my-0 mx-0 flex items-center">{props.text}</div>
  );
};

export default Title;
