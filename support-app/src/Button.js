import React from "react";

function Button(props) {
  return <button> {props.label || "sample button"}</button>;
}

export default Button;
