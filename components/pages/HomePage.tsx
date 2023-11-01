import React from 'react';
import { Header } from '../ui/Header';
import { HeroSection } from '../HeroSection';
import { AboutSection } from '../AboutSection';
import { DemoSection } from '../DemoSection';
import { CssPrefixesSection } from '../CssPrefixesSection';
import { CssClassesSection } from '../CssClassesSection';
import { Footer } from '../ui/Footer';
import { Section } from '../ui/simple/Section';

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
        <Footer />
      </Section>
    </>
  );
};