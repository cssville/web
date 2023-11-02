import React, { useState } from 'react';
import { Chip } from './ui/simple/Chip';
import { Display, Text } from "./ui/simple/Typography"
import { Divider } from './ui/simple/Divider';
import { Row } from './ui/simple/Row';
import { Button } from './ui/simple/Button';
import { Column } from './ui/simple/Column';

export const HeroSection = (props: any) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyClick = () => {
    navigator.clipboard.writeText("npm install cssville")
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((error) => {
        console.error('Failed to copy text: ', error);
      });
  };
  return (
    <Column xl className="w-8 lg-w-12">
      <Column xl nospace contentCenter>
        <Display xl centered dynamic>
          The <span className="color-light-blue-700">most simple</span> CSS utility-first framework
        </Display>
        <Text xl centered className="w-7 md-w-12">
          Cssville is a utility-first CSS framework with zero dependencies.
          Develop faster using classes like <Chip>d-flex</Chip>, <Chip>cursor-pointer</Chip>, and <Chip>py-2</Chip>.
        </Text>
        <Divider lg noborder />
        <Row contentCenter>
          <Button secondary filled lg className="bg-color-blue-grey-900" onClick={handleCopyClick}
            startIcon={<img src="img/chevron-right.svg" alt=">" className="h-100 w-100" />}
            endIcon={<img id="copy-icon" src={isCopied ? "img/copied.svg" : "img/copy.svg"} alt={isCopied ? "copied" : "copy"} className="h-100 w-100" />}
            buttonText={<span className="fs-xl md-fs-lg fw-bold font-family-code color-blue-grey-200"><span className="hljs-name">npm</span> install <span className="hljs-attr">cssville</span></span>} />
        </Row>
      </Column>
    </Column>
  );
}