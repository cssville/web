import { useState } from "react";
import React from 'react';
import hljs from 'highlight.js';

export const ClassesList = (props: any) => {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="w-12 fs-medium pb-2 d-flex flex-wrap-wrap">
        {
          props.data.map((value: any, i: number) => {
            var cl = value.cssClass;
            return (
              <a key={`class-${cl}`} onClick={(e) => { setActive(i) }}
                className={`cursor-pointer fs-small font-family-code m-1 text-decoration-none border-1 br-2 px-2 ${i === active ? "opacity-1 bg-color-grey-100 fw-bold" : "opacity-05"}`}>
                {cl}
              </a>);
          })}
      </div>
      <div key={`come-example-${active}`} className="max-w-12 box-shadow-lg p-3 br-3">
        <pre className="m-0">
          <code className="fs-large language-css hljs br-2 max-w-sm mx-auto"
            dangerouslySetInnerHTML={{
              __html:
                hljs.highlight(props.data[active].cssString, { language: 'css' }).value
            }}
          />
        </pre>
      </div>
    </>
  );
}