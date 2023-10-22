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
      
      <Text xl>Default chip sizes:</Text>
      <Chip xs>Extra small</Chip> <Chip sm>Small size</Chip> <Chip md>Medium size</Chip> <Chip lg>Large size</Chip> <Chip xl>Extra large</Chip>
      
      <Text xl>Rounded chip sizes:</Text>
      <Chip xs rounded>Extra small</Chip> <Chip sm rounded>Small size</Chip> <Chip md rounded>Medium size</Chip> <Chip lg rounded>Large size</Chip> <Chip xl rounded>Extra large</Chip>
      
      <Divider lg />

      <Text xl>Default chips:</Text>
      <Chip primary>Primary chip</Chip> <Chip secondary>Secondary chip</Chip>
      <Divider sm noborder />
      <Chip success>Success chip</Chip> <Chip info>Info chip</Chip> <Chip warning>Warning chip</Chip> <Chip error>Error chip</Chip>
      
      <Text xl>Filled chips:</Text>
      <Chip primary filled>Primary chip</Chip> <Chip secondary filled>Secondary chip</Chip>
      <Divider sm noborder />
      <Chip success filled>Success chip</Chip> <Chip info filled>Info chip</Chip> <Chip warning filled>Warning chip</Chip> <Chip error filled>Error chip</Chip>
      
      <Text xl>Filled rounded chips:</Text>
      <Chip primary filled rounded>Primary chip</Chip> <Chip secondary filled rounded>Secondary chip</Chip>
      <Divider sm noborder />
      <Chip success filled rounded>Success chip</Chip> <Chip info filled rounded>Info chip</Chip> <Chip warning filled rounded>Warning chip</Chip> <Chip error filled rounded>Error chip</Chip>
      
      <Text xl>Outline chips:</Text>
      <Chip primary outline>Primary chip</Chip> <Chip secondary outline>Secondary chip</Chip>
      <Divider sm noborder />
      <Chip success outline>Success chip</Chip> <Chip info outline>Info chip</Chip> <Chip warning outline>Warning chip</Chip> <Chip error outline>Error chip</Chip>
      
      <Text xl>Outline rounded chips:</Text>
      <Chip primary outline rounded>Primary chip</Chip> <Chip secondary outline rounded>Secondary chip</Chip>
      <Divider sm noborder />
      <Chip success outline rounded>Success chip</Chip> <Chip info outline rounded>Info chip</Chip> <Chip warning outline rounded>Warning chip</Chip> <Chip error outline rounded>Error chip</Chip>
    </CommonPage>
  );
};