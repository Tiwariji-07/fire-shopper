import React from "react";
import "./RoundedButton.scss";

const RoundedButton = (props: any) => {
  return (
    <div>
      <button className="btn" {...props}>
        {props.children}
      </button>
    </div>
  );
};

export default RoundedButton;
