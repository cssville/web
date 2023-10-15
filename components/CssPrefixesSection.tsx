import React from 'react';
import { Cssville } from './build/cssville';
import { ReactNode } from "react";
import hljs from 'highlight.js';
import { Chip } from "./ui/simple/Chip";

export const CssPrefixesSection = (props: any) => {
  const prefixesNodes: ReactNode[] = [];
  Cssville.breakpoints.forEach((val, prefix) => {
    prefixesNodes[prefixesNodes.length] =
      <div key={`come-example-${prefix}`} className="pb-3 md-w-12 md-pb-4">
        <div className="fs-x-large pb-3"><span className="fw-bold">{val.name}</span></div>
        <div className="max-w-12 box-shadow-lg p-3 mr-3 br-3">
          <pre className="m-0 overflow-auto">
            <code className="fs-large language-css hljs br-2 max-w-sm mx-auto"
              dangerouslySetInnerHTML={{
                __html:
                  hljs.highlight(`
@media screen and (max-width: ${val.value}) {
  .${val.name}-d-flex {
    display: flex;
  }
}`, { language: 'css' }).value
              }}
            />
          </pre>
        </div>
      </div>;
  })
    return (
      <>
        <h2 id="prefixes" className="fs-xxx-large m-0 pb-4 md-fs-xx-large">
          CSS prefixes
        </h2>
        <p className="fs-large pb-4 m-0 max-w-8 md-max-w-12">
          The same classes can be used with predefined screen-size prefixes. When prefix is used, the style is applied only for specific screen resolution.
          See the example below for the <Chip txt="d-flex"/> property:
        </p>
        <div className="pb-5 d-flex flex-wrap-wrap">{prefixesNodes}</div>
      </>
    );
}