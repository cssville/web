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

export interface TextProps extends BaseProps {
  bold?: boolean;
  nopadding?: boolean;
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
  disabled?: boolean;
  rounded?: boolean;
  square?: boolean;
  noborder?: boolean;
  noshadow?: boolean;
  //variants
  outline?: boolean;
  filled?: boolean;
  //text:
  bold?: boolean;
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