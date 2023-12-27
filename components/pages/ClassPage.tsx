import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Cssville } from "cssville-generators/build/cssville";
import { CommonPage } from './CommonPage';

export const ClassPage = (props) => {
  const name = useLoaderData();
  const genName = name.toString();

  Cssville.generators.forEach(g => {
    console.log(g);
  });

  var generator = Cssville.generators.find(g => g.name === genName)


  return (
    <CommonPage title="Typography">
      {generator}
    </CommonPage>
  );
};