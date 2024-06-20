import React from 'react';

export const Logo = (props: any) => {
  return (
    <div className={`dis-flex ali-ite-center jus-con-center ${props.className}`}>
      <a href="/" className="dis-flex tex-dec-none col-green-500">
        <img src="/img/cssville.svg" alt="logo" className="hei-32px wid-32px" />
        <div className="dis-flex ali-ite-center jus-con-center md-dis-none pad-lef-3">
          <span className="fon-wei-900 fon-siz-x-large fon-fam-code">cssville</span>
        </div>
      </a>
    </div>
  );
}
