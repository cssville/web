import React from 'react';
import { Button } from 'cssville-ui/build/components/ui/simple/Button';
import { Section } from 'cssville-ui/build/components/ui/simple/Section';
import { Stack } from "cssville-ui/build/components/ui/simple/Stack";
import { Logo } from "./Logo";

export const Header = (props: any) => {
  return (
    <>
      <div className="wid-full bor-bot-1 pos-relative z-ind-1 bac-col-white">
        <Section lg noPadding>
          <Stack sm row fullWidth itemsCenter className="pad-4">
            <Logo/>
            <div className="md-dis-none fle-gro-1"></div>
            <div className="dis-flex fle-dir-row md-fle-dir-column md-mar-x-auto ali-ite-center jus-con-center">
              {
                [
                  ['Docs', '/docs/intro/getting-started'],
                  ['CSS Classes', '/docs/css-classes/align-content'],
                  ['Components', '/docs/components/button'],
                ].map(([text, href]) => (
                  <a key={href} className="dis-flex pad-x-5 pad-y-4 tex-dec-none bac-col-grey-100-hover bor-rad-5 col-blue-grey-900" href={href}>
                    <span className="fon-siz-medium fon-wei-500">{text}</span>
                  </a>
                ))
              }
            </div>
            <Button bold tag={"a"} href="https://github.com/cssville/cssville" target="_blank" rel="noopener"
              icon={<img src="/img/mark-github.svg" alt="mark-github" className="hei-100 wid-full" />} >
              Open source
            </Button>
          </Stack>
        </Section>
      </div>
    </>
  );
}
