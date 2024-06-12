import * as ReactDOM from 'react-dom/client';
import React from 'react';
import hljs from 'highlight.js';
import "cssville-ui/cssville-ui.bundle.css"
import "cssville/cssville.css";
import "./site.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes } from "./data/pagesData";


const router = createBrowserRouter(Routes);

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