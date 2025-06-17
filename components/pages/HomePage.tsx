import React from 'react';
import { Header } from '../Header';
import { HeroSection } from '../HeroSection';
import { AboutSection } from '../AboutSection';
import { DemoSection } from '../DemoSection';
import { CssPrefixesSection } from '../CssPrefixesSection';
import { CssClassesSection } from '../CssClassesSection';
import { Footer } from '../Footer';
import { Section } from 'cssville-ui/build/components/ui/simple/Section';
import { Stack } from "cssville-ui/build/components/ui/simple/Stack";
import { PageMetadata } from '../PageMetadata';

export const HomePage = (props) => {
  return (
    <>
      <PageMetadata />
      <Stack column className="pos-relative ove-hidden bac-col-grey-50">
        <img className="pos-absolute max-wid-lg lef-0 rig-0 mar-x-auto obj-fit-cover" src="img/grid.svg" alt="grid" />
        <Header />
        <Section lg contentCenter>
          <HeroSection />
        </Section>
      </Stack>
      <Stack>
        <AboutSection />
        <DemoSection />
        <CssPrefixesSection />
        <CssClassesSection />
      </Stack>
      <Footer />
    </>
  );
};
