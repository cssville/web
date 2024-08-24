import React from 'react';
import { Cssville } from "cssville-generators/build/cssville"
import { ClassPage } from '../components/pages/docs/ClassPage'
import type { RouteObject } from "react-router";
import { GettingStartedPage } from "../components/pages/docs/introduction/GettingStartedPage";
import { HomePage } from "../components/pages/HomePage";
import { NotFoundPage } from "../components/pages/NotFoundPage";
import { ChipPage } from "../components/pages/ChipPage";
import { ButtonPage } from "../components/pages/ButtonPage";
import { TypographyPage } from "../components/pages/TypographyPage";
import { DocsLayout } from "../components/pages/docs/DocsLayout";
import { paths }from "./paths"

export const Routes: RouteObject[] = [
  {
    path: paths.home,
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: paths.notFound,
    element: <NotFoundPage />,
  },
  {
    path: paths.docs,
    element: <DocsLayout />,
    children: [
      {
        path: paths.components.chip,
        element: <ChipPage />,
        handle: { title: "Chip", category: "React Components", item: "Chip" }
      },
      {
        path: paths.components.button,
        element: <ButtonPage />,
        handle: { title: "Button", category: "React Components", item: "Button" }
      },
      {
        path: paths.components.typography,
        element: <TypographyPage />,
        handle: { title: "Typography", category: "React Components", item: "Typography" }
      },
      {
        path: paths.intro.gettingStarted,
        element: <GettingStartedPage />,
        handle: { title: "Getting started", category: "Introduction", item: "Getting started" }
      },
      {
        path: paths.cssClasses(":name"),
        element: <ClassPage />,
        handle: { title: "", category: "CSS Classes", item: "" },
        loader: async ({ params }) => {
          return params.name;
        },
      },
    ],
  },
];

export const MenuItems: any[] = [
  {
    category: "Introduction",
    values: [
      {
        item: "Getting started",
        href: "/docs/intro/getting-started",
      },
    ]
  },
  {
    category: "CSS Classes",
    values: [
      ...Cssville.generators.map(g => (
        {
          item: g.name,
          href: `/docs/css-classes/${g.name}`,
        })
      )]
  },
  {
    category: "React Components",
    values: [
      {
        item: "Button",
        href: "/docs/components/button",
      },
      {
        item: "Chip",
        href: "/docs/components/chip",
      },
      {
        item: "Typography",
        href: "/docs/components/typography",
      },
    ]
  },
];