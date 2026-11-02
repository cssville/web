import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Cssville } from "cssville-generators/build/cssville";
import { IGenerator } from 'cssville-generators/build/IGenerator';
import { ClassesList } from '../../ClassesList';
import { Title, Text } from 'cssville-ui/build/components/ui/simple/Typography';
import { Chip } from 'cssville-ui/build/components/ui/simple/Chip';
import { classCount, getClasses } from '../../utils';
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

// Readable example for the intro, e.g. dis-flex rather than the first class, dis-block-flow
const exampleSuffixes = ['flex', 'center', 'auto', 'bold', 'pointer', 'column', 'wrap', 'relative', 'cover', 'solid', 'lg', '4', 'blue-500'];

const ClassIntro = ({ generator }: { generator: IGenerator }) => {
  const data = generator.cssData[0];
  const suffixes = Array.from(data.postfixValuesMap.keys());
  const example = `${data.className}-${suffixes.find(s => exampleSuffixes.indexOf(s) !== -1) ?? suffixes[0]}`;
  return (
    <Text lg>
      Cssville has {classCount(generator).toLocaleString('en-US')} utility classes for <Chip>{generator.name}</Chip>.
      Add one to an element's class attribute to set the property, for example <Chip>{example}</Chip>.
      {generator.generateCssForBreakpoints
        ? <> Put a breakpoint name in front of a class to apply it only on screens up to that width, as in <Chip>md-{example}</Chip>.</>
        : <> These classes have no responsive prefixes.</>}
      {' '}Add <Chip>-hover</Chip> to the end to apply a class only on hover, as in <Chip>{example}-hover</Chip>.
      {' '}<Link to="/docs/intro/getting-started">Getting started</Link> explains how class names are built.
    </Text>
  );
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
        <ClassIntro generator={generator} />
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
              <div key={cssClassData.className} className="wid-full">
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