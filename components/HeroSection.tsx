import React, { useState } from 'react';
import { Chip } from './ui/simple/Chip';
import { Display, Text } from "./ui/simple/Typography"
import { Divider } from './ui/simple/Divider';

export const HeroSection = (props: any) => {
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
    <div className="d-flex py-7 flex-direction-column">
      <div className="d-flex py-6 lg-flex-direction-column w-12 justify-content-center">
        <div className="d-flex w-8 lg-w-12">
          <div className="d-flex flex-direction-column align-items-center">
            <Display xl dynamic centered>
              The <span className="color-light-blue-700">most simple</span> CSS utility-first framework
            </Display>
            <Text xl className="w-7 md-w-12 pb-7 lg-pb-5 text-align-center">
              Cssville is a utility-first CSS framework with zero dependencies.
              Develop faster using classes like <Chip>d-flex</Chip>, <Chip>cursor-pointer</Chip>, and <Chip>py-2</Chip>.
            </Text>
            <Divider lg noborder />
            <div className="d-flex justify-content-center">
              <div id="copy" className="d-flex text-decoration-none bg-color-blue-grey-900 br-5 md-br-4 w-fit-content align-items-center p-5 sm-p-4 sm-br-3 cursor-pointer box-shadow-lg" onClick={handleCopyClick}>
                <img src="img/chevron-right.svg" alt=">" className="h-24px w-24px pr-5 sm-pr-4" />
                <div className="d-flex align-items-center justify-content-center pr-5 sm-pr-4">
                  <span className="fs-larger fw-bold font-family-code sm-fs-medium color-blue-grey-200"><span className="hljs-name">npm</span> install <span className="hljs-attr">cssville</span></span>
                </div>
                <img id="copy-icon" src={isCopied ? "img/copied.svg" : "img/copy.svg"} alt={isCopied ? "copied" : "copy"} className="h-24px w-24px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}