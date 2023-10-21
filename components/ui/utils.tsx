import { ReactElement, ReactNode } from "react";
import { BaseProps, SizeProps } from "./props/Props";
import React from "react";

export function getValueBySize(props: SizeProps, values: string[], defaultClass: string = ""): string {
  if (values.length < 5) {
    return defaultClass;
  }
  const xsClass = values[0];
  const smClass = values[1];
  const mdClass = values[2];
  const lgClass = values[3];
  const xlClass = values[4];
  const defaultClassValue = defaultClass === "" ? mdClass : defaultClass;
  return props.xs ? xsClass
    : props.sm ? smClass
      : props.md ? mdClass
        : props.lg ? lgClass
          : props.xl ? xlClass
            : defaultClassValue;
}

export function buildSimpleComponent(props: BaseProps, defaultTag: string = "div", tagsArray: string[] = [], classesArray: (string | string[])[]): ReactElement {
  let classes = "";
  for (const item of classesArray) {
    let c = "";
    if (typeof item === "string") {
      c = item;
    }
    else {
      c = getValueBySize(props, item)
    }
    if (c !== "") {
      classes += (classes === "" ? c : ` ${c}`);
    }
  }
  
  const { className, tag, ...restProps } = props;
  const baseTag = "div";
  const tagFromProps = tag || getValueBySize(props, tagsArray, defaultTag)
  const Tag = tagFromProps === "" ? baseTag : tagFromProps;

  return (
    <Tag className={`${classes}${props.className ? ` ${props.className}` : ''}`} {...restProps} >
      {props.children}
    </Tag>
  );
}