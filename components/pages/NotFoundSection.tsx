import React, { useEffect } from 'react';
import { Display, Text } from 'cssville-ui/build/components/ui/simple/Typography';
import { Button } from 'cssville-ui/build/components/ui/simple/Button';
import { Stack } from 'cssville-ui/build/components/ui/simple/Stack';
import { Section } from "cssville-ui/build/components/ui/simple/Section";

export function NotFoundSection(props: any) {
  const title = props.title ? props.title : "404"

  // The SPA serves every path with 200, so mark not-found views noindex to avoid soft 404s
  useEffect(() => {
    const robots = document.querySelector('meta[name="robots"]');
    robots?.setAttribute('content', 'noindex');
    return () => robots?.setAttribute('content', 'index, follow');
  }, []);

  return (
    <Section lg className="fle-gro-1">
      <Display className="bor-bot-1 wid-full mar-bot-7">{title}</Display>
      <Stack column md className="wid-full">
        <Text>The page you are looking for can not be found</Text>
        <Stack row>
          <Button primary href="/" tag="a">Home</Button>
          <Button secondary href="/docs" tag="a">Docs</Button>
        </Stack>
      </Stack>
    </Section>
  );
}
