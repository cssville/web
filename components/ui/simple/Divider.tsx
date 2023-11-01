import React from 'react';
import { DividerProps } from '../props/Props';
import { buildSimpleComponent } from '../utils';

export const Divider: React.FC<DividerProps> = (props) => buildSimpleComponent(props, "div", [], [
  "w-12",
  ['my-2', 'my-3', 'my-4', 'my-5', 'my-6'],
  props.noborder ? 'h-1px bg-color-transparent' : 'border-bottom-1'
], true);