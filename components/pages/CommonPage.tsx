import React from 'react';
import { Header } from '../ui/complex/Header';
import { Footer } from '../ui/complex/Footer';
import { Section } from '../ui/simple/Section';

export const CommonPage = (props) => {
  return (
    <>
      <Header />
      <Section xl className='mh'>
        {props.children}
      </Section>
      <Footer />
    </>
  );
};