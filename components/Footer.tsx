import React from 'react';

export const Footer = (props: any) => {
  return (
    <div className="d-flex flex-direction-row md-flex-direction-column align-items-center justify-content-center w-12 mt-3 py-3 bg-color-grey-100 opacity-07">
      <div className="mr-3">
        <span>© Cssville 2023</span>
      </div>
      <div className="d-flex flex-direction-row md-flex-direction-column">
        <span className="d-flex align-items-center justify-content-center mr-2">
          Hosted by
          <a className="h-24px text-decoration-none" href="https://github.com/" target="_blank">
            <span className="d-flex align-items-center justify-content-center"><img src="img/github.svg" className="h-16px w-16px m-1" /> GitHub.</span>
          </a>
        </span>
        <span className="d-flex align-items-center justify-content-center mr-2">
          Protected by
          <a className="h-24px text-decoration-none" href="https://cloudback.it/" target="_blank">
            <span className="d-flex align-items-center justify-content-center"><img src="img/cloudback.svg" className="h-16px w-16px m-1" /> Cloudback.</span>
          </a>
        </span>
        <span className="d-flex align-items-center justify-content-center">
          Created by Evgeniy K.
          <a className="h-24px text-decoration-none" href="https://twitter.com/elv1s42" target="_blank"><img src="img/twitter.svg" className="h-16px w-16px m-1" /></a>
          <a className="h-24px text-decoration-none" href="https://github.com/elv1s42" target="_blank"><img src="img/github.svg" className="h-16px w-16px m-1" /></a>
        </span>
      </div>
    </div>
  );
}