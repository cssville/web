import React from 'react';
import { Cssville } from "cssville-generators/build/cssville"
import { ClassPage } from './../components/pages/docs/ClassPage'
import { IPageData } from './IPageData'
import type { RouteObject } from "react-router";
import { GettingStartedPage } from "../components/pages/docs/introduction/GettingStartedPage";

export const PagesData: IPageData[] = [
  {
    category: "Introduction",
    item: "Getting started",
    href: "/docs/intro/getting-started",
    path: "/docs/intro/getting-started",
    element: <GettingStartedPage />
  },
  ...Cssville.generators.map(g => ({
    category: "CSS classes",
    item: g.name,
    href: `/docs/css-classes/${g.name}`,
    path: "/docs/css-classes/:name",
    element: <ClassPage activeCategory={"CSS classes"} />,
    loader: async ({ params }) => {
      return params.name;
    },
  })),
];

export const RouteObjects: RouteObject[] = PagesData.map(pd => (
  { path: pd.path, element: pd.element, loader: pd.loader }
))

export const MenuItems: any[] = PagesData.reduce(
  (result: any[], currentValue: IPageData) => {
    let cat = currentValue['category'];
    var ind = result.length;
    const catIndex = result.findIndex(e => e.category === cat);
    if(catIndex < 0){
      result[ind] = {category: cat, values: []}
      result[ind].values.push({item: currentValue.item, href: currentValue.href})
      ind++
    }
    else {
      result[catIndex].values.push({item: currentValue.item, href: currentValue.href})
    }
    return result;
  }, []);