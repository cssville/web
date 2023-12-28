import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Cssville } from "cssville-generators/build/cssville";
import { CommonPage } from './CommonPage';
import { IGenerator } from 'cssville-generators/build/IGenerator';
import { NotFoundPage } from './NotFoundPage';
import { ClassesList } from '../ClassesList';
import { Title } from 'cssville-ui/build/components/ui/simple/Typography';

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

export const ClassPage = (props) => {
  const name = useLoaderData();
  const genName = name.toString();
  var generator: IGenerator = Cssville.generators.find(g => g.name === genName)
  let array = [];
  if (generator !== undefined) {
    generator.cssData.map(d => getClasses(d.getCss("", []))).forEach(arr => {
      array = array.concat(arr);
    });
  }

  return (
    generator === undefined
      ? <NotFoundPage />
      : <CommonPage title={generator.name}>
        <Title xl>CSS classes and properties</Title>
        <table style={{ borderCollapse: "collapse" }} className="my-4">
          <tr>
            <th className="p-3 border-1">Class name</th>
            <th className="p-3 border-1">Properties</th>
          </tr>
          {
            generator.cssData.map(cssClassData =>
              <tr>
                <td className="p-3 border-1">{cssClassData.className}</td>
                <td className="p-3 border-1">{cssClassData.cssProperties.join(", ")}</td>
              </tr>
            )
          }
        </table>
        <Title xl>CSS property values</Title>
        <table style={{ borderCollapse: "collapse" }} className="my-4">
          <tr>
            <th className="p-3 border-1">Property</th>
            <th className="p-3 border-1">Value</th>
          </tr>
          {
            Array.from(generator.cssData[0].postfixValuesMap.keys()).map(key => {
              var values = generator.cssData[0].postfixValuesMap.get(key);
              return (
                <tr>
                  <td className="p-3 border-1">{key}</td>
                  <td className="p-3 border-1">{values.join(", ")}</td>
                </tr>
              )
            })
          }
        </table>
        {
          generator.cssData.map(cssClassData =>
            <>
              <Title xl id={cssClassData.className}>
                {cssClassData.className}: {cssClassData.cssProperties.map(
                  (p, i) =>
                    <React.Fragment key={i}>
                      <span>{p}</span>
                      {i < cssClassData.cssProperties.length - 1 && <span>, </span>}
                    </React.Fragment>
                )}
              </Title>
              <ClassesList data={getClasses(cssClassData.getCss("", []))} />
            </>
          )
        }
      </CommonPage>
  );
};