import React, { useState } from 'react';
import hljs from 'highlight.js';
import { Chip } from "cssville-ui/build/components/ui/simple/Chip";
import { Stack } from 'cssville-ui/build/components/ui/simple/Stack';

export const ClassesList = (props: any) => {
  const [active, setActive] = useState(0);
  return (
    <Stack column fullWidth className="max-w-12">
      <Stack row xs flexWrap>
        {
          props.data.map((value: any, i: number) => {
            var cl = value.cssClass;
            var isActive = i === active;
            return (
              <Chip sm bold={isActive} disabled={!isActive} onClick={(e) => { setActive(i) }} className="cursor-pointer my-1">{cl.split(":")[0]}</Chip>
            )
          })}
      </Stack>
      <Stack column contentCenter fullWidth>
        <div key={`code-example-${active}`} className="box-sizing-border-box max-w-12 overflow-auto box-shadow-lg p-5 br-3">
          <pre className="m-0">
            <code className="fs-large language-css hljs br-2 max-w-md mx-auto"
              dangerouslySetInnerHTML={{
                __html:
                  hljs.highlight(props.data[active].cssString, { language: 'css' }).value
              }}
            />
          </pre>
        </div>
      </Stack>
    </Stack>
  );
}