import React from 'react';
import { Header } from "../Header";
import { Footer } from "../Footer";
import { NotFoundSection } from "./NotFoundSection";

export const NotFoundPage = (props) => {
  return (
    <>
      <Header />
      {NotFoundSection(props)}
      <Footer />
    </>
  );
};

