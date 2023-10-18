import React from 'react';
import { TextProps } from '../props/Props';
import { buildSimpleComponent } from '../utils';

export const Display: React.FC<TextProps> = (props) => buildSimpleComponent(props, "h1", [], [
  "m-0 color-text font-family-primary",
  ['fs-4xl', 'fs-5xl', 'fs-6xl', 'fs-7xl', 'fs-8xl'],
  ['lh-4xl', 'lh-5xl', 'lh-6xl', 'lh-7xl', 'lh-8xl'],
  props.bold ? 'fw-bold' : 'fw-medium',
  props.nopadding ? 'py-0' : ["py-3", "py-4", "py-5", "py-6", "py-7"]
]);

export const Headline: React.FC<TextProps> = (props) => buildSimpleComponent(props, "h3", ['h5', 'h4', 'h3', 'h2', 'h1'], [
  "m-0 color-text font-family-primary",
  ['fs-xl', 'fs-2xl', 'fs-3xl', 'fs-4xl', 'fs-5xl'],
  ['lh-xl', 'lh-2xl', 'lh-3xl', 'lh-4xl', 'lh-5xl'],
  props.bold ? 'fw-bold' : 'fw-medium',
  props.nopadding ? 'py-0' : ["py-2", "py-3", "py-4", "py-5", "py-6"]
]);

export const Title: React.FC<TextProps> = (props) => buildSimpleComponent(props, "h4", ['h6', 'h5', 'h4', 'h3', 'h2'], [
  "m-0 color-text font-family-primary",
  ['fs-xs', 'fs-sm', 'fs-md', 'fs-xl', 'fs-2xl'],
  ['lh-xs', 'lh-sm', 'lh-md', 'lh-xl', 'lh-2xl'],
  props.bold ? 'fw-bold' : 'fw-medium',
  props.nopadding ? 'py-0' : ["py-1", "py-2", "py-3", "py-4", "py-5"]
]);

export const Label: React.FC<TextProps> = (props) => buildSimpleComponent(props, "label", [], [
  "m-0 color-text font-family-primary",
  ['fs-3xs', 'fs-2xs', 'fs-xs', 'fs-sm', 'fs-md'],
  ['lh-3xs', 'lh-2xs', 'lh-xs', 'lh-sm', 'lh-md'],
  props.bold ? 'fw-bold' : 'fw-medium',
  props.nopadding ? 'py-0' : ["py-1", "py-2", "py-3", "py-4", "py-5"]
]);

export const Text: React.FC<TextProps> = (props) => buildSimpleComponent(props, "p", [], [
  "m-0 color-text font-family-primary",
  ['fs-2xs', 'fs-xs', 'fs-sm', 'fs-md', 'fs-lg'],
  ['lh-2xs', 'lh-xs', 'lh-sm', 'lh-md', 'lh-lg'],
  props.bold ? 'fw-bold' : 'fw-medium',
  props.nopadding ? 'py-0' : ["py-1", "py-2", "py-3", "py-4", "py-5"]
]);
