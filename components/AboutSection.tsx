import React = require("react");

export const AboutSection = (props: any) => {
    return (
      <>
        <h2 className="d-none fs-xxx-large m-0 pb-4 md-fs-xx-large">
          About
        </h2>
        <div className="d-none w-12 d-flex sm-flex-direction-column pb-4">
          <div className="w-12 pr-5 sm-pr-0">
            A CSS utility-first framework is a CSS framework that provides pre-built utility classes to style HTML elements. 
            Unlike traditional CSS frameworks, where styles are defined in large blocks or files, utility-first frameworks provide small, 
            reusable classes.
          </div>
          <div className="w-12 pr-5 sm-pr-0">
            The advantage of utility-first frameworks is that they provide a very efficient way of creating and customizing styles. 
            Because the classes are small and modular, it is easy to create new styles simply by combining and stacking classes together.           
          </div>
          <div className="w-12">
            This approach also results in smaller CSS files and faster load times, making utility-first frameworks a popular choice for 
            responsive web design and mobile-first development. Each class can be combined and customized to create any desired styling.
          </div>
        </div>
      </>
    );
}