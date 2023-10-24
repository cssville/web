import React from 'react';
import { ChipProps } from '../props/Props';
import { buildSimpleComponent, getValueByStyle } from '../utils';

export const Button: React.FC<ChipProps> = (props) => {
  const outlineBtnClasses = [
    getValueByStyle(props, ['color-primary', 'color-secondary', 'color-success', 'color-info', 'color-warning', 'color-error'], 'color-text'),
    getValueByStyle(props, ['bg-color-bg-primary', 'bg-color-bg-secondary', 'bg-color-bg-success', 'bg-color-bg-info', 'bg-color-bg-warning', 'bg-color-bg-error'], 'bg-color-grey-50'),
    getValueByStyle(props, ['border-color-border-primary', 'border-color-border-secondary', 'border-color-border-success', 'border-color-border-info', 'border-color-border-warning', 'border-color-border-error'], 'border-color-border'),
  ];
  const filledBtnClasses = [
    'color-bg',
    getValueByStyle(props, ['bg-color-primary', 'bg-color-secondary', 'bg-color-success', 'bg-color-info', 'bg-color-warning', 'bg-color-error'], 'bg-color-text'),
    getValueByStyle(props, ['border-color-primary', 'border-color-secondary', 'border-color-success', 'border-color-info', 'border-color-warning', 'border-color-error'], 'border-color-bg'),
  ];

  const other = props.filled ? filledBtnClasses
    : props.outline ? outlineBtnClasses
      : outlineBtnClasses;

  const btn = buildSimpleComponent(props, "button", [], [
    "d-inline-block font-family-code text-decoration-none",
    ['py-0', 'py-1', 'py-1', 'py-2', 'py-3'],
    props.disabled ? 'opacity-05' : '',
    props.rounded
      ? 'br-9999px'
      : ['br-1', 'br-2', 'br-3', 'br-3', 'br-4'],
    props.rounded
      ? ['px-3', 'px-4', 'px-5', 'px-6', 'px-7']
      : ['px-3', 'px-4', 'px-5', 'px-6', 'px-7'],
    props.bold ? 'fw-bold' : 'fw-500',
    props.noborder ? 'border-none' :
      props.filled ? 'border-none'
        : props.outline ? 'border-width-1px border-style-solid'
          : 'border-width-1px border-style-solid',
    ...other
  ])

  var btnText = buildSimpleComponent(props, "span", [], [
    "d-inline-block text-decoration-none",
    ['fs-2xs', 'fs-xs', 'fs-sm', 'fs-md', 'fs-lg'],
    ['lh-2xs', 'lh-xs', 'lh-sm', 'lh-md', 'lh-lg'],
    ['py-0', 'py-1', 'py-1', 'py-2', 'py-3'],
    props.bold ? 'fw-bold' : 'fw-500',
    ...other
  ])
  
  btn.props.children = btnText;

  return btn;
};