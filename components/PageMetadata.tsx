import React, { useEffect } from 'react';
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
  
  useEffect(() => {
    // Get the last match which contains the current route's handle
    const match = matches[matches.length - 1];
    let title = defaultTitle;
    let description = defaultDescription;
    
    // Extract metadata from the route's handle
    if (match && match.handle) {
      const handle = match.handle as any;
      
      // For CSS Classes pages, we need to handle the dynamic title
      if (handle.category === "CSS Classes" && handle.title === "") {
        const parts = location.pathname.split("/");
        const className = parts[parts.length - 1];
        const generator = Cssville.generators.find(g => g.name === className);
        
        if (generator) {
          title = `${generator.name} - Cssville CSS Classes`;
          description = `Learn about Cssville's ${generator.name} utility classes.`;
        }
      } else if (handle.title) {
        // For other pages, use the title from the handle
        title = handle.title;
        if (handle.category !== "Home") {
          title += " - Cssville";
        }
        
        if (handle.description) {
          description = handle.description;
        }
      }
    }
    
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