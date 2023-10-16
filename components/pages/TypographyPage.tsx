import React from 'react';
import { BodyText } from '../ui/simple/BodyText';
import { Separator } from '../ui/simple/Separator';
import { CommonPage } from './CommonPage';
import { LabelText } from '../ui/simple/LabelText';
import { TitleText } from '../ui/simple/TitleText';

export const TypographyPage = (props) => {
  return (
    <CommonPage>
      <BodyText xl>Default TitleText:</BodyText>
      <TitleText text="Default title" />
      <TitleText>Default title</TitleText>
      <Separator lg />
      <BodyText xl>TitleText sizes:</BodyText>
      <TitleText xl>Extra large title</TitleText>
      <TitleText lg>Large body title</TitleText>
      <TitleText md>Medium body title</TitleText>
      <TitleText sm>Small body title</TitleText>
      <TitleText xs>Extra small title</TitleText>

      <Separator lg />

      <BodyText xl>Default LabelText:</BodyText>
      <div className="d-flex w-12"><LabelText text="Default label" /></div>
      <div className="d-flex w-12"><LabelText>Default label</LabelText></div>
      <Separator lg />
      <BodyText xl>LabelText sizes:</BodyText>
      <div className="d-flex w-12"><LabelText xl>Extra large label</LabelText></div>
      <div className="d-flex w-12"><LabelText lg>Large body label</LabelText></div>
      <div className="d-flex w-12"><LabelText md>Medium body label</LabelText></div>
      <div className="d-flex w-12"><LabelText sm>Small body label</LabelText></div>
      <div className="d-flex w-12"><LabelText xs>Extra small label</LabelText></div>

      <Separator lg />

      <BodyText xl>Default BodyText:</BodyText>
      <BodyText text="Default body text" />
      <BodyText>Default body text</BodyText>
      <Separator lg />
      <BodyText xl>BodyText sizes:</BodyText>
      <BodyText xl>Extra large text</BodyText>
      <BodyText lg>Large body text</BodyText>
      <BodyText md>Medium body text</BodyText>
      <BodyText sm>Small body text</BodyText>
      <BodyText xs>Extra small text</BodyText>
    </CommonPage>
  );
};