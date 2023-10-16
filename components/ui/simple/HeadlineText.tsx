import React from 'react';

interface HeadlineTextProps extends React.HTMLProps<HTMLElement> {
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

export const HeadlineTextText: React.FC<HeadlineTextProps> = (props) => {
  const size = props.xs ? 'fs-xl lh-xl'
    : props.sm ? 'fs-2xl lh-2xl'
      : props.md ? 'fs-3xl lh-3xl'
        : props.lg ? 'fs-4xl lh-4xl'
          : props.xl ? 'fs-5xl lh-5xl'
            : 'fs-3xl lh-3xl';

  const tag = props.xs ? 'h5'
    : props.sm ? 'h4'
      : props.md ? 'h3'
        : props.lg ? 'h2'
          : props.xl ? 'h1'
            : 'h3';

  const py = props.nopadding ? 'py-0'
    : props.xs ? 'py-2'
      : props.sm ? 'py-3'
        : props.md ? 'py-4'
          : props.lg ? 'py-5'
            : props.xl ? 'py-6'
              : 'py-4';

  const fontWeight = props.bold ? 'fw-bold' : 'fw-medium';

  const Tag = props.tag || tag;

  const { className, ...restProps } = props;

  return (
    <Tag className={`${size} ${py} m-0 color-text font-family-primary ${fontWeight} ${props.className ? props.className : ''}`} {...restProps} >
      {props.text || props.children}
    </Tag>
  );
};