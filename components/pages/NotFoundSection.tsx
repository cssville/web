import React from 'react';
import { Display, Text } from 'cssville-ui/build/components/ui/simple/Typography';
import { Button } from 'cssville-ui/build/components/ui/simple/Button';
import { Stack } from 'cssville-ui/build/components/ui/simple/Stack';
import { Section } from "cssville-ui/build/components/ui/simple/Section";

export function NotFoundSection(props: any) {
  return <Section lg className="fle-gro-1">
    <Display className="bor-bot-1 wid-full mar-bot-6">{props.title}</Display>
    <Stack column md className="wid-full">
      <Text>The page you are looking for can not be found</Text>
      <Stack row>
        <Button primary href="/" tag="a">Home</Button>
        <Button secondary href="/docs" tag="a">Docs</Button>
      </Stack>
    </Stack>
  </Section>;
}
