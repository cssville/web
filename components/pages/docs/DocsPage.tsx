import React from 'react';
import { Header } from '../../Header';
import { Footer } from '../../Footer';
import { Section } from 'cssville-ui/build/components/ui/simple/Section';
import { Display, Text } from 'cssville-ui/build/components/ui/simple/Typography';
import { Cssville } from "cssville-generators/build/cssville";
import { Stack } from "cssville-ui/build/components/ui/simple/Stack";

export const DocsPage = (props) => {
  console.log(props)
  var currentGenerator = props.generator;
  var generators = Cssville.generators;
  return (
    <>
      <Header />
      <Section lg>
        <Stack noGap row fullWidth className="max-w-12">
          <Stack xs column className="max-w-xs min-w-3 pr-6">
            <Text lg bold className="w-12">
              CSS classes
            </Text>
            {
              generators.map(g =>
                <a href={`/docs/${g.name}`} key={g.name} 
                className={`${g.name === currentGenerator ? "bg-color-blue-50 fw-bold" : ""} bg-color-blue-50-hover br-3 pl-4 px-3 py-2 w-12 box-sizing-border-box text-decoration-none color-blue-800`}>
                  {g.name}
                </a>)
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