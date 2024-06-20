import React from 'react';
import { Cssville } from "cssville-generators/build/cssville"
import { ClassPage } from './../components/pages/docs/ClassPage'
import type { RouteObject } from "react-router";
import { GettingStartedPage } from "../components/pages/docs/introduction/GettingStartedPage";
import { HomePage } from "../components/pages/HomePage";
import { NotFoundPage } from "../components/pages/NotFoundPage";
import { ChipPage } from "../components/pages/ChipPage";
import { ButtonPage } from "../components/pages/ButtonPage";
import { TypographyPage } from "../components/pages/TypographyPage";
import { DocsLayout } from "../components/pages/docs/DocsLayout";

export const Routes: RouteObject[] = [
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
    path: "/docs",
    element: <DocsLayout />,
    children: [
      {
        path: "components/chip",
        element: <ChipPage />,
        handle: { title: "Chip", category: "React Components", item: "Chip" }
      },
      {
        path: "components/button",
        element: <ButtonPage />,
        handle: { title: "Button", category: "React Components", item: "Button" }
      },
      {
        path: "components/typography",
        element: <TypographyPage />,
        handle: { title: "Typography", category: "React Components", item: "Typography" }
      },
      {
        path: "intro/getting-started",
        element: <GettingStartedPage />,
        handle: { title: "Getting started", category: "Introduction", item: "Getting started" }
      },
      {
        path: "css-classes/:name",
        element: <ClassPage />,
        handle: { title: "", category: "CSS Classes", item: "" },
        loader: async ({ params }) => {
          return params.name;
        },
      },
    ],
  },
]

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