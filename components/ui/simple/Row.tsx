import React from 'react';
import { RowProps } from '../props/Props';
import { buildSimpleComponent } from '../utils';

export const Row: React.FC<RowProps> = (props) => {
  var row = buildSimpleComponent(props, "div", [], [
    "d-flex flex-direction-row w-12 flex-wrap-wrap align-items-center",
    props.contentStart
      ? 'justify-content-start'
      : props.contentCenter
        ? 'justify-content-center'
        : props.contentEnd
          ? 'justify-content-end'
          : ''
  ])

  if (!props.nospace) {
    const modifiedChildren = [];
    React.Children.forEach(props.children, (child, index) => {
      modifiedChildren.push(child);
      var separator = buildSimpleComponent(props, "div", [], [
        "h-100 bg-color-transparent",
        ['w-4px', 'w-8px', 'w-12px', 'w-16px', 'w-24px'],
      ], true)
      separator.key = `separator-${index}`
      if (index !== React.Children.count(props.children) - 1) {
        modifiedChildren.push(separator);
      }
    });

    row.props.children = modifiedChildren;
  }

  return row;
};