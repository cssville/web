import { Section } from "cssville-ui/build/components/ui/simple/Section";
import { Stack } from "cssville-ui/build/components/ui/simple/Stack";
import React from 'react';

export const Footer = (props: any) => {
  return (

    <div className="wid-full bor-bot-1 pos-relative z-ind-1 bac-col-white">
      <Section lg noPadding>
        <Stack sm row fullWidth itemsCenter className="pad-6 bor-top-1 md-fle-dir-column">
          <div className="wid-1/4 md-wid-full">
            <span>© Cssville 2026</span>
          </div>
          <Stack xs fullWidth className="ali-ite-end sm-ali-ite-start">
            <span className="dis-flex ali-ite-center jus-con-center">
              Hosted by
              <a className="hei-7 tex-dec-none" href="https://github.com/" target="_blank">
                <span className="dis-flex ali-ite-center jus-con-center"><img src="/img/github.svg" className="hei-6 wid-6 mar-3" /> GitHub.</span>
              </a>
            </span>
            <span className="dis-flex ali-ite-center jus-con-center">
              Protected by
              <a className="hei-7 tex-dec-none" href="https://cloudback.it/" target="_blank">
                <span className="dis-flex ali-ite-center jus-con-center"><img src="/img/cloudback.svg" className="hei-6 wid-6 mar-3" /> Cloudback.</span>
              </a>
            </span>
          </Stack>
        </Stack>
      </Section>
    </div>
  );
}