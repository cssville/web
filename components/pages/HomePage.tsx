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

export const HomePage = (props) => {
  return (
    <>
      <Stack column className="position-relative overflow-hidden bg-color-grey-50">
        <img className="position-absolute max-w-lg left-0 right-0 mx-auto object-fit-cover" src="img/grid.svg" alt="grid" />
        <Header />
        <Section lg contentCenter>
          <HeroSection />
        </Section>
      </Stack>
      <Section lg>
        <AboutSection />
        <DemoSection />
        <CssPrefixesSection />
        <CssClassesSection />
      </Section>
      <Footer />
    </>
  );
};