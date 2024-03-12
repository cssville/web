import React from 'react';
import { CommonPage } from './CommonPage';
import { Text } from 'cssville-ui/build/components/ui/simple/Typography';
import { Button } from 'cssville-ui/build/components/ui/simple/Button';
import { Stack } from 'cssville-ui/build/components/ui/simple/Stack';

export const NotFoundPage = (props) => {

  return (
    <CommonPage title="404 - Not found">
      <Stack column md className="w-12">
        <Text>The page you are looking for can not be found</Text>
        <Stack row>
          <Button primary href="/" tag="a">Home</Button>
          <Button secondary href="/docs" tag="a">Docs</Button>
        </Stack>
      </Stack>
    </CommonPage>
  );
};