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
      <Section lg className="fle-gro-1">
        <Display className="bor-bot-1 wid-12 mar-bot-6">{props.title}</Display>
        {props.children}
      </Section>
      <Footer />
    </>
  );
};