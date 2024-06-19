import React from 'react';
import { Button } from 'cssville-ui/build/components/ui/simple/Button';
import { Section } from 'cssville-ui/build/components/ui/simple/Section';
import { Stack } from "cssville-ui/build/components/ui/simple/Stack";

export const Header = (props: any) => {
  return (
    <>
      <div className="wid-full bor-bot-1 pos-relative z-ind-1 bac-col-white">
        <Section lg noPadding>
          <Stack row fullWidth itemsCenter className="pad-3">
            <div className="dis-flex ali-ite-center jus-con-center">
              <a href="/" className="dis-flex tex-dec-none col-green-500">
                <img src="/img/cssville.svg" alt="logo" className="hei-32px wid-32px" />
                <div className="dis-flex ali-ite-center jus-con-center md-dis-none pad-lef-3">
                  <span className="fon-wei-900 fon-siz-x-large fon-fam-code">cssville</span>
                </div>
              </a>
            </div>
            <div className="md-dis-none fle-gro-1"></div>
            <div className="dis-flex fle-dir-row md-fle-dir-column md-mar-x-auto ali-ite-center jus-con-center mar-rig-4">
              {
                [
                  ['Docs', '/docs/intro/getting-started'],
                  ['CSS Classes', '/docs/css-classes/align-content'],
                  ['Components', '/docs/components/button'],
                ].map(([text, href]) => (
                  <a key={href} className="dis-flex pad-x-4 pad-y-3 tex-dec-none bac-col-grey-100-hover bor-rad-4 col-blue-grey-900" href={href}>
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
