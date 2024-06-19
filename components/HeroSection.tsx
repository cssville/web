import React, { useState } from 'react';
import { Chip } from 'cssville-ui/build/components/ui/simple/Chip';
import { Display, Text } from "cssville-ui/build/components/ui/simple/Typography"
import { Stack } from 'cssville-ui/build/components/ui/simple/Stack';
import { Button } from 'cssville-ui/build/components/ui/simple/Button';

export const HeroSection = (props: any) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyClick = () => {
    navigator.clipboard.writeText("npm install cssville")
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000);
      })
      .catch((error) => {
        console.error('Failed to copy text: ', error);
      });
  };
  return (
    <Stack column xl fullWidth className="wid-10/12 lg-wid-full pad-y-10">
      <Stack column xl itemsCenter fullWidth>
        <Display lg centered dynamic noPadding className="wid-3/4 md-wid-full">
          The <span className="col-light-blue-700">most simple</span> CSS utility-first framework
        </Display>
        <Text xl centered className="wid-1/2 md-wid-full">
          Cssville is a utility-first CSS framework with zero dependencies.
          Develop faster using classes like <Chip>dis-flex</Chip>, <Chip>cur-pointer</Chip>, and <Chip>pad-y-2</Chip>.
        </Text>
        <Stack row contentCenter>
          <Button secondary filled lg className="bac-col-blue-grey-900" onClick={handleCopyClick}
            startIcon={<img src="img/chevron-right.svg" alt=">" className="hei-100 wid-full" />}
            endIcon={<img id="copy-icon" src={isCopied ? "img/copied.svg" : "img/copy.svg"} alt={isCopied ? "copied" : "copy"} className="hei-100 wid-full" />}
            buttonText={<span key="text" className="fon-siz-xl md-fon-siz-lg fon-wei-bold fon-fam-code col-blue-grey-200"><span className="hljs-name">npm</span> install <span className="hljs-attr">cssville</span></span>} />
        </Stack>
      </Stack>
    </Stack>
  );
}