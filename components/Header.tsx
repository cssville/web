import React from 'react';
import { Button } from 'cssville-ui/build/components/ui/simple/Button';
import { Section } from 'cssville-ui/build/components/ui/simple/Section';

export const Header = (props: any) => {
  return (
    <>
      <div className="w-12 border-bottom-1 position-relative z-1 bg-color-white">
        <Section lg>
          <div className="d-flex flex-direction-row align-items-center justify-content-center w-12">
            <div className="d-flex align-items-center justify-content-center">
              <a href="/" className="d-flex text-decoration-none color-green-500">
                <img src="/img/cssville.svg" alt="logo" className="h-32px w-32px py-3" />
                <div className="d-flex align-items-center justify-content-center md-d-none pl-3">
                  <span className="fw-900 fs-x-large font-family-code">cssville</span>
                </div>
              </a>
            </div>
            <div className="md-d-none flex-grow-1"></div>
            <div className="d-flex flex-direction-row md-flex-direction-column md-mx-auto align-items-center justify-content-center mr-4">
              {
                [
                  ['Demo', '#demo'],
                  ['Prefixes', '#prefixes'],
                  ['Classes', '#classes'],
                ].map(([text, href]) => (
                  <a className="d-flex px-4 py-3 text-decoration-none bg-color-grey-100-hover br-4 color-blue-grey-900" href={href}>
                    <span className="fs-medium fw-500">{text}</span>
                  </a>
                ))
              }
            </div>
            <Button bold tag={"a"} href="https://github.com/cssville/cssville" target="_blank" rel="noopener"
              icon={<img src="/img/mark-github.svg" alt="mark-github" className="h-100 w-100" />} >
              Open source
            </Button>
          </div>
        </Section>
      </div>
    </>
  );
}
