import React from 'react';
//import Cssville from 'cssville/build/cssville';
import { ReactNode } from "react";
import hljs from 'highlight.js';
import { Chip } from "./Chip";
import CssvilleBreakpoints from './build/vars/breakpoints';

export const CssPrefixesSection = (props: any) => {
  const prefixesNodes: ReactNode[] = [];
  CssvilleBreakpoints.breakpoints.forEach((val, prefix) => {
    prefixesNodes[prefixesNodes.length] =
      <div key={`come-example-${prefix}`} className="pb-3 md-w-12 md-pb-4">
        <div className="fs-x-large pb-3"><span className="fw-bold">{val.name}</span></div>
        <div className="max-w-12 bg-grey shadow p-3 mr-3 br-2">
          <pre className="m-0 overflow-auto">
            <code className="language-css hljs br-2 max-w-sm mx-auto"
              dangerouslySetInnerHTML={{
                __html:
                  hljs.highlight(`
@media screen and (max-width: ${val.var}) {
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
        <h2 className="fs-xxx-large m-0 pb-4 md-fs-xx-large">
          CSS prefixes
        </h2>
        <p className="pb-4 m-0 max-w-8 md-max-w-12">
          The same classes can be used with predefined screen-size prefixes. When prefix is used, the style is applied only for specific screen resolution.
          See the example below for the <Chip text="d-flex"/> property:
        </p>
        <div className="pb-5 d-flex flex-wrap-wrap">{prefixesNodes}</div>
      </>
    );
}