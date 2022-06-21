import React from "react";

const TextField = (props) => {
  const { onChange, name, placeholder, value } = props;

  const result = (
    <input type="text"
    onChange={onChange}
    name={name}
    placeholder={placeholder}
    value={value} />
  );
}