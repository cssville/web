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
        <Stack noGap row fullWidth className="max-wid-12">
          <Stack xs column className="max-wid-xs min-wid-3 pad-rig-6">
            <Text lg bold className="wid-12">
              CSS classes
            </Text>
            {
              generators.map(g =>
                <a href={`/docs/${g.name}`} key={g.name} 
                className={`${g.name === currentGenerator ? "bac-col-blue-50 fon-wei-bold" : ""} bac-col-blue-50-hover bor-rad-3 pad-lef-4 pad-x-3 pad-y-2 wid-12 box-siz-border-box tex-dec-none col-blue-800`}>
                  {g.name}
                </a>)
            }
          </Stack>
          <Stack xs column fullWidth className="max-wid-9">
            <Display className="bor-bot-1 wid-12 mar-bot-6">{props.title}</Display>
            {props.children}
          </Stack>
        </Stack>
      </Section>
      <Footer />
    </>
  );
};