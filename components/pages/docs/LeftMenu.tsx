import React, { useEffect } from 'react';
import { Text } from 'cssville-ui/build/components/ui/simple/Typography';
import { Stack } from "cssville-ui/build/components/ui/simple/Stack";
import { MenuItems } from './../../../data/pagesData';

const MenuItem = ({ href, item, category, activeCategory, activeItem }) => {
  const isActive = category === activeCategory && item === activeItem;
  const activeClasses = isActive ? "bac-col-blue-50 fon-wei-600" : "";

  return (
    <a
      href={href}
      key={item}
      className={`${activeClasses} bac-col-blue-50-hover bor-rad-3 pad-lef-4 pad-x-3 pad-y-2 wid-12 box-siz-border-box tex-dec-none col-blue-800`}
    >
      {item}
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
          <Text xl>
            {i.category}
          </Text>
          <Stack xs column fullWidth>
            {i.values.map(v => (
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
