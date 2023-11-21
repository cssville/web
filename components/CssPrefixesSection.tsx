import React from 'react';
import { Cssville } from './build/cssville';
import { ReactNode } from "react";
import hljs from 'highlight.js';
import { Chip } from "./ui/simple/Chip";
import { Display, Text } from './ui/simple/Typography';
import { Row } from './ui/simple/Row';
import { Column } from './ui/simple/Column';

export const CssPrefixesSection = (props: any) => {
  const prefixesNodes: ReactNode[] = [];
  Cssville.breakpoints.forEach((val, prefix) => {
    prefixesNodes[prefixesNodes.length] =
      <div key={`come-example-${prefix}`} className="pb-3 md-w-12 md-pb-4">
        <div className="fs-x-large pb-3">
          <span className="fw-bold">{val.name}</span>
        </div>
        <div className="max-w-12 box-shadow-lg p-5 br-4">
          <pre className="m-0 overflow-auto">
            <code className="fs-large language-css hljs br-2 max-w-md mx-auto"
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
    <Column xl noSpace>
      <Display id="prefixes" tag="h2">
        CSS prefixes
      </Display>
      <Text xl className="max-w-8 md-max-w-12">
        The same classes can be used with predefined screen-size prefixes. When prefix is used, the style is applied only for specific screen resolution.
        See the example below for the <Chip>d-flex</Chip> property:
      </Text>
      <Row>{prefixesNodes}</Row>
    </Column>
  );
}