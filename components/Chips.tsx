import { Chip } from "cssville-ui/build/components/ui/simple/Chip";
import React from 'react';

export const Chips = (props: any) => {
  return (
    <>
      {props.data.map((p: string, i: number) => (
        <React.Fragment key={i}>
          <Chip noBorder>{p}</Chip>
          {i < props.data.length - 1 && <span>, </span>}
        </React.Fragment>
      ))}
    </>
  );
}
