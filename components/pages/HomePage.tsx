import React from 'react';
import { Header } from '../Header';
import { HeroSection } from '../HeroSection';
import { AboutSection } from '../AboutSection';
import { DemoSection } from '../DemoSection';
import { CssPrefixesSection } from '../CssPrefixesSection';
import { CssClassesSection } from '../CssClassesSection';
import { Footer } from '../Footer';
import { Section } from 'cssville-ui/build/components/ui/simple/Section';

export const HomePage = (props) => {
  return (
    <>
      <div className="w-12 position-relative">
        <div className="position-absolute h-100 w-12 grad">
        </div>
        <Header />
        <Section xl contentCenter>
          <HeroSection />
        </Section>
      </div>
      <Section xl>
        <AboutSection />
        <DemoSection />
        <CssPrefixesSection />
        <CssClassesSection />
      </Section>
      <Footer />
    </>
  );
};