import React from 'react';
import hljs from 'highlight.js';
import { Chip } from "./ui/simple/Chip";
import { BodyText } from './ui/simple/BodyText';

export const DemoSection = (props: any) => {
  return (
    <>
      <h2 id="demo" className="fs-xxx-large m-0 pb-4 md-fs-xx-large">
        Demo
      </h2>
      <BodyText xl className="max-w-8 md-max-w-12">
        In a utility-first framework, each class is designed to target a specific aspect of the style, such as font size, color, margin, or padding.
        The classes are named according to the property they control, such as <Chip txt="flex-direction-row"/>, <Chip txt="cursor-pointer"/>, <Chip txt="mx-4"/>, <Chip txt="py-2"/>, and so on.
        These classes can be added directly to HTML elements, without the need for additional CSS styling.
      </BodyText>
      <p className="fs-large pb-3 m-0">
        The example below shows some classes in action:
      </p>
      <div className="d-flex flex-direction-column position-relative br-5 py-6 lg-p-4 mb-6 box-shadow-xl">
        <div className="w-12 d-flex justify-content-center mb--5">
          <div id="example" className="w-12 d-flex justify-content-center">
            <div className="d-flex w-12 position-relative max-w-sm">
              <img src="img/house.webp" className="w-12 max-w-12 br-3 object-fit-cover" />
              <div className="d-flex position-absolute h-100 w-12">
                <div className="d-flex flex-direction-column p-3 w-12">
                  <img src="img/star.svg" className="h-24px w-24px" />
                  <div className="flex-grow-1"></div>
                  <div className="d-flex w-12">
                    <img src="img/profile.svg" className="h-48px w-48px bg-color-white br-9999px" />
                    <div className="d-flex justify-content-center pl-2 flex-direction-column flex-grow-1">
                      <span className="fw-bold color-white">Naomi Rivers</span>
                      <span className="fs-small color-white opacity-07">Available for hire</span>
                    </div>
                    <div className="d-flex align-items-flex-end">
                      <img src="img/bookmark.svg" className="h-24px w-24px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <pre className="overflow-auto m-0">
            <code className="fs-large language-xml hljs br-3"
              dangerouslySetInnerHTML={{
                __html:
                  hljs.highlight(`
  <div className="d-flex w-12 position-relative max-w-sm">
    <img src="img/house.webp" className="w-12 max-w-12 br-3 object-fit-cover" />
    <div className="d-flex position-absolute h-100 w-12">
      <div className="d-flex flex-direction-column p-3 w-12">
        <img src="img/star.svg" className="h-24px w-24px" />
        <div className="flex-grow-1"></div>
        <div className="d-flex w-12">
          <img src="img/profile.svg" className="h-48px w-48px bg-color-white br-9999px" />
          <div className="d-flex justify-content-center pl-2 flex-direction-column flex-grow-1">
            <span className="fw-bold color-white">Naomi Rivers</span>
            <span className="fs-small color-white opacity-07">Available for hire</span>
          </div>
          <div className="d-flex align-items-flex-end">
            <img src="img/bookmark.svg" className="h-24px w-24px" />
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