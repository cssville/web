import React from 'react';
import { Button } from '../ui/simple/Button';
import { Divider } from '../ui/simple/Divider';
import { CommonPage } from './CommonPage';
import { Text } from '../ui/simple/Typography';

export const ButtonPage = (props) => {
  return (
    <CommonPage title="Button">
      <Text xl>Default chip:</Text>
      <Button>Default chip</Button> <Button disabled>Disabled chip</Button>

      <Divider lg />

      <Text xl>Default chip sizes:</Text>
      <Button xs>Extra small</Button> <Button sm>Small size</Button> <Button md>Medium size</Button> <Button lg>Large size</Button> <Button xl>Extra large</Button>

      <Text xl>Rounded chip sizes:</Text>
      <Button xs rounded>Extra small</Button> <Button sm rounded>Small size</Button> <Button md rounded>Medium size</Button> <Button lg rounded>Large size</Button> <Button xl rounded>Extra large</Button>

      <Divider lg />

      <Text xl>Default chips:</Text>
      <Button primary>Primary chip</Button> <Button secondary>Secondary chip</Button> <Button success>Success chip</Button> <Button info>Info chip</Button> <Button warning>Warning chip</Button> <Button error>Error chip</Button>

      <Text xl>Noborder chips:</Text>
      <Button primary noborder>Primary chip</Button> <Button secondary noborder>Secondary chip</Button> <Button success noborder>Success chip</Button> <Button info noborder>Info chip</Button> <Button warning noborder>Warning chip</Button> <Button error noborder>Error chip</Button>

      <Text xl>Square chips:</Text>
      <Button primary square>Primary chip</Button> <Button secondary square>Secondary chip</Button> <Button success square>Success chip</Button> <Button info square>Info chip</Button> <Button warning square>Warning chip</Button> <Button error square>Error chip</Button>

      <Text xl>Filled chips:</Text>
      <Button primary filled>Primary chip</Button> <Button secondary filled>Secondary chip</Button> <Button success filled>Success chip</Button> <Button info filled>Info chip</Button> <Button warning filled>Warning chip</Button> <Button error filled>Error chip</Button>

      <Text xl>Outline chips:</Text>
      <Button primary outline>Primary chip</Button> <Button secondary outline>Secondary chip</Button> <Button success outline>Success chip</Button> <Button info outline>Info chip</Button> <Button warning outline>Warning chip</Button> <Button error outline>Error chip</Button>

      <Text xl>Filled rounded chips:</Text>
      <Button primary filled rounded>Primary chip</Button> <Button secondary filled rounded>Secondary chip</Button> <Button success filled rounded>Success chip</Button> <Button info filled rounded>Info chip</Button> <Button warning filled rounded>Warning chip</Button> <Button error filled rounded>Error chip</Button>
      
      <Text xl>Outline rounded chips:</Text>
      <Button primary outline rounded>Primary chip</Button> <Button secondary outline rounded>Secondary chip</Button> <Button success outline rounded>Success chip</Button> <Button info outline rounded>Info chip</Button> <Button warning outline rounded>Warning chip</Button> <Button error outline rounded>Error chip</Button>
    </CommonPage>
  );
};