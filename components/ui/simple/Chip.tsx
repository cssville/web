import React from 'react';
import { ChipProps } from '../props/Props';
import { buildSimpleComponent } from '../utils';

export const Chip: React.FC<ChipProps> = (props) => buildSimpleComponent(props, "span", [], [
  "font-family-code text-decoration-none",
  ['fs-2xs', 'fs-xs', 'fs-sm', 'fs-md', 'fs-lg'],
  ['br-1', 'br-2', 'br-3', 'br-3', 'br-4'],
  ['py-0', 'py-1', 'py-1', 'py-2', 'py-3'],
  ['px-2', 'px-2', 'px-3', 'px-3', 'px-4'],
  props.bold ? 'fw-bold'
    : props.normal ? 'fw-normal'
      : 'fw-bold',
  props.filled ? 'border-none'
    : props.outline ? 'border-1'
      : 'border-1',
  props.primary ? 'bg-color-primary'
    : props.secondary ? 'bg-color-secondary'
      : props.success ? 'bg-color-success'
        : props.info ? 'bg-color-info'
          : props.warning ? 'bg-color-warning'
            : props.error ? 'bg-color-error'
              : 'bg-color-grey-50'
]);