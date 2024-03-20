import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Cssville } from "cssville-generators/build/cssville";
import { IGenerator } from 'cssville-generators/build/IGenerator';
import { NotFoundPage } from '../NotFoundPage';
import { ClassesList } from '../../ClassesList';
import { Title } from 'cssville-ui/build/components/ui/simple/Typography';
import { Chip } from 'cssville-ui/build/components/ui/simple/Chip';
import { getClasses } from '../../utils';
import { DocsPage } from "./DocsPage";


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
      : <DocsPage title={generator.name}>
        <Title xl>CSS classes and properties</Title>
        <table style={{ borderCollapse: "collapse" }} className="my-4 w-12">
          <tr className="bg-color-grey-100">
            <th className="p-3 border-1">Class name property</th>
            <th className="p-3 border-1">CSS properties</th>
          </tr>
          {
            generator.cssData.map(cssClassData =>
              <tr>
                <td className="p-3 border-1"><Chip>{cssClassData.className}-*</Chip></td>
                <td className="p-3 border-1">
                  {cssClassData.cssProperties.map(
                    (p, i) =>
                      <React.Fragment key={i}>
                        <Chip>{p}</Chip>
                        {i < cssClassData.cssProperties.length - 1 && <span>, </span>}
                      </React.Fragment>
                  )}
                </td>
              </tr>
            )
          }
        </table>
        <Title xl>CSS property values</Title>
        <table style={{ borderCollapse: "collapse" }} className="my-4">
          <tr className="bg-color-grey-100">
            <th className="p-3 border-1">Class name value</th>
            <th className="p-3 border-1">CSS value</th>
          </tr>
          {
            Array.from(generator.cssData[0].postfixValuesMap.keys()).map(key => {
              var values = generator.cssData[0].postfixValuesMap.get(key);
              return (
                <tr>
                  <td className="p-3 border-1"><Chip>{key}</Chip></td>
                  <td className="p-3 border-1">
                    {values.map(
                      (p, i) =>
                        <React.Fragment key={i}>
                          <Chip>{p}</Chip>
                          {i < values.length - 1 && <span>, </span>}
                        </React.Fragment>
                    )}
                  </td>
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
      </DocsPage>
  );
};