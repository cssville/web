import React from 'react';
import { Title, Text } from 'cssville-ui/build/components/ui/simple/Typography';
import { DocsPage } from "../DocsPage";


export const GettingStartedPage = (props) => {
  return (
    <DocsPage title={'Getting started'} activeCategory={"Introduction"} activeItem={"Getting started"}>
      <Title xl>Getting started</Title>
      <Text>Some text here</Text>
    </DocsPage>
  );
};