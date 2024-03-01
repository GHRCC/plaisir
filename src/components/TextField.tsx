import React, { useState } from "react";

type TextFieldProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

const TextField = (props: TextFieldProps) => {
  return (
    <input
      value={props.value}
      placeholder={props.placeholder}
      onChange={(event) => props.onChange(event.target.value)}
      className="border-2 rounded-lg focus:border-primary outline-none p-2 "
    />
  );
};

export default TextField;
