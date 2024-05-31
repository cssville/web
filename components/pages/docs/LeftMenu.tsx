import React from 'react';
import { Text } from 'cssville-ui/build/components/ui/simple/Typography';
import { Cssville } from "cssville-generators/build/cssville";
import { Stack } from "cssville-ui/build/components/ui/simple/Stack";

const MenuItem = (props) => {
  const activeClasses = props.category === props.activeCategory && props.item === props.activeItem ? "bac-col-blue-50 fon-wei-600" : "";
  return (
    <a href={props.href} key={props.item}
      className={`${activeClasses} bac-col-blue-50-hover bor-rad-3 pad-lef-4 pad-x-3 pad-y-2 wid-12 box-siz-border-box tex-dec-none col-blue-800`}>
      {props.item}
    </a>)
}

export const LeftMenu = (props) => {
  var activeItem = props.activeItem;
  var activeCategory = props.activeCategory;
  var generators = Cssville.generators;
  return (
    <Stack noGap column className="max-wid-xs min-wid-3 pad-rig-3 mar-rig-6 max-hei-100vh ove-auto pos-sticky top-0">
      {
        [
          {
            category: "Introduction", values: [
              { item: "Getting started", href: "/docs/intro/getting-started" }
            ]
          },
          { category: "CSS classes", values: Array.from(generators, (g) => ({ item: g.name, href: `/docs/css-classes/${g.name}` })) },
        ].map(i =>
          <>
            <Text xl className="wid-12">
              {i.category}
            </Text>
            <Stack xs column className="wid-12">
              {i.values.map(v => <MenuItem item={v.item} href={v.href} activeItem={activeItem} category={i.category} activeCategory={activeCategory} />)}
            </Stack>
          </>
        )
      }
    </Stack>
  );
};