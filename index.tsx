import * as ReactDOM from 'react-dom/client';
import React from 'react';
import hljs from 'highlight.js';
import "cssville-ui/cssville-ui.bundle.css"
import "cssville/cssville.css";
import "./site.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from './components/pages/HomePage';
import { ClassPage } from './components/pages/docs/ClassPage';
import { ChipPage } from './components/pages/ChipPage';
import { TypographyPage } from './components/pages/TypographyPage';
import { ButtonPage } from './components/pages/ButtonPage';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { GettingStartedPage } from "./components/pages/docs/introduction/GettingStartedPage";
import { RouteObjects } from "./data/pagesData";

var routes = [
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
    path: "/chip",
    element: <ChipPage />,
  },
  {
    path: "/button",
    element: <ButtonPage />,
  },
  {
    path: "/typography",
    element: <TypographyPage />
  },
  {
    path: "/docs/intro/getting-started",
    element: <GettingStartedPage />
  },
  {
    path: "/docs/css-classes/:name",
    element: <ClassPage activeCategory={"CSS classes"} />,
    loader: async ({ params }) => {
      return params.name;
    },
  },
]

//const router = createBrowserRouter(routes);
//console.log('RouteObjects', RouteObjects)
//console.log('routes', routes)
//const router = createBrowserRouter(RouteObjects);
const router = createBrowserRouter(routes);

function docReady(fn: () => void) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(function () {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <RouterProvider router={router} />
  );
  hljs.highlightAll();
});