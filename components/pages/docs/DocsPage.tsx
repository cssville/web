import React from 'react';
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
    <Section lg noPadding>
      <Stack noGap row fullWidth className="pad-x-4 pos-relative">
        <LeftMenu activeItem={activeItem} activeCategory={activeCategory} />
        <Stack xl fullWidth>
          <Stack xs fullWidth className="pad-x-7">
            <Display className="bor-bot-1 wid-full mar-bot-6">{title}</Display>
            {props.children}
          </Stack>
          <Footer />
        </Stack>
      </Stack>
    </Section>
  );
};