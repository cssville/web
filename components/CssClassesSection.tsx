import React from 'react';
import { ReactNode } from "react";
import { ClassesList } from "./ClassesList";
import { Cssville } from './build/cssville';

function getClasses(text: string): Array<{ cssClass: string, cssString: string }> {
  const classes = Array<{ cssClass: string, cssString: string }>();
  text.split("}").forEach((el, i) => {
    var line = el.trim();
    var cl = line.split("{")[0].trim();
    var inner = line.split("{")[1];
    var properties = []
    if (inner !== undefined) {
      var props = inner.trim().split(";").map(p => p.trim());
      props.forEach((p, j) => {
        if (p !== "") {
          properties[properties.length] = "  " + p + ";\n";
        }
      });
    }
    if (cl !== "") {
      classes.push({ cssClass: cl, cssString: cl + " {\n" + properties.join("") + "}\n" });
    }
  });
  return classes;
};
export const CssClassesSection = (props: any) => {
  const generatorNodes: ReactNode[] = [];
  Cssville.generators.forEach((g, i) => {
    let array = new Array();
    g.cssData.map(d => getClasses(d.getCss("", []))).forEach(arr => {
      array = array.concat(arr);
    });
    var node = (
      <div key={`node-${g.name}-${i}`} className="py-4">
        <div className="fs-x-large fw-bold pb-3">{g.name}</div>
        <div className="border-bottom-1 mb-3"></div>
        <ClassesList data={array} />
      </div>
    );
    generatorNodes[generatorNodes.length] = node;
  })
  return (
    <>
      <h2 id="classes" className="fs-xxx-large m-0 pb-4 md-fs-xx-large">
        CSS classes
      </h2>
      <p className="fs-large pb-3 m-0 max-w-8 md-max-w-12">
        Utility classes are a specific type of class that is designed to provide a single,
        focused styling property, such as padding, margin, or font size. Unlike traditional classes,
        which might be used to define more complex styles, utility classes are very simple and focused on a single aspect of the style.
      </p>
      {generatorNodes}
    </>
  );
}