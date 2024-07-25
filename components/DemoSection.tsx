import React from 'react';
import hljs from 'highlight.js';
import { Chip } from "cssville-ui/build/components/ui/simple/Chip";
import { Display, Text } from "cssville-ui/build/components/ui/simple/Typography"
import { Section } from "cssville-ui/build/components/ui/simple/Section";


export const DemoSection = (props: any) => {
  return (
    <Section lg>
      <Display id="demo" tag="h2">
        Demo
      </Display>
      <Text lg className="max-wid-2/3 md-max-wid-full">
        In a utility-first framework, each class is designed to target a specific aspect of the style, such as font size, color, margin, or padding.
        The classes are named according to the property they control, such as <Chip>fle-dir-row</Chip>, <Chip>cur-pointer</Chip>, <Chip>mar-x-4</Chip>, <Chip>pad-y-2</Chip>, and so on.
        These classes can be added directly to HTML elements, without the need for additional CSS styling.
      </Text>
      <Text lg>
        The example below shows some classes in action:
      </Text>
      <div className="dis-flex fle-dir-column pos-relative bor-rad-6 pad-y-7 lg-pad-5 mar-bot-7 box-sha-xl wid-full box-siz-border-box">
        <div className="wid-full dis-flex jus-con-center mar-bot--6">
          <div id="example" className="wid-full dis-flex jus-con-center">
            <div className="dis-flex wid-full pos-relative max-wid-sm">
              <img src="img/house.webp" className="wid-full max-wid-full bor-rad-4 obj-fit-cover" />
              <div className="dis-flex pos-absolute hei-100 wid-full">
                <div className="dis-flex fle-dir-column pad-4 wid-full">
                  <img src="img/star.svg" className="hei-7 wid-7" />
                  <div className="fle-gro-1"></div>
                  <div className="dis-flex wid-full">
                    <img src="img/profile.svg" className="hei-10 wid-10 bac-col-white bor-rad-max" />
                    <div className="dis-flex jus-con-center pad-lef-3 fle-dir-column fle-gro-1">
                      <span className="fon-wei-bold col-white">Naomi Rivers</span>
                      <span className="fon-siz-small col-white opa-07">Available for hire</span>
                    </div>
                    <div className="dis-flex ali-ite-flex-end">
                      <img src="img/bookmark.svg" className="hei-7 wid-7" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dis-flex jus-con-center">
          <pre className="ove-auto mar-0">
            <code className="fon-siz-large language-xml hljs bor-rad-4"
              dangerouslySetInnerHTML={{
                __html:
                  hljs.highlight(`
  <div className="dis-flex wid-full pos-relative max-wid-sm">
    <img src="img/house.webp" className="wid-full max-wid-full bor-rad-4 obj-fit-cover" />
    <div className="dis-flex pos-absolute hei-100 wid-full">
      <div className="dis-flex fle-dir-column pad-4 wid-full">
        <img src="img/star.svg" className="hei-7 wid-7" />
        <div className="fle-gro-1"></div>
        <div className="dis-flex wid-full">
          <img src="img/profile.svg" className="hei-10 wid-10 bac-col-white bor-rad-max" />
          <div className="dis-flex jus-con-center pad-lef-3 fle-dir-column fle-gro-1">
            <span className="fon-wei-bold col-white">Naomi Rivers</span>
            <span className="fon-siz-small col-white opa-07">Available for hire</span>
          </div>
          <div className="dis-flex ali-ite-flex-end">
            <img src="img/bookmark.svg" className="hei-7 wid-7" />
          </div>
        </div>
      </div>
    </div>
  </div>`, { language: 'xml' }).value
              }}
            />
          </pre>
        </div>
      </div>
    </Section>
  );
}