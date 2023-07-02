import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Head from '@docusaurus/Head';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import 'cssville';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <title>Cssville - Utility-first CSS framework</title>
        <meta name="description" content="Enhance your UI with ready-to-use CSS utility classes"/>
        <meta property="og:title" content="Cssville - Utility-first CSS framework" />
        <meta property="og:site_name" content="Cssville" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://cssville.xyz" />
        <meta property="og:image" content="https://cssville.xyz" />
        <meta property="og:description" content="Enhance your UI with ready-to-use CSS utility classes" />
        <meta name="twitter:title" content="Cssville - Utility-first CSS framework"/>
        <meta name="twitter:description" content="Enhance your UI with ready-to-use CSS utility classes"/>
        <meta name="twitter:image" content="https://cssville.xyz"/>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="CSS utility-first framework" />
        <link rel="stylesheet" type="text/css" href="cssville.css" />
        <link rel="stylesheet" type="text/css" href="site.css" />
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github-dark-dimmed.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script src="https://cdn.counter.dev/script.js" data-id="9ee700d3-02c7-4729-ad2c-8fe4a56d9f01" data-utcoffset="3"></script>
      </Head>
      <body class="p-0 m-0">
        <div class="w-12 position-relative">
          <div class="position-absolute h-100 w-12">
            <img src="img/bg.svg" class="w-12 h-100 object-fit-cover"/>
          </div>
          <div class="position-relative mx-auto max-w-lg px-5 lg-px-4 md-px-3 sm-px-2">
            <div class="d-flex flex-direction-row pb-4 pt-3 lg-pb-0">
              <a href="/" class="d-flex text-decoration-none green">
                <img src="img/cssville.svg" alt="logo" class="h-32px w-32px py-2"/>
                <div class="d-flex align-items-center justify-content-center sm-d-none pl-2">
                  <span class="fw-600 fs-x-large code">cssville</span>
                </div>
              </a>
              <div class="flex-grow-1"></div>
              <div class="d-flex align-items-center justify-content-center">
                <a class="d-flex px-3 py-2 text-decoration-none color-white bg-green br-2" 
                  href="https://github.com/cssville/cssville" target="_blank" rel="noopener">
                  <img src="img/mark-github.svg" alt="mark-github" class="h-24px w-24px"/>
                  <div class="d-flex align-items-flex-end justify-content-center xs-d-none px-2">
                    <span class="fs-large fw-bold">Open source</span>
                  </div>
                </a>
              </div>
            </div>
            <div class="d-flex py-5 flex-direction-column lg-my-0">
              <div class="d-flex lg-flex-direction-column lg-pt-4">
                <div class="d-flex flex-direction-column align-items-center justify-content-center py-3 w-7 lg-w-12">
                  <h1 class="fs-xxx-large m-0 pb-4 md-fs-xx-large">
                    Construct your UI with ready-to-use CSS utility classes
                  </h1>
                  <p class="fs-large p-0 m-0 lg-py-3 md-fs-large pr-4 md-pr-0">
                    Cssville is a utility-first CSS framework with zero dependencies.
                    Apply pre-defined classes directly to your HTML
                    and create a web UI ready for production.
                  </p>
                </div>
                <div class="w-5 py-3 d-flex justify-content-center lg-w-12">
                  <img src="img/city.svg" alt="city" class="max-w-12 lg-max-w-8 md-max-w-12"/>
                </div>
              </div>
              <div class="py-2 lg-pt-4">
                <div id="copy" class="d-flex p-3 text-decoration-none color-black dark br-3 w-fit-content sm-p-2 sm-br-2 cursor-pointer">
                  <img src="img/chevron-right.svg" alt=">" class="h-24px w-24px pr-3 sm-pr-1"/>
                  <div class="d-flex align-items-center justify-content-center pr-4 sm-pr-3">
                    <span class="fs-large fw-bold code hljs sm-fs-medium"><span class="hljs-name">npm</span> install <span class="hljs-attr">cssville</span></span>
                  </div>
                  <img id="copy-icon" src="img/copy.svg" alt="copy" class="h-24px w-24px pr-2"/>
                  <textarea id="input-copy" class="d-none" type="text">npm install cssville</textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
