import React from 'react';
import { Header } from '../ui/complex/Header';
import { Footer } from '../ui/complex/Footer';
import { BodyText } from '../ui/simple/BodyText';
import { Separator } from '../ui/simple/Separator';

export const TypographyPage = (props) => {
  return (
    <>
      <div className="w-12 position-relative">
        <Header />
      </div>
      <div className="mh position-relative w-12">
        <div className="mx-auto max-w-xl py-4 px-5 lg-px-3 md-px-2">
          <BodyText text="Default body text" />
          <BodyText>Default body text</BodyText>
          <Separator lg />
          <BodyText xs>Extra small text</BodyText>
          <BodyText sm>Small body text</BodyText>
          <BodyText md>Medium body text</BodyText>
          <BodyText lg>Large body text</BodyText>
          <BodyText xl>Extra large text</BodyText>
        </div>
      </div>
      <Footer />
    </>
  );
};