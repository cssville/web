import React from 'react';
import { Button } from '../ui/simple/Button';
import { Divider } from '../ui/simple/Divider';
import { CommonPage } from './CommonPage';
import { Text } from '../ui/simple/Typography';

export const ButtonPage = (props) => {
  return (
    <CommonPage title="Button">
      <Text xl>Default button:</Text>
      <Button>Default button</Button> <Button disabled>Disabled button</Button>

      <Divider lg />

      <Text xl>Button with custom text:</Text>
      <Button buttonText={<span className="fw-bold fs-large color-green-500">Custom text element</span>}/>

      <Divider lg />

      <Text xl>Default button sizes:</Text>
      <Button xs>Extra small</Button> <Button sm>Small size</Button> <Button md>Medium size</Button> <Button lg>Large size</Button> <Button xl>Extra large</Button>

      <Text xl>Rounded button sizes:</Text>
      <Button xs rounded>Extra small</Button> <Button sm rounded>Small size</Button> <Button md rounded>Medium size</Button> <Button lg rounded>Large size</Button> <Button xl rounded>Extra large</Button>

      <Divider lg />

      <Text xl>Default buttons:</Text>
      <Button primary>Primary button</Button> <Button secondary>Secondary button</Button> <Button success>Success button</Button> <Button info>Info button</Button> <Button warning>Warning button</Button> <Button error>Error button</Button>

      <Text xl>Noborder buttons:</Text>
      <Button primary noborder>Primary button</Button> <Button secondary noborder>Secondary button</Button> <Button success noborder>Success button</Button> <Button info noborder>Info button</Button> <Button warning noborder>Warning button</Button> <Button error noborder>Error button</Button>

      <Text xl>Square buttons:</Text>
      <Button primary square>Primary button</Button> <Button secondary square>Secondary button</Button> <Button success square>Success button</Button> <Button info square>Info button</Button> <Button warning square>Warning button</Button> <Button error square>Error button</Button>

      <Text xl>Filled buttons:</Text>
      <Button primary filled>Primary button</Button> <Button secondary filled>Secondary button</Button> <Button success filled>Success button</Button> <Button info filled>Info button</Button> <Button warning filled>Warning button</Button> <Button error filled>Error button</Button>

      <Text xl>Outline buttons:</Text>
      <Button primary outline>Primary button</Button> <Button secondary outline>Secondary button</Button> <Button success outline>Success button</Button> <Button info outline>Info button</Button> <Button warning outline>Warning button</Button> <Button error outline>Error button</Button>

      <Text xl>Filled rounded buttons:</Text>
      <Button primary filled rounded>Primary button</Button> <Button secondary filled rounded>Secondary button</Button> <Button success filled rounded>Success button</Button> <Button info filled rounded>Info button</Button> <Button warning filled rounded>Warning button</Button> <Button error filled rounded>Error button</Button>

      <Text xl>Outline rounded buttons:</Text>
      <Button primary outline rounded>Primary button</Button> <Button secondary outline rounded>Secondary button</Button> <Button success outline rounded>Success button</Button> <Button info outline rounded>Info button</Button> <Button warning outline rounded>Warning button</Button> <Button error outline rounded>Error button</Button>
    </CommonPage>
  );
};