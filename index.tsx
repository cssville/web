import * as ReactDOM from 'react-dom/client';
import React from 'react';
import hljs from 'highlight.js';
import "./site.css";
import "cssville/cssville.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from './components/pages/HomePage';
import { ChipPage } from './components/pages/ChipPage';
import { TypographyPage } from './components/pages/TypographyPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/chip",
    element: <ChipPage />,
  },
  {
    path: "/typography",
    element: <TypographyPage />
  }
  //{
  //  path: "/posts/:url",
  //  element: <BlogPage />,
  //  loader: async ({ params }) => {
  //    return params.url;
  //  },
  //},
]);

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