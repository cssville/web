import React from 'react';

export const Logo = (props: any) => {
  return (
    <div className={`dis-flex fle-dir-column ali-ite-center ${props.className}`}>
      <a href="/" className="dis-flex tex-dec-none col-green-500 ali-ite-center jus-con-center">
        <img src="/img/cssville.svg" alt="logo" className="hei-8 wid-8 mar-rig-4" />
        <span className="fon-wei-900 fon-siz-x-large fon-fam-code md-dis-none">cssville</span>
      </a>
    </div>
  );
}
