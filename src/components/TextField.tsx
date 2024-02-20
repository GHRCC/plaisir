import React, { useState } from "react";

type TextFieldProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

const TextField = (props: TextFieldProps) => {
  const [text, setText] = useState(props.value);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setText(newValue);
    props.onChange(newValue);
  };

  return (
    <input
      value={props.value}
      placeholder={props.placeholder}
      onChange={handleChange}
    />
  );
};

export default TextField;
