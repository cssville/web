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
}

export interface DividerProps extends BaseProps {
  noborder?: boolean;
}

export interface ChipProps extends BaseProps {
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