import React from 'react';

interface SectionProps extends React.HTMLProps<HTMLDivElement> {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
}

export const Section: React.FC<SectionProps> = (props) => {
  const size = props.xs ? 'max-w-xs py-2 px-2 lg-px-1 md-px-0'
    : props.sm ? 'max-w-sm py-3 px-3 lg-px-2 md-px-1'
      : props.md ? 'max-w-md py-4 px-4 lg-px-3 md-px-2'
        : props.lg ? 'max-w-lg py-5 px-5 lg-px-4 md-px-3'
          : props.xl ? 'max-w-xl py-5 px-5 lg-px-4 md-px-3'
            : 'max-w-lg py-5 px-5 lg-px-4 md-px-3';

  const { className, ...restProps } = props;

  return (
    <div className={`${size} position-relative mx-auto ${props.className ? props.className : ''}`} {...restProps} >
      {props.children}
    </div>
  );
};