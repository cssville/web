import React from 'react';
import { Footer } from '../../Footer';
import { Section } from 'cssville-ui/build/components/ui/simple/Section';
import { Display, Text } from 'cssville-ui/build/components/ui/simple/Typography';
import { Stack } from "cssville-ui/build/components/ui/simple/Stack";
import { LeftMenu } from "./LeftMenu";
import { Outlet, useMatches, useLocation } from "react-router-dom";
import { IGenerator } from "cssville-generators/build/IGenerator";
import { Cssville } from "cssville-generators/build/cssville";
import { NotFoundSection } from "../NotFoundSection";


export const DocsLayout = () => {
  let loc = useLocation();
  const matches = useMatches()
  const match = matches[matches.length - 1]

  let activeCategory = ""
  let title = ""
  let activeItem = ""

  const handle = match.handle;
  if (handle != undefined) {
    activeCategory = handle['category']
    title = handle['title']
    activeItem = handle['item']
  }

  if (title === "") {
    const parts = loc.pathname.split("/")
    const gen = parts[parts.length - 1]
    var generator: IGenerator = Cssville.generators.find(g => g.name === gen)
    if (generator !== undefined) {
      title = generator.name
      activeItem = generator.name
    }
  }

  return (
    <Section lg noPadding>
      <Stack noGap fullWidth row className="pad-x-4">
        <LeftMenu activeItem={activeItem} activeCategory={activeCategory} />
        <Stack xl fullWidth className="min-hei-100vh">
          <Stack xs fullWidth className="pad-x-7 fle-gro-1">
            {title === ""
              ? <NotFoundSection />
              : <>
                <Display className="bor-bot-1 wid-full mar-bot-6">{title}</Display>
                <Outlet />
              </>}
          </Stack>
          <Footer />
        </Stack>
      </Stack>
    </Section>
  );
};