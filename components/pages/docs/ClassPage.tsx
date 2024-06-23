import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Cssville } from "cssville-generators/build/cssville";
import { IGenerator } from 'cssville-generators/build/IGenerator';
import { ClassesList } from '../../ClassesList';
import { Title } from 'cssville-ui/build/components/ui/simple/Typography';
import { Chip } from 'cssville-ui/build/components/ui/simple/Chip';
import { getClasses } from '../../utils';
import { NotFoundSection } from "../NotFoundSection";
import { CssClassData } from "cssville-generators/build/data/cssClassData";
import Table from "../../Table";

const renderRowPrefixes = (cssClassData: CssClassData, index: number) => (
  <tr key={index}>
    <td className="pad-3 bor-bot-1"><Chip noBorder>{cssClassData.className}-*</Chip></td>
    <td className="pad-3 bor-bot-1">
      {cssClassData.cssProperties.map((p, i) => (
        <React.Fragment key={i}>
          <Chip noBorder>{p}</Chip>
          {i < cssClassData.cssProperties.length - 1 && <span>, </span>}
        </React.Fragment>
      ))}
    </td>
  </tr>
);

const renderRowSuffixes = (key: string, values: string[]) => (
  <tr key={key}>
    <td className="pad-3 bor-bot-1"><Chip noBorder>*-{key}</Chip></td>
    <td className="pad-3 bor-bot-1">
      {values.map((p, i) => (
        <React.Fragment key={i}>
          <Chip noBorder>{p}</Chip>
          {i < values.length - 1 && <span>, </span>}
        </React.Fragment>
      ))}
    </td>
  </tr>
);

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
      ?
      <NotFoundSection />
      :
      <>
        <Title xl>CSS class prefixes and related properties</Title>
        <Table<CssClassData>
          headers={["Class name prefix", "CSS properties"]}
          data={generator.cssData as CssClassData[]}
          renderRow={renderRowPrefixes}
        />
        <Title xl>CSS class suffixes and property values</Title>
        <Table<[string, string[]]>
          headers={["Class name suffix", "CSS properties value"]}
          data={Array.from(generator.cssData[0].postfixValuesMap.entries())}
          renderRow={([key, values]) => renderRowSuffixes(key, values)}
        />
        {
          generator.cssData.map(cssClassData =>
            <div key={cssClassData.className}>
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
            </div>
          )
        }
      </>
  );
};