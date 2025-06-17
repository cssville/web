import React, { useEffect, useLayoutEffect } from 'react';
import { useMatches, useLocation } from 'react-router-dom';
import { Cssville } from "cssville-generators/build/cssville";

interface MetadataProps {
  defaultTitle?: string;
  defaultDescription?: string;
}

export const PageMetadata: React.FC<MetadataProps> = ({ 
  defaultTitle = "Cssville - The most simple utility-first CSS framework",
  defaultDescription = "Enhance your UI with ready-to-use CSS utility classes"
}) => {
  const matches = useMatches();
  const location = useLocation();

  // Function to get metadata from current route
  const getMetadata = () => {
    const match = matches[matches.length - 1];
    let title = defaultTitle;
    let description = defaultDescription;

    if (match && match.handle) {
      const handle = match.handle as any;

      if (handle.category === "CSS Classes" && handle.title === "") {
        const parts = location.pathname.split("/");
        const className = parts[parts.length - 1];
        const generator = Cssville.generators.find(g => g.name === className);

        if (generator) {
          title = `${generator.name} - Cssville CSS Classes`;
          description = `Learn about Cssville's ${generator.name} utility classes.`;
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

  }, [matches, location.pathname, defaultTitle, defaultDescription]);

  // This component doesn't render anything
  return null;
};
