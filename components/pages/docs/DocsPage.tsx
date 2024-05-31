import React from 'react';
import { Header } from '../../Header';
import { Footer } from '../../Footer';
import { Section } from 'cssville-ui/build/components/ui/simple/Section';
import { Display, Text } from 'cssville-ui/build/components/ui/simple/Typography';
import { Stack } from "cssville-ui/build/components/ui/simple/Stack";
import { LeftMenu } from "./LeftMenu";

export const DocsPage = (props) => {
  var activeItem = props.activeItem;
  var activeCategory = props.activeCategory;
  var title = props.title;
  return (
    <>
      <Header />
      <Section lg>
        <Stack noGap row fullWidth className="max-wid-12 pos-relative">
          <LeftMenu activeItem={activeItem} activeCategory={activeCategory}/>
          <Stack xs column fullWidth className="max-wid-9">
            <Display className="bor-bot-1 wid-12 mar-bot-6">{title}</Display>
            {props.children}
          </Stack>
        </Stack>
      </Section>
      <Footer />
    </>
  );
};