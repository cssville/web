import React from 'react';
import { Header } from '../../Header';
import { Footer } from '../../Footer';
import { Section } from 'cssville-ui/build/components/ui/simple/Section';
import { Display } from 'cssville-ui/build/components/ui/simple/Typography';
import { Cssville } from "cssville-generators/build/cssville";
import { Stack } from "cssville-ui/build/components/ui/simple/Stack";

export const DocsPage = (props) => {
  var currentGenerator = props.generator;
  var generators = Cssville.generators;
  return (
    <>
      <Header />
      <Section lg>
        <Stack noGap row fullWidth className="max-w-12">
          <Stack sm column className="max-w-xs min-w-3 pr-6">
            <div className="fw-bold w-12">
              CSS classes
            </div>
            {
              generators.map(g =>
                <a href={`/docs/${g.name}`} key={g.name} className={`${g.name === currentGenerator ? "bg-color-grey-50" : ""} br-3 pl-4 px-3 w-12`}>
                  {g.name}
                </a>
              )
            }
          </Stack>
          <Stack xs column fullWidth className="max-w-9">
            <Display className="border-bottom-1 w-12 mb-6">{props.title}</Display>
            {props.children}
          </Stack>
        </Stack>
      </Section>
      <Footer />
    </>
  );
};