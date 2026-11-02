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
    handle: { 
      title: "Cssville - The most simple utility-first CSS framework",
      description: "Cssville is a utility-first CSS framework with zero dependencies. Style HTML with small classes like dis-flex and pad-y-2, with responsive and hover variants.",
      category: "Home", 
      item: "Home" 
    }
  },
  {
    path: paths.notFound,
    element: <NotFoundPage />,
    handle: { 
      title: "Page Not Found - Cssville",
      description: "The page you are looking for does not exist.",
      category: "Error", 
      item: "Not Found" 
    }
  },
  {
    path: paths.docs,
    element: <DocsLayout />,
    children: [
      {
        path: paths.components.chip,
        element: <ChipPage />,
        handle: { 
          title: "Chip", 
          description: "The Cssville React Chip component for tags and labels: sizes from xs to xl, rounded and square chips, color variants and filled styles in live examples.",
          category: "React Components", 
          item: "Chip" 
        }
      },
      {
        path: paths.components.button,
        element: <ButtonPage />,
        handle: { 
          title: "Button", 
          description: "The Cssville React Button component: sizes from xs to xl, rounded, square and icon buttons, color variants, and filled and borderless styles in live examples.",
          category: "React Components", 
          item: "Button" 
        }
      },
      {
        path: paths.components.typography,
        element: <TypographyPage />,
        handle: { 
          title: "Typography", 
          description: "Cssville React typography components: Display, Headline, Title, Label and Text, each shown in every size from xs to xl with live examples.",
          category: "React Components", 
          item: "Typography" 
        }
      },
      {
        path: paths.intro.gettingStarted,
        element: <GettingStartedPage />,
        handle: { 
          title: "Getting started", 
          description: "Install Cssville from npm or a CDN, learn how its utility class names are built, and use responsive prefixes, hover classes and smaller production builds.",
          category: "Introduction", 
          item: "Getting started" 
        }
      },
      {
        path: paths.cssClasses(":name"),
        element: <ClassPage />,
        handle: { 
          title: "", 
          description: "Learn about Cssville's CSS utility classes.",
          category: "CSS Classes", 
          item: "" 
        },
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
