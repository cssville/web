import { ReactElement } from "react";

export interface SizeProps {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
}

export interface BaseProps extends React.HTMLProps<HTMLElement>, SizeProps {
  tag?: React.ElementType | string;
}

export interface RowProps extends BaseProps {
  noSpace?: boolean;
  //justify content
  contentStart?: boolean;
  contentEnd?: boolean;
  contentCenter?: boolean;
}

export interface ColumnProps extends BaseProps {
  noSpace?: boolean;
  //justify content
  contentStart?: boolean;
  contentEnd?: boolean;
  contentCenter?: boolean;
}

export interface SectionProps extends BaseProps {
  fullWidth?: boolean;
  noPadding?: boolean;
  //justify content
  contentStart?: boolean;
  contentEnd?: boolean;
  contentCenter?: boolean;
}

export interface TextProps extends BaseProps {
  bold?: boolean;
  noPadding?: boolean;
  centered?: boolean;
  dynamic?: boolean;
}

export interface DividerProps extends BaseProps {
  noborder?: boolean;
}

export interface StyleProps extends BaseProps {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  info?: boolean;
  warning?: boolean;
  error?: boolean;
}

export interface ButtonProps extends StyleProps {
  buttonText?: ReactElement;
  icon?: ReactElement;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  disabled?: boolean;
  rounded?: boolean;
  square?: boolean;
  noBorder?: boolean;
  noShadow?: boolean;
  //variants
  outline?: boolean;
  filled?: boolean;
  //text:
  bold?: boolean;
  notext?: boolean;
}

export interface ChipProps extends StyleProps {
  disabled?: boolean;
  rounded?: boolean;
  square?: boolean;
  noborder?: boolean;
  //variants
  outline?: boolean;
  filled?: boolean;
  //text:
  bold?: boolean;
}