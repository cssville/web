import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Section } from 'cssville-ui/build/components/ui/simple/Section';
import { Display } from 'cssville-ui/build/components/ui/simple/Typography';
import { Divider } from 'cssville-ui/build/components/ui/simple/Divider';

export const CommonPage = (props) => {
  return (
    <>
      <Header />
      <Section lg className="flex-grow-1">
        <Display className="border-bottom-1 w-12 mb-6">{props.title}</Display>
        {props.children}
      </Section>
      <Footer />
    </>
  );
};