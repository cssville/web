import * as ReactDOM from 'react-dom/client';
import React from 'react';
import hljs from 'highlight.js';
import "cssville-ui/cssville-ui.bundle.css"
import "cssville/cssville.css";
import "./site.css";
import { createBrowserRouter, RouterProvider, matchRoutes } from "react-router-dom";
import { Routes } from "./data/pagesData";
import { PageMetadata, setCanonical, getPageMetadata } from "./components/PageMetadata";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Initialize metadata as early as possible based on current URL
function initializeMetadata() {
  const pathname = window.location.pathname;

  // Find matching route
  const matches = matchRoutes(Routes, pathname);

  if (matches && matches.length > 0) {
    const match = matches[matches.length - 1];
    const handle = match.route.handle as any;

    if (handle) {
      const { title, description } = getPageMetadata(handle, pathname);

      // Update document head immediately
      document.title = title;

      // Update meta tags
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      const twitterDescription = document.querySelector('meta[name="twitter:description"]');

      if (ogTitle) ogTitle.setAttribute('content', title);
      if (ogDescription) ogDescription.setAttribute('content', description);
      if (twitterTitle) twitterTitle.setAttribute('content', title);
      if (twitterDescription) twitterDescription.setAttribute('content', description);
    }
  }

  setCanonical(pathname);
}

const router = createBrowserRouter(Routes);

function docReady(fn: () => void) {
  // Initialize metadata as early as possible
  initializeMetadata();

  // Only render when document is fully loaded (all resources including images, stylesheets, etc.)
  if (document.readyState === "complete") {
    // Document is already fully loaded, call function immediately
    fn();
  } else {
    // Wait for window.onload which ensures all resources are loaded
    window.addEventListener("load", () => {
      fn();
    });
  }
}

// Function to show the page content and hide the loading indicator
function showPageContent() {
  // Show the root element
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.style.visibility = 'visible';
  }

  // Hide the loading indicator
  const loadingIndicator = document.getElementById('loading-indicator');
  if (loadingIndicator) {
    loadingIndicator.style.display = 'none';
  }
}

docReady(function () {
  // Initialize React app
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <>
      <RouterProvider router={router} />
      <Analytics />
      <SpeedInsights />
    </>
  );

  // Initialize syntax highlighting
  hljs.highlightAll();

  // Show the page content after a small delay to ensure React has rendered
  // and all metadata has been applied
  setTimeout(showPageContent, 50);
});
