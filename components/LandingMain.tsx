import React, { useState } from 'react';
import { Chip } from './Chip';

export const LandingMain = (props: any) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyClick = () => {
    const textToCopy = "npm install cssville";

    // Use the Clipboard API to copy text to clipboard
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Revert the icon and state after 2 seconds
      })
      .catch((error) => {
        console.error('Failed to copy text: ', error);
      });
  };
  return (
    <div className="d-flex py-5 flex-direction-column">
      <div className="d-flex lg-flex-direction-column w-12 justify-content-center">
        <div className="d-flex w-8 xl-w-12">
          <div className="d-flex flex-direction-column align-items-center">
            <h1 className="fs-4x-large m-0 pb-5 lg-pb-3 md-fs-xxx-large text-align-center">
              The <span className="color-light-blue-700">most simple</span> CSS utility-first framework
            </h1>
            <div className="w-8 md-w-12 pb-5 lg-pb-3 text-align-center">
              <p className="fs-larger p-0 m-0 lg-py-3 md-fs-large">
                Cssville is a utility-first CSS framework with zero dependencies.
                Develop faster using classes like <Chip text="d-flex"/>, <Chip text="cursor-pointer"/>, and <Chip text="py-2"/>.
              </p>
            </div>
            <div className="d-flex justify-content-center pb-4">
              <div id="copy" className="d-flex p-3 text-decoration-none bg-color-blue-grey-900 br-3 w-fit-content align-items-center sm-p-2 sm-br-2 cursor-pointer box-shadow-lg" onClick={handleCopyClick}>
                <img src="img/chevron-right.svg" alt=">" className="h-24px w-24px pr-3 sm-pr-1" />
                <div className="d-flex align-items-center justify-content-center pr-4 sm-pr-3">
                  <span className="fs-larger fw-bold font-family-code sm-fs-medium color-blue-grey-200"><span className="hljs-name">npm</span> install <span className="hljs-attr">cssville</span></span>
                </div>
                <img id="copy-icon" src={isCopied ? "img/copied.svg" : "img/copy.svg"} alt={isCopied ? "copied" : "copy"} className="h-24px w-24px pr-2"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}