import * as ReactDOM from 'react-dom/client';
import React = require("react");
import hljs from 'highlight.js';
import "./site.css";
import "cssville/cssville.css";
import { Footer } from './components/Footer';
import { CssPrefixesSection } from './components/CssPrefixesSection';
import { CssClassesSection } from './components/CssClassesSection';
import { Header } from './components/Header';
import { LandingMain } from './components/LandingMain';
import { AboutSection } from './components/AboutSection';
import { DemoSection } from './components/DemoSection';

function docReady(fn: () => void) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

let hasCopied = false;


docReady(function () {

  const rootNode = 
  <>
    <div className="w-12 position-relative">
      <div className="position-absolute h-100 w-12">
        <img src="img/bg.svg" className="w-12 h-100 object-fit-cover"/>
      </div>
      <div className="position-relative mx-auto max-w-xl px-5 lg-px-4 md-px-3 sm-px-2">
        <Header />
        <LandingMain />
      </div>
    </div>
    <div className="position-relative mx-auto max-w-xl py-4 px-5 lg-px-4 md-px-3 sm-px-2">
      <AboutSection/>
      <DemoSection/>
      <CssPrefixesSection/>
      <CssClassesSection/>
    </div>
      <Footer/>
  </>;
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<>{rootNode}</>);
  hljs.highlightAll();
});