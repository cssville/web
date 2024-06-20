import { Stack } from "cssville-ui/build/components/ui/simple/Stack";
import React from 'react';

export const Footer = (props: any) => {
  return (
    <Stack fullWidth className="pad-x-7">
      <Stack fullWidth lg row className="pad-y-7 md-fle-dir-column bor-top-1">
        <div className="wid-1/4 md-wid-full">
          <span>© Cssville 2024</span>
        </div>
        <Stack xs fullWidth itemsEnd>
          <span className="dis-flex ali-ite-center jus-con-center">
            Hosted by
            <a className="hei-6 tex-dec-none" href="https://github.com/" target="_blank">
              <span className="dis-flex ali-ite-center jus-con-center"><img src="/img/github.svg" className="hei-5 wid-5 mar-2" /> GitHub.</span>
            </a>
          </span>
          <span className="dis-flex ali-ite-center jus-con-center">
            Protected by
            <a className="hei-6 tex-dec-none" href="https://cloudback.it/" target="_blank">
              <span className="dis-flex ali-ite-center jus-con-center"><img src="/img/cloudback.svg" className="hei-5 wid-5 mar-2" /> Cloudback.</span>
            </a>
          </span>
          <span className="dis-flex ali-ite-center jus-con-center">
            Created by Evgeniy K.
            <a className="hei-6 tex-dec-none" href="https://twitter.com/elv1s42" target="_blank"><img src="/img/twitter.svg" className="hei-5 wid-5 mar-2" /></a>
            <a className="hei-6 tex-dec-none" href="https://github.com/elv1s42" target="_blank"><img src="/img/github.svg" className="hei-5 wid-5 mar-2" /></a>
          </span>
        </Stack>
      </Stack>
    </Stack>
  );
}