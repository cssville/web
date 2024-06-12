import React from 'react';
import hljs from 'highlight.js';
import { Chip } from "cssville-ui/build/components/ui/simple/Chip";
import { Display, Text } from "cssville-ui/build/components/ui/simple/Typography"


export const DemoSection = (props: any) => {
  return (
    <>
      <Display id="demo" tag="h2">
        Demo
      </Display>
      <Text lg className="max-wid-8 md-max-wid-12">
        In a utility-first framework, each class is designed to target a specific aspect of the style, such as font size, color, margin, or padding.
        The classes are named according to the property they control, such as <Chip>fle-dir-row</Chip>, <Chip>cur-pointer</Chip>, <Chip>mar-x-4</Chip>, <Chip>pad-y-2</Chip>, and so on.
        These classes can be added directly to HTML elements, without the need for additional CSS styling.
      </Text>
      <Text lg>
        The example below shows some classes in action:
      </Text>
      <div className="dis-flex fle-dir-column pos-relative bor-rad-5 pad-y-6 lg-pad-4 mar-bot-6 box-sha-xl wid-12 box-siz-border-box">
        <div className="wid-12 dis-flex jus-con-center mar-bot--5">
          <div id="example" className="wid-12 dis-flex jus-con-center">
            <div className="dis-flex wid-12 pos-relative max-wid-sm">
              <img src="img/house.webp" className="wid-12 max-wid-12 bor-rad-3 obj-fit-cover" />
              <div className="dis-flex pos-absolute hei-100 wid-12">
                <div className="dis-flex fle-dir-column pad-3 wid-12">
                  <img src="img/star.svg" className="hei-24px wid-24px" />
                  <div className="fle-gro-1"></div>
                  <div className="dis-flex wid-12">
                    <img src="img/profile.svg" className="hei-48px wid-48px bac-col-white bor-rad-9999px" />
                    <div className="dis-flex jus-con-center pad-lef-2 fle-dir-column fle-gro-1">
                      <span className="fon-wei-bold col-white">Naomi Rivers</span>
                      <span className="fon-siz-small col-white opa-07">Available for hire</span>
                    </div>
                    <div className="dis-flex ali-ite-flex-end">
                      <img src="img/bookmark.svg" className="hei-24px wid-24px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dis-flex jus-con-center">
          <pre className="ove-auto mar-0">
            <code className="fon-siz-large language-xml hljs bor-rad-3"
              dangerouslySetInnerHTML={{
                __html:
                  hljs.highlight(`
  <div className="dis-flex wid-12 pos-relative max-wid-sm">
    <img src="img/house.webp" className="wid-12 max-wid-12 bor-rad-3 obj-fit-cover" />
    <div className="dis-flex pos-absolute hei-100 wid-12">
      <div className="dis-flex fle-dir-column pad-3 wid-12">
        <img src="img/star.svg" className="hei-24px wid-24px" />
        <div className="fle-gro-1"></div>
        <div className="dis-flex wid-12">
          <img src="img/profile.svg" className="hei-48px wid-48px bac-col-white bor-rad-9999px" />
          <div className="dis-flex jus-con-center pad-lef-2 fle-dir-column fle-gro-1">
            <span className="fon-wei-bold col-white">Naomi Rivers</span>
            <span className="fon-siz-small col-white opa-07">Available for hire</span>
          </div>
          <div className="dis-flex ali-ite-flex-end">
            <img src="img/bookmark.svg" className="hei-24px wid-24px" />
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
    </>
  );
}