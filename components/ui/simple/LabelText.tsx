import React from 'react';

interface LabelTextProps extends React.HTMLProps<HTMLElement> {
  text?: string;
  tag?: React.ElementType;
  //size
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  //text style:
  bold?: boolean;
  //padding:
  nopadding?: boolean;
}

export const LabelText: React.FC<LabelTextProps> = (props) => {
  const size = props.xs ? 'fs-2xs lh-2xs'
    : props.sm ? 'fs-2xs lh-2xs'
      : props.md ? 'fs-xs lh-xs'
        : props.lg ? 'fs-sm lh-sm'
          : props.xl ? 'fs-md lh-md'
            : 'fs-xs lh-xs';

  const py = props.nopadding ? 'py-0'
    : props.xs ? 'py-1'
      : props.sm ? 'py-2'
        : props.md ? 'py-3'
          : props.lg ? 'py-4'
            : props.xl ? 'py-5'
              : 'py-3';

  const fontWeight = props.bold ? 'fw-bold' : 'fw-medium';
  
  const Tag = props.tag || 'label'; 

  const { className, ...restProps } = props;

  return (
    <Tag className={`${size} ${py} m-0 color-text font-family-primary ${fontWeight} ${props.className ? props.className : ''}`} {...restProps} >
      {props.text || props.children}
    </Tag>
  );
};