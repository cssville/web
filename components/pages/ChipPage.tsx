import React from 'react';
import { Header } from '../ui/complex/Header';
import { Footer } from '../ui/complex/Footer';
import { Chip } from '../ui/simple/Chip';
import { Separator } from '../ui/simple/Separator';

export const ChipPage = (props) => {
  return (
    <>
      <div className="w-12 position-relative">
        <Header />
      </div>
      <div className="mh position-relative w-12">
        <div className="mx-auto max-w-xl py-4 px-5 lg-px-3 md-px-2">
          <Chip txt="Awesome chip" /> <Chip>Cool chip</Chip>
          <Separator xl />
          <Chip xs>Extra small</Chip> <Chip sm>Small size</Chip> <Chip md>Medium size</Chip> <Chip lg>Large size</Chip> <Chip xl>Extra large</Chip>
          <Separator xl />
          <Chip primary>Primary chip</Chip> <Chip secondary>Secondary chip</Chip>
          <Separator xl />
          <Chip success>Success chip</Chip> <Chip info>Info chip</Chip> <Chip warning>Warning chip</Chip> <Chip error>Error chip</Chip>
        </div>
      </div>
      <Footer />
    </>
  );
};