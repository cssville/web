import React from 'react';
import { Cssville } from 'cssville-generators/build/cssville';
import { ReactNode } from "react";
import hljs from 'highlight.js';
import { Chip } from "cssville-ui/build/components/ui/simple/Chip";
import { Display, Text, Title } from 'cssville-ui/build/components/ui/simple/Typography';
import { Stack } from 'cssville-ui/build/components/ui/simple/Stack';

export const CssPrefixesSection = (props: any) => {
  const prefixesNodes: ReactNode[] = [];
  Cssville.breakpoints.forEach((val, prefix) => {
    prefixesNodes[prefixesNodes.length] =
      <Stack column key={`come-example-${prefix}`} xl noGap className="md-w-12">
        <Title xl className='w-12'>{val.name}</Title>
        <div className="max-w-12 overflow-auto box-shadow-lg br-4">
          <pre className="m-0">
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
      </Stack>;
  })
  return (
    <Stack column xl noGap itemsStart fullWidth>
      <Display id="prefixes" tag="h2">
        CSS prefixes
      </Display>
      <Text lg className="max-w-8 md-max-w-12">
        The same classes can be used with predefined screen-size prefixes. When prefix is used, the style is applied only for specific screen resolution.
        See the example below for the <Chip>d-flex</Chip> property:
      </Text>
      <Stack row xl flexWrap fullWidth>{prefixesNodes}</Stack>
    </Stack>
  );
}