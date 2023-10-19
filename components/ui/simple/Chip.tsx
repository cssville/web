import React from 'react';
import { ChipProps } from '../props/Props';
import { buildSimpleComponent } from '../utils';

export const Chip: React.FC<ChipProps> = (props) => {
  const outlineChipClasses = [
    props.primary ? 'color-primary'
      : props.secondary ? 'color-secondary'
        : props.success ? 'color-success'
          : props.info ? 'color-info'
            : props.warning ? 'color-warning'
              : props.error ? 'color-error'
                : 'color-text',
    props.primary ? 'bg-color-bg-primary'
      : props.secondary ? 'bg-color-bg-secondary'
        : props.success ? 'bg-color-bg-success'
          : props.info ? 'bg-color-bg-info'
            : props.warning ? 'bg-color-bg-warning'
              : props.error ? 'bg-color-bg-error'
                : 'bg-color-grey-50',
    props.primary ? 'border-color-border-primary'
      : props.secondary ? 'border-color-border-secondary'
        : props.success ? 'border-color-border-success'
          : props.info ? 'border-color-border-info'
            : props.warning ? 'border-color-border-warning'
              : props.error ? 'border-color-border-error'
                : 'border-color-border'
  ];
  const filledChipClasses = [
    'color-bg',    
    //props.primary ? 'color-bg-primary'
    //  : props.secondary ? 'color-bg-secondary'
    //    : props.success ? 'color-bg-success'
    //      : props.info ? 'color-bg-info'
    //        : props.warning ? 'color-bg-warning'
    //          : props.error ? 'color-bg-error'
    //            : 'color-bg-secondary',
    props.primary ? 'bg-color-primary'
      : props.secondary ? 'bg-color-secondary'
        : props.success ? 'bg-color-success'
          : props.info ? 'bg-color-info'
            : props.warning ? 'bg-color-warning'
              : props.error ? 'bg-color-error'
                : 'bg-color-text',
    props.primary ? 'border-color-primary'
      : props.secondary ? 'border-color-secondary'
        : props.success ? 'border-color-success'
          : props.info ? 'border-color-info'
            : props.warning ? 'border-color-warning'
              : props.error ? 'border-color-error'
                : 'border-color-bg'
  ];
  const other = props.filled ? filledChipClasses
    : props.outline ? outlineChipClasses
      : outlineChipClasses;

  return buildSimpleComponent(props, "span", [], [
    "font-family-code text-decoration-none border-style-solid",
    ['fs-2xs', 'fs-xs', 'fs-sm', 'fs-md', 'fs-lg'],
    ['br-1', 'br-2', 'br-3', 'br-3', 'br-4'],
    ['py-0', 'py-1', 'py-1', 'py-2', 'py-3'],
    ['px-2', 'px-2', 'px-3', 'px-3', 'px-4'],
    props.bold ? 'fw-bold'
      : props.normal ? 'fw-normal'
        : 'fw-500',
    props.filled ? 'border-none'
      : props.outline ? 'border-width-1px'
        : 'border-width-1px',
    ...other
  ])
};