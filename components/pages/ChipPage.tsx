import React from 'react';
import { Chip } from '../ui/simple/Chip';
import { Separator } from '../ui/simple/Separator';
import { BodyText } from '../ui/simple/BodyText';
import { CommonPage } from './CommonPage';

export const ChipPage = (props) => {
  return (
    <CommonPage>
      <BodyText xl>Default chip:</BodyText>
      <Chip txt="Awesome chip" /> <Chip>Cool chip</Chip>
      <Separator lg />
      <BodyText xl>Chip sizes:</BodyText>
      <Chip xs>Extra small</Chip> <Chip sm>Small size</Chip> <Chip md>Medium size</Chip> <Chip lg>Large size</Chip> <Chip xl>Extra large</Chip>
      <Separator lg />
      <BodyText xl>Chip colors:</BodyText>
      <Chip primary>Primary chip</Chip> <Chip secondary>Secondary chip</Chip>
      <Separator sm noborder />
      <Chip success>Success chip</Chip> <Chip info>Info chip</Chip> <Chip warning>Warning chip</Chip> <Chip error>Error chip</Chip>
    </CommonPage>
  );
};