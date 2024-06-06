import React from 'react';
import { Cssville } from "cssville-generators/build/cssville"
import { ClassPage } from './../components/pages/docs/ClassPage'
import { IPageData } from './IPageData'
import type { RouteObject } from "react-router";
import { GettingStartedPage } from "../components/pages/docs/introduction/GettingStartedPage";
import { HomePage } from "../components/pages/HomePage";
import { NotFoundPage } from "../components/pages/NotFoundPage";

export const PagesData: IPageData[] = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/404",
    element: <NotFoundPage />,
  },
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

export const Routes: RouteObject[] = PagesData.map(pd => (
  { path: pd.path, element: pd.element, loader: pd.loader }
))

export const RouteObjects: RouteObject[] = PagesData.reduce(
  (result: RouteObject[], currentValue: IPageData) => {
    let path = currentValue['path'];
    var ind = result.length;
    const existingIndex = result.findIndex(e => e.path === path);
    if (existingIndex < 0) {
      result[ind] = {
        path: currentValue.path,
        element: currentValue.element,
        ...(currentValue.loader && { loader: currentValue.loader }),
        ...(currentValue.errorElement && { errorElement: currentValue.errorElement }),
      }
      ind++
    }
    return result;
  }, []);

export const MenuItems: any[] = PagesData.reduce(
  (result: any[], currentValue: IPageData) => {
    let cat = currentValue['category'];
    var ind = result.length;
    const catIndex = result.findIndex(e => e.category === cat);
    if (currentValue.item) {
      if (catIndex < 0) {
        result[ind] = { category: cat, values: [] }
        result[ind].values.push({ item: currentValue.item, href: currentValue.href })
        ind++
      }
      else {
        result[catIndex].values.push({ item: currentValue.item, href: currentValue.href })
      }
    }
    return result;
  }, []);