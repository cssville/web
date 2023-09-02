import React = require("react");

export const Chip = (props: any) => {
    return (
      <span className="fs-medium code text-decoration-none border br-2 px-2 opacity-1 bg-grey fw-bold">{props.text}</span>
    );
}