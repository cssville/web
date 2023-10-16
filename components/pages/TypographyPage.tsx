import React from 'react';
import { BodyText } from '../ui/simple/BodyText';
import { Separator } from '../ui/simple/Separator';
import { CommonPage } from './CommonPage';

export const TypographyPage = (props) => {
  return (
    <CommonPage>
      <BodyText xl>Default BodyText:</BodyText>
      <BodyText text="Default body text" />
      <BodyText>Default body text</BodyText>
      <Separator lg />
      <BodyText xl>BodyText sizes:</BodyText>
      <BodyText xs>Extra small text</BodyText>
      <BodyText sm>Small body text</BodyText>
      <BodyText md>Medium body text</BodyText>
      <BodyText lg>Large body text</BodyText>
      <BodyText xl>Extra large text</BodyText>
    </CommonPage>
  );
};