import React, { useState } from 'react';
import hljs from 'highlight.js';
import { Chip } from "cssville-ui/build/components/ui/simple/Chip";
import { Stack } from 'cssville-ui/build/components/ui/simple/Stack';

export const ClassesList = (props: any) => {
  const [active, setActive] = useState(0);
  return (
    <Stack column fullWidth className="max-wid-full">
      <Stack row xs flexWrap>
        {
          props.data.map((value: any, i: number) => {
            var cl = value.cssClass;
            var isActive = i === active;
            return (
              <Chip key={i} sm bold={isActive} disabled={!isActive} onClick={(e) => { setActive(i) }} className="cur-pointer mar-y-1">{cl.split(":")[0]}</Chip>
            )
          })}
      </Stack>
      <Stack column contentCenter fullWidth>
        <div key={`code-example-${active}`} className="box-siz-border-box max-wid-full ove-auto box-sha-lg pad-5 bor-rad-3">
          <pre className="mar-0">
            <code className="fon-siz-large language-css hljs bor-rad-2 max-wid-md mar-x-auto"
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