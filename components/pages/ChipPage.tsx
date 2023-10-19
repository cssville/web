import React from 'react';
import { Chip } from '../ui/simple/Chip';
import { Divider } from '../ui/simple/Divider';
import { CommonPage } from './CommonPage';
import { Text } from '../ui/simple/Typography';

export const ChipPage = (props) => {
  return (
    <CommonPage title="Chip">
      <Text xl>Default chip:</Text>
      <Chip>Default chip</Chip>
      <Divider lg />
      <Text xl>Chip sizes:</Text>
      <Chip xs>Extra small</Chip> <Chip sm>Small size</Chip> <Chip md>Medium size</Chip> <Chip lg>Large size</Chip> <Chip xl>Extra large</Chip>
      <Divider lg />
      <Text xl>Default chips:</Text>
      <Chip primary>Primary chip</Chip> <Chip secondary>Secondary chip</Chip>
      <Divider sm noborder />
      <Chip success>Success chip</Chip> <Chip info>Info chip</Chip> <Chip warning>Warning chip</Chip> <Chip error>Error chip</Chip>
      <Text xl>Filled chips:</Text>
      <Chip primary filled>Primary chip</Chip> <Chip secondary filled>Secondary chip</Chip>
      <Divider sm noborder />
      <Chip success filled>Success chip</Chip> <Chip info filled>Info chip</Chip> <Chip warning filled>Warning chip</Chip> <Chip error filled>Error chip</Chip>
      <Text xl>Outline chips:</Text>
      <Chip primary outline>Primary chip</Chip> <Chip secondary outline>Secondary chip</Chip>
      <Divider sm noborder />
      <Chip success outline>Success chip</Chip> <Chip info outline>Info chip</Chip> <Chip warning outline>Warning chip</Chip> <Chip error outline>Error chip</Chip>
    </CommonPage>
  );
};