import React from 'react';

export const Header = (props: any) => {
  return (
    <div className="d-flex flex-direction-row py-2 mb-3 border-bottom-1">
      <div className="d-flex align-items-center justify-content-center">
        <a href="/" className="d-flex text-decoration-none color-green-500">
          <img src="img/cssville.svg" alt="logo" className="h-32px w-32px py-2" />
          <div className="d-flex align-items-center justify-content-center md-d-none pl-3">
            <span className="fw-900 fs-x-large font-family-code">cssville</span>
          </div>
        </a>
      </div>
      <div className="md-d-none flex-grow-1"></div>
      <div className="d-flex flex-direction-row md-flex-direction-column md-mx-auto align-items-center justify-content-center">
        {
          [
            ['Demo', '#demo'],
            ['Prefixes', '#prefixes'],
            ['Classes', '#classes'],
          ].map(([text, href]) => (
            <a className="d-flex px-3 py-2 text-decoration-none bg-color-grey-100-hover br-3 color-blue-grey-900" href={href}>
              <span className="fs-medium fw-bold">{text}</span>
            </a>
          ))
        }
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <a className="d-flex ml-3 md-ml-0 px-3 md-px-2 py-2 text-decoration-none border-1 bg-color-grey-100-hover br-3 box-shadow-md color-blue-grey-900"
          href="https://github.com/cssville/cssville" target="_blank" rel="noopener">
          <img src="img/mark-github.svg" alt="mark-github" className="h-24px w-24px" />
          <div className="d-flex align-items-center justify-content-center md-d-none pl-2">
            <span className="fs-medium fw-900">Open source</span>
          </div>
        </a>
      </div>
    </div>
  );
} 