import React from 'react';

interface TitleTextProps extends React.HTMLProps<HTMLElement> {
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

export const TitleText: React.FC<TitleTextProps> = (props) => {
  const size = props.xs ? 'fs-xs lh-xs'
    : props.sm ? 'fs-sm lh-sm'
      : props.md ? 'fs-md lh-md'
        : props.lg ? 'fs-xl lh-xl'
          : props.xl ? 'fs-2xl lh-2xl'
            : 'fs-md lh-md';

  const tag = props.xs ? 'h6'
    : props.sm ? 'h5'
      : props.md ? 'h4'
        : props.lg ? 'h3'
          : props.xl ? 'h2'
            : 'h4';

  const py = props.nopadding ? 'py-0'
    : props.xs ? 'py-1'
      : props.sm ? 'py-2'
        : props.md ? 'py-3'
          : props.lg ? 'py-4'
            : props.xl ? 'py-5'
              : 'py-3';

  const fontWeight = props.bold ? 'fw-bold' : 'fw-medium';

  const Tag = props.tag || tag;

  const { className, ...restProps } = props;

  return (
    <Tag className={`${size} ${py} m-0 color-text font-family-primary ${fontWeight} ${props.className ? props.className : ''}`} {...restProps} >
      {props.text || props.children}
    </Tag>
  );
};