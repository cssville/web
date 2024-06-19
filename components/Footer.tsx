import React from 'react';

export const Footer = (props: any) => {
  return (
    <div className="dis-flex fle-dir-row md-fle-dir-column ali-ite-center jus-con-center wid-full pad-y-5 bac-col-grey-100 opa-07">
      <div className="mar-rig-4">
        <span>© Cssville 2024</span>
      </div>
      <div className="dis-flex fle-dir-row md-fle-dir-column">
        <span className="dis-flex ali-ite-center jus-con-center mar-rig-4">
          Hosted by
          <a className="hei-6 tex-dec-none" href="https://github.com/" target="_blank">
            <span className="dis-flex ali-ite-center jus-con-center"><img src="/img/github.svg" className="hei-5 wid-5 mar-2" /> GitHub.</span>
          </a>
        </span>
        <span className="dis-flex ali-ite-center jus-con-center mar-rig-4">
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
      </div>
    </div>
  );
}