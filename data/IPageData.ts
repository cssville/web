import { LoaderFunctionArgs } from "react-router-dom";

export interface IPageData {
  href?: string,
  category?: string,
  item?: string,
  path: string,
  element?: React.JSX.Element,
  errorElement?: React.JSX.Element,
  loader?: ({ params }: LoaderFunctionArgs<any>) => Promise<string>,
}