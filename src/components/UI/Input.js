import React from "react";

import classes from "./Input.module.css";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.input.label}</label>
      <input type="text" id={props.input.id} {...props.input} ref={ref} />
    </div>
  );
});

export default Input;
