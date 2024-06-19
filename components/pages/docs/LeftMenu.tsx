import React, { useEffect } from 'react';
import { Text } from 'cssville-ui/build/components/ui/simple/Typography';
import { Stack } from "cssville-ui/build/components/ui/simple/Stack";
import { MenuItems } from './../../../data/pagesData';

const MenuItem = ({ href, item, category, activeCategory, activeItem }) => {
  const isActive = category === activeCategory && item === activeItem;
  const activeLinkClasses = isActive ? "bor-lef-col-blue-300" : "bor-lef-col-blue-100";
  const activeTextClasses = isActive ? "bac-col-blue-100-hover bac-col-blue-100 fon-wei-600" : "bac-col-blue-50-hover";

  return (
    <a
      href={href}
      key={item}
      className={`${activeLinkClasses} bor-lef-col-blue-300-hover bor-lef-sty-solid bor-lef-wid-2px wid-full box-siz-border-box tex-dec-none col-text`}
    >
      <Text className={`${activeTextClasses} mar-lef-3 bor-rad-3 pad-lef-4 pad-x-3 pad-y-2`}>
        {item}
      </Text>
    </a>
  );
};

export const LeftMenu = ({ activeItem, activeCategory }) => {
  return (
    <Stack
      noGap
      className="max-wid-xs min-wid-3 pad-rig-5 mar-rig-8 pad-bot-6 max-hei-100vh ove-auto pos-sticky top-0 bor-rig-1"
    >
      {MenuItems.map(i => (
        <Stack noGap key={i.category}>
          <Text xl bold>
            {i.category}
          </Text>
          <Stack noGap column fullWidth>
            {i.values.map((v: { item: any; href: any; }) => (
              <MenuItem
                key={`text-${i.category}-${v.item}`}
                item={v.item}
                href={v.href}
                activeItem={activeItem}
                category={i.category}
                activeCategory={activeCategory}
              />
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};
