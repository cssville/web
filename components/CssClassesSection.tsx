import React, { useMemo } from 'react';
import { ReactNode } from "react";
import { ClassesList } from "./ClassesList";
import { Cssville } from './build/cssville';
import { Display, Text, Title } from './ui/simple/Typography';
import { Column } from './ui/simple/Column';

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
  const generatorNodes: ReactNode[] = useMemo(() => {
    return Cssville.generators.map((g, i) => {
      let array = [];
      g.cssData.map(d => getClasses(d.getCss("", []))).forEach(arr => {
        array = array.concat(arr);
      });
      return (
        <Column key={`node-${g.name}-${i}`}>
          <Title xl className='w-12 border-bottom-1'>{g.name}</Title>
          <ClassesList data={array} />
        </Column>
      );
    });
  }, []); // Empty dependency array because there are no dependencies for this memoized value

  return (
    <Column xl nospace>
      <Display id="classes" tag="h2">
        CSS classes
      </Display>
      <Text xl className="max-w-8 md-max-w-12">
        Utility classes are a specific type of class that is designed to provide a single,
        focused styling property, such as padding, margin, or font size. Unlike traditional classes,
        which might be used to define more complex styles, utility classes are very simple and focused on a single aspect of the style.
      </Text>
      {generatorNodes}
    </Column>
  );
}