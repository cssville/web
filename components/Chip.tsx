import React from 'react';

export const Chip = (props: any) => {
    return (
      <span className="fs-medium code text-decoration-none border-1 br-2 px-2 opacity-1 bg-color-grey-100 fw-bold">{props.text}</span>
    );
}