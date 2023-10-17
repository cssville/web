import React from 'react';
import { BaseProps } from '../props/Props';
import { buildSimpleComponent } from '../utils';

interface TextProps extends BaseProps {
  bold?: boolean;
  nopadding?: boolean;
}

export const HeadlineText: React.FC<TextProps> = (props) => buildSimpleComponent(props, "h3", ['h5', 'h4', 'h3', 'h2', 'h1'], [
  "m-0 color-text font-family-primary",
  ['fs-xl lh-xl', 'fs-2xl lh-2xl', 'fs-3xl lh-3xl', 'fs-4xl lh-4xl', 'fs-5xl lh-5xl'],
  props.bold ? 'fw-bold' : 'fw-medium',
  props.nopadding ? 'py-0' : ["py-2", "py-3", "py-4", "py-5", "py-6"]
]
);

export const TitleText: React.FC<TextProps> = (props) => buildSimpleComponent(props, "h4", ['h6', 'h5', 'h4', 'h3', 'h2'], [
  "m-0 color-text font-family-primary",
  ['fs-xs lh-xs', 'fs-sm lh-sm', 'fs-md lh-md', 'fs-xl lh-xl', 'fs-2xl lh-2xl'],
  props.bold ? 'fw-bold' : 'fw-medium',
  props.nopadding ? 'py-0' : ["py-1", "py-2", "py-3", "py-4", "py-5"]
]);

export const BodyText: React.FC<TextProps> = (props) => buildSimpleComponent(props, "p", [], [
  "m-0 color-text font-family-primary",
  ['fs-2xs lh-2xs', 'fs-xs lh-xs', 'fs-sm lh-sm', 'fs-md lh-md', 'fs-lg lh-lg'],
  props.bold ? 'fw-bold' : 'fw-medium',
  props.nopadding ? 'py-0' : ["py-1", "py-2", "py-3", "py-4", "py-5"]
]);
