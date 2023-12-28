import React from 'react';
import { CommonPage } from './CommonPage';
import { Text } from 'cssville-ui/build/components/ui/simple/Typography';
import { Button } from 'cssville-ui/build/components/ui/simple/Button';
import { Row } from 'cssville-ui/build/components/ui/simple/Row';

export const NotFoundPage = (props) => {

  return (
    <CommonPage title="404 - Not found">
      <Text>The page you are looking for can not be found</Text>
      <Row>
        <Button primary href="/" tag="a">Home</Button>
        <Button secondary href="/docs" tag="a">Docs</Button>
      </Row>
    </CommonPage>
  );
};