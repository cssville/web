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
      <Stack column key={`come-example-${prefix}`} xl noGap className="md-wid-full">
        <Title xl className='wid-full'>{val.name}</Title>
        <div className="box-siz-border-box max-wid-full ove-auto box-sha-lg bor-rad-4">
          <pre className="mar-0">
            <code className="fon-siz-large language-css hljs bor-rad-2 max-wid-md mar-x-auto"
              dangerouslySetInnerHTML={{
                __html:
                  hljs.highlight(`
@media screen and (max-width: ${val.value}) {
  .${val.name}-dis-flex {
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
      <Text lg className="max-wid-2/3 md-max-wid-full">
        The same classes can be used with predefined screen-size prefixes. When prefix is used, the style is applied only for specific screen resolution.
        See the example below for the <Chip>dis-flex</Chip> property:
      </Text>
      <Stack row xl flexWrap fullWidth>{prefixesNodes}</Stack>
    </Stack>
  );
}