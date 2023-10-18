import React from 'react';
import { BaseProps } from '../props/Props';
import { buildSimpleComponent } from '../utils';

export const Section: React.FC<BaseProps> = (props) => buildSimpleComponent(props, "div", [], [
  "position-relative mx-auto",
  ['max-w-xs', 'max-w-sm', 'max-w-md', 'max-w-lg', 'max-w-xl'],
  ['py-2', 'py-3', 'py-4', 'py-5', 'py-6'],
  ['px-2', 'px-3', 'px-4', 'px-5', 'px-6'],
  ['lg-px-1', 'lg-px-2', 'lg-px-3', 'lg-px-4', 'lg-px-5'],
  ['md-px-0', 'md-px-1', 'md-px-2', 'md-px-3', 'md-px-4'],
]);