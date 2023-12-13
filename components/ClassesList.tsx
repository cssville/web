import { useState } from "react";
import React from 'react';
import hljs from 'highlight.js';
import { Row } from "cssville-ui/build/components/ui/simple/Row";
import { Chip } from "cssville-ui/build/components/ui/simple/Chip";
import { Column } from "cssville-ui/build/components/ui/simple/Column";

export const ClassesList = (props: any) => {
  const [active, setActive] = useState(0);
  return (
    <Column>
      <Row>
        {
          props.data.map((value: any, i: number) => {
            var cl = value.cssClass;
            var isActive = i === active;
            return (
              <Chip sm bold={isActive} disabled={!isActive} onClick={(e) => { setActive(i) }} className="cursor-pointer my-1">{cl}</Chip>
            )
          })}
      </Row>
      <Row contentCenter>
        <div key={`come-example-${active}`} className="max-w-12 box-shadow-lg p-5 br-3">
          <pre className="m-0">
            <code className="fs-large language-css hljs br-2 max-w-md mx-auto"
              dangerouslySetInnerHTML={{
                __html:
                  hljs.highlight(props.data[active].cssString, { language: 'css' }).value
              }}
            />
          </pre>
        </div>
      </Row>
    </Column>
  );
}