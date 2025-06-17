import React from 'react';
import { Header } from "../Header";
import { Footer } from "../Footer";
import { NotFoundSection } from "./NotFoundSection";
import { PageMetadata } from "../PageMetadata";

export const NotFoundPage = (props) => {
  return (
    <>
      <PageMetadata />
      <Header />
      {NotFoundSection(props)}
      <Footer />
    </>
  );
};
