import React, { useMemo } from 'react';
import { ReactNode } from "react";
import { ClassesList } from "./ClassesList";
import { Cssville } from 'cssville-generators/build/cssville';
import { Display, Text, Title } from 'cssville-ui/build/components/ui/simple/Typography';
import { Stack } from 'cssville-ui/build/components/ui/simple/Stack';

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
  const generatorNodes: ReactNode[] = Cssville.generators.map((g, i) => {
    //let array = [];
    //g.cssData.map(d => getClasses(d.getCss("", []))).forEach(arr => {
    //  array = array.concat(arr);
    //});
    //<ClassesList data={array} />
    return (
      <Stack column className="wid-12" key={`node-${g.name}-${i}`}>
        <Title xl className='wid-12 bor-bot-1'>{g.name}</Title>
        {
          g.cssData.map(d =>
            <div>
              {d.className}: {d.cssProperties.map(
                (p, i) =>
                  <React.Fragment key={i}>
                    <span>{p}</span>
                    {i < d.cssProperties.length - 1 && <span>, </span>}
                  </React.Fragment>
              )}
            </div>
          )
        }
      </Stack>
    );
  });

  return (
    <Stack column xl noGap>
      <Display id="classes" tag="h2">
        CSS classes
      </Display>
      <Text lg className="max-wid-8 md-max-wid-12">
        Utility classes are a specific type of class that is designed to provide a single,
        focused styling property, such as padding, margin, or font size. Unlike traditional classes,
        which might be used to define more complex styles, utility classes are very simple and focused on a single aspect of the style.
      </Text>
      {generatorNodes}
    </Stack>
  );
}