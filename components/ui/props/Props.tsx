export interface SizeProps {
  //size
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
}

export interface BaseProps extends React.HTMLProps<HTMLElement>, SizeProps {
  tag?: React.ElementType | string;
  text?: string;
}