import * as ReactDOM from 'react-dom/client';
import React from 'react';
import hljs from 'highlight.js';
import "cssville-ui/cssville-ui.bundle.css"
import "cssville/cssville.css";
import "./site.css";
import { createBrowserRouter, RouterProvider, matchRoutes } from "react-router-dom";
import { Routes } from "./data/pagesData";
import { PageMetadata } from "./components/PageMetadata";
import { Cssville } from "cssville-generators/build/cssville";

// Initialize metadata as early as possible based on current URL
function initializeMetadata() {
  const pathname = window.location.pathname;

  // Find matching route
  const matches = matchRoutes(Routes, pathname);

  if (matches && matches.length > 0) {
    const match = matches[matches.length - 1];
    const handle = match.route.handle as any;

    if (handle) {
      let title = handle.title || "Cssville - The most simple utility-first CSS framework";
      let description = handle.description || "Enhance your UI with ready-to-use CSS utility classes";

      // Handle CSS Classes pages with dynamic titles
      if (handle.category === "CSS Classes" && handle.title === "") {
        const parts = pathname.split("/");
        const className = parts[parts.length - 1];
        const generator = Cssville.generators.find(g => g.name === className);

        if (generator) {
          title = `${generator.name} - Cssville CSS Classes`;
          description = `Learn about Cssville's ${generator.name} utility classes.`;
        }
      } else if (handle.title && handle.category !== "Home") {
        title += " - Cssville";
      }

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
    <RouterProvider router={router} />
  );

  // Initialize syntax highlighting
  hljs.highlightAll();

  // Show the page content after a small delay to ensure React has rendered
  // and all metadata has been applied
  setTimeout(showPageContent, 50);
});
