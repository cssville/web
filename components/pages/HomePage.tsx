import React from 'react';
import { Header } from '../ui/complex/Header';
import { HeroSection } from '../HeroSection';
import { AboutSection } from '../AboutSection';
import { DemoSection } from '../DemoSection';
import { CssPrefixesSection } from '../CssPrefixesSection';
import { CssClassesSection } from '../CssClassesSection';
import { Footer } from '../ui/complex/Footer';

export const HomePage = (props) => {
  return (
    <>
      <div className="w-12 position-relative">
        <div className="position-absolute h-100 w-12 grad">
        </div>
        <Header />
        <div className="position-relative mx-auto max-w-xl px-5 lg-px-3 md-px-2">
          <HeroSection />
        </div>
      </div>
      <div className="position-relative mx-auto max-w-xl py-4 px-5 lg-px-3 md-px-2">
        <AboutSection />
        <DemoSection />
        <CssPrefixesSection />
        <CssClassesSection />
      </div>
      <Footer />
    </>
  );
};