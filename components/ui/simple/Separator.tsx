import React from 'react';

interface SeparatorProps extends React.HTMLProps<HTMLDivElement> {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  noborder?: boolean;
}

export const Separator: React.FC<SeparatorProps> = (props) => {
  const size = props.xs ? 'my-2'
    : props.sm ? 'my-3'
      : props.md ? 'my-4'
        : props.lg ? 'my-5'
          : props.xl ? 'my-6'
            : 'my-4';

  const color = props.noborder ? 'bg-color-transparent' : 'bg-color-border';

  const { className, ...restProps } = props;

  return (
    <div className={`${size} h-1px ${color} w-12 ${props.className ? props.className : ''}`} {...restProps} >
      {props.children}
    </div>
  );
};