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
      <Text xl>Chip colors:</Text>
      <Chip primary>Primary chip</Chip> <Chip secondary>Secondary chip</Chip>
      <Divider sm noborder />
      <Chip success>Success chip</Chip> <Chip info>Info chip</Chip> <Chip warning>Warning chip</Chip> <Chip error>Error chip</Chip>
    </CommonPage>
  );
};