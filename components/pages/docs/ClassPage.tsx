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
import { Chips } from "../../Chips";
import { Stack } from "cssville-ui/build/components/ui/simple/Stack";

export const prefixColumnRenderers = {
  'Class name prefix': (item: any) => <Chip noBorder>{item.className}-*</Chip>,
  'CSS properties': (item: any) => <Chips data={item.cssProperties} />,
};

export const suffixColumnRenderers = {
  'Class name suffix': (item: [string, string[]]) => <Chip noBorder>*-{item[0]}</Chip>,
  'CSS properties value': (item: [string, string[]]) => <Chips data={item[1]} />,
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
      ?
      <NotFoundSection />
      :
      <>
        <Stack noGap fullWidth>
          <Title xl>CSS class prefixes and related properties</Title>
          <Table<CssClassData>
            data={generator.cssData as CssClassData[]}
            columnRenderers={prefixColumnRenderers}
          />
        </Stack>
        <Stack noGap fullWidth>
          <Title xl>CSS class suffixes and property values</Title>
          <Table<[string, string[]]>
            data={Array.from(generator.cssData[0].postfixValuesMap.entries())}
            columnRenderers={suffixColumnRenderers}
          />
        </Stack>
        <Stack noGap fullWidth>
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
        </Stack>
      </>
  );
};