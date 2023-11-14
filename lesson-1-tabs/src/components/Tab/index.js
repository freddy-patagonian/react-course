import React from "react";

const Tab = ({text, isActiveCondition, onClick}) => {
  return (
    <button className={isActiveCondition ? "active" : ""} onClick={onClick}>
      {text}
    </button>
  );
};

export default Tab;
