import React from 'react';
import hljs from 'highlight.js';
import { Link } from 'react-router-dom';
import { Cssville } from 'cssville-generators/build/cssville';
import { Title, Text } from 'cssville-ui/build/components/ui/simple/Typography';
import { Chip } from 'cssville-ui/build/components/ui/simple/Chip';
import { Stack } from 'cssville-ui/build/components/ui/simple/Stack';

const Code = ({ language, code }: { language: string, code: string }) => (
  <div className="box-siz-border-box wid-full max-wid-full ove-auto box-sha-lg bor-rad-5">
    <pre className="mar-0">
      <code className={`fon-siz-large language-${language} hljs bor-rad-3`}
        dangerouslySetInnerHTML={{ __html: hljs.highlight(code, { language }).value }} />
    </pre>
  </div>
);

export const GettingStartedPage = (props) => {
  return (
    <>
      <Text lg>
        Cssville is a utility-first CSS framework with zero dependencies. It is a single stylesheet, <Chip>cssville.css</Chip>,
        made of small classes that each set one CSS property, so you style elements by adding classes to your HTML instead of writing CSS.
      </Text>

      <Stack fullWidth>
        <Title xl tag="h2">Install</Title>
        <Text lg>Install the package from npm:</Text>
        <Code language="bash" code="npm install cssville" />
        <Text lg>Then import the stylesheet once, in your app's entry file:</Text>
        <Code language="javascript" code={`import "cssville/cssville.css";`} />
        <Text lg>To try it without a build step, link the stylesheet from the jsDelivr CDN instead:</Text>
        <Code language="xml" code={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cssville/cssville.css" />`} />
      </Stack>

      <Stack fullWidth>
        <Title xl tag="h2">Add classes</Title>
        <Text lg>
          A class name is a CSS property followed by its value. The property part uses the first three letters of each word,
          so <Chip>display</Chip> becomes <Chip>dis</Chip> and <Chip>flex-direction</Chip> becomes <Chip>fle-dir</Chip>:
        </Text>
        <Code language="css" code={`.dis-flex { display: flex; }
.fle-dir-column { flex-direction: column; }
.pad-y-4 { padding-top: 8px; padding-bottom: 8px; }`} />
        <Text lg>Combine classes on an element to style it:</Text>
        <Code language="xml" code={`<div class="dis-flex fle-dir-column gap-4 pad-6 bor-rad-4 box-sha-lg">
  <span class="fon-siz-xl fon-wei-bold">Cssville</span>
  <span class="col-blue-grey-600">Styled with utility classes only.</span>
</div>`} />
        <div className="dis-flex fle-dir-column gap-4 pad-6 bor-rad-4 box-sha-lg">
          <span className="fon-siz-xl fon-wei-bold">Cssville</span>
          <span className="col-blue-grey-600">Styled with utility classes only.</span>
        </div>
        <Text lg>
          The CSS classes pages in the menu list every class and value,
          for example <Link to="/docs/css-classes/display">display</Link> and <Link to="/docs/css-classes/padding">padding</Link>.
        </Text>
      </Stack>

      <Stack fullWidth>
        <Title xl tag="h2">Responsive prefixes</Title>
        <Text lg>
          Put a breakpoint name in front of a class to apply it only on screens up to that width.
          The prefixes and their widths are:
        </Text>
        <Stack row flexWrap>
          {Cssville.breakpoints.map(b => <Chip key={b.name}>{b.name}: {b.value}</Chip>)}
        </Stack>
        <Text lg>
          This row becomes a column on screens 768px wide or narrower:
        </Text>
        <Code language="xml" code={`<div class="dis-flex fle-dir-row md-fle-dir-column gap-4">
  <div>Menu</div>
  <div>Content</div>
</div>`} />
        <Text lg>Color, background color and border color classes have no prefixed versions.</Text>
      </Stack>

      <Stack fullWidth>
        <Title xl tag="h2">Hover styles</Title>
        <Text lg>
          Add <Chip>-hover</Chip> to the end of a class to apply it only while the pointer is over the element:
        </Text>
        <Code language="xml" code={`<a href="/docs" class="col-blue-700 tex-dec-none tex-dec-underline-hover">Read the docs</a>`} />
        <Text lg>
          Hover classes work with prefixes too: <Chip>md-dis-flex-hover</Chip> applies on hover on screens up to 768px wide.
        </Text>
      </Stack>

      <Stack fullWidth>
        <Title xl tag="h2">Production builds</Title>
        <Text lg>
          <Chip>cssville.css</Chip> contains every class and is about 3.2 MB. For production, remove the classes you don't use
          at build time with a tool such as <a href="https://purgecss.com/" target="_blank">PurgeCSS</a>, as this site does.
        </Text>
      </Stack>
    </>
  );
};
