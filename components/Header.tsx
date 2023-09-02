import React = require("react");

export const Header = (props: any) => {
    return (
      <div className="d-flex flex-direction-row pb-4 pt-3 md-pb-0">
        <a href="/" className="d-flex text-decoration-none green">
          <img src="img/cssville.svg" alt="logo" className="h-48px w-48px py-2"/>
          <div className="d-flex align-items-center justify-content-center sm-d-none pl-3">
            <span className="fw-900 fs-x-large code">cssville</span>
          </div>
        </a>
        <div className="flex-grow-1"></div>
        <div className="d-flex align-items-center justify-content-center">
          <a className="d-flex px-3 py-2 text-decoration-none color-white bg-green br-3" 
            href="https://github.com/cssville/cssville" target="_blank" rel="noopener">
            <img src="img/mark-github.svg" alt="mark-github" className="h-32px w-32px"/>
            <div className="d-flex align-items-center justify-content-center xs-d-none px-3">
              <span className="fs-large fw-bold">Open source</span>
            </div>
          </a>
        </div>
      </div>
    );
}