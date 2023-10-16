import React from 'react';

interface BodyTextProps extends React.HTMLProps<HTMLParagraphElement> {
  text?: string;
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

export const BodyText: React.FC<BodyTextProps> = (props) => {
  const size = props.xs ? 'fs-2xs lh-2xs'
    : props.sm ? 'fs-xs lh-xs'
      : props.md ? 'fs-sm lh-sm'
        : props.lg ? 'fs-md lh-md'
          : props.xl ? 'fs-lg lh-lg'
            : 'fs-sm lh-sm';

  const py = props.nopadding ? 'py-0'
    : props.xs ? 'py-1'
      : props.sm ? 'py-2'
        : props.md ? 'py-3'
          : props.lg ? 'py-4'
            : props.xl ? 'py-5'
              : 'py-3';

  const fontWeight = props.bold ? 'fw-bold' : 'fw-medium';

  const { className, ...restProps } = props;

  return (
    <p className={`${size} ${py} m-0 color-text font-family-primary ${fontWeight} ${props.className ? props.className : ''}`} {...restProps} >
      {props.text || props.children}
    </p>
  );
};