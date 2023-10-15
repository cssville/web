import React from 'react';

interface ChipProps extends React.HTMLProps<HTMLSpanElement> {
  txt?: string;
  //size
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  //style
  outline?: boolean;
  filled?: boolean;
  //style:
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  info?: boolean;
  warning?: boolean;
  error?: boolean;
  //text:
  bold?: boolean;
  normal?: boolean;
}

export const Chip: React.FC<ChipProps> = (props) => {
  const size = props.xs ? 'fs-2xs br-1 px-2 py-0'
    : props.sm ? 'fs-xs br-2 px-2 py-1'
      : props.md ? 'fs-sm br-3 px-3 py-1'
        : props.lg ? 'fs-md br-3 px-3 py-2'
          : props.xl ? 'fs-lg br-4 px-4 py-3'
            : 'fs-sm br-3 px-3 py-1';

  const fontWeight = props.bold ? 'fw-bold'
    : props.normal ? 'fw-normal'
      : 'fw-bold';

  const border = props.filled ? 'border-none'
    : props.outline ? 'border-1'
      : 'border-1';

  const colors = props.primary ? 'bg-color-primary'
    : props.secondary ? 'bg-color-secondary'
      : props.success ? 'bg-color-success'
        : props.info ? 'bg-color-info'
          : props.warning ? 'bg-color-warning'
            : props.error ? 'bg-color-error'
              : 'bg-color-grey-50';

  const { className, ...restProps } = props;

  return (
    <span className={`${size} font-family-code text-decoration-none ${border} ${colors} ${fontWeight} ${props.className ? props.className : ''}`} {...restProps} >
      {props.txt || props.children}
    </span>
  );
};