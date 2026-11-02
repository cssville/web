import React, { useEffect, useLayoutEffect } from 'react';
import { useMatches, useLocation } from 'react-router-dom';
import { Cssville } from "cssville-generators/build/cssville";
import { classCount } from "./utils";

interface MetadataProps {
  defaultTitle?: string;
  defaultDescription?: string;
}

const DEFAULT_TITLE = "Cssville - The most simple utility-first CSS framework";
const DEFAULT_DESCRIPTION = "Cssville is a utility-first CSS framework with zero dependencies. Style HTML with small classes like dis-flex and pad-y-2, with responsive and hover variants.";

export const canonicalUrl = (pathname: string) => `https://cssville.xyz${pathname.replace(/\/+$/, '') || '/'}`;

// index.html serves every route, so it has no static canonical; prerender.tsx adds one per page
export const setCanonical = (pathname: string) => {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', canonicalUrl(pathname));
};

export const getPageMetadata = (handle: any, pathname: string, defaultTitle = DEFAULT_TITLE, defaultDescription = DEFAULT_DESCRIPTION) => {
  let title = defaultTitle;
  let description = defaultDescription;

  if (handle) {
    if (handle.category === "CSS Classes" && handle.title === "") {
      const parts = pathname.split("/");
      const className = parts[parts.length - 1];
      const generator = Cssville.generators.find(g => g.name === className);

      if (generator) {
        title = `${generator.name} - Cssville CSS Classes`;
        description = `The ${classCount(generator).toLocaleString('en-US')} Cssville utility classes for ${generator.name}, with the CSS each class sets. Add them to your HTML to style elements without writing your own CSS.`;
      }
    } else if (handle.title) {
      title = handle.title;
      if (handle.category !== "Home") {
        title += " - Cssville";
      }

      if (handle.description) {
        description = handle.description;
      }
    }
  }

  return { title, description };
};

export const PageMetadata: React.FC<MetadataProps> = ({
  defaultTitle = DEFAULT_TITLE,
  defaultDescription = DEFAULT_DESCRIPTION
}) => {
  const matches = useMatches();
  const location = useLocation();

  // Function to get metadata from current route
  const getMetadata = () =>
    getPageMetadata(matches[matches.length - 1]?.handle, location.pathname, defaultTitle, defaultDescription);

  // Update metadata immediately during render
  const { title, description } = getMetadata();

  // Synchronously update the title as soon as possible
  if (typeof document !== 'undefined') {
    document.title = title;
  }

  // Use useLayoutEffect for DOM mutations before browser paint
  useLayoutEffect(() => {
    const { title, description } = getMetadata();

    // Update document head
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update Open Graph and Twitter meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');

    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDescription) ogDescription.setAttribute('content', description);
    if (twitterTitle) twitterTitle.setAttribute('content', title);
    if (twitterDescription) twitterDescription.setAttribute('content', description);

    setCanonical(location.pathname);

  }, [matches, location.pathname, defaultTitle, defaultDescription]);

  // This component doesn't render anything
  return null;
};
