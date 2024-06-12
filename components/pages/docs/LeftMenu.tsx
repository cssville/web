import React, { useRef, useEffect } from 'react';
import { Text } from 'cssville-ui/build/components/ui/simple/Typography';
import { Stack } from "cssville-ui/build/components/ui/simple/Stack";
import { MenuItems } from './../../../data/pagesData';

const MenuItem = ({ href, item, category, activeCategory, activeItem, containerRef }) => {
  const itemRef = useRef(null);
  const isActive = category === activeCategory && item === activeItem;
  const activeClasses = isActive ? "bac-col-blue-50 fon-wei-600" : "";

  useEffect(() => {
    if (isActive && itemRef.current && containerRef.current) {
      const itemElement = itemRef.current;
      const containerElement = containerRef.current;

      const itemRect = itemElement.getBoundingClientRect();
      const containerRect = containerElement.getBoundingClientRect();

      const isVisible =
        itemRect.top >= containerRect.top &&
        itemRect.bottom <= containerRect.bottom;

      if (!isVisible) {
        itemElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }
    }
  }, [isActive, containerRef]);

  return (
    <a
      href={href}
      ref={itemRef}
      key={item}
      className={`${activeClasses} bac-col-blue-50-hover bor-rad-3 pad-lef-4 pad-x-3 pad-y-2 wid-12 box-siz-border-box tex-dec-none col-blue-800`}
    >
      {item}
    </a>
  );
};

export const LeftMenu = ({ activeItem, activeCategory }) => {
  const containerRef = useRef(null);

  return (
    <Stack
      noGap
      column
      ref={containerRef}
      className="max-wid-xs min-wid-3 pad-rig-3 mar-rig-8 pad-bot-6 max-hei-100vh ove-auto pos-sticky top-0"
    >
      {MenuItems.map(i => (
        <div key={i.category}>
          <Text xl className="wid-12">
            {i.category}
          </Text>
          <Stack xs column className="wid-12">
            {i.values.map(v => (
              <MenuItem
                key={`text-${i.category}-${v.item}`}
                item={v.item}
                href={v.href}
                activeItem={activeItem}
                category={i.category}
                activeCategory={activeCategory}
                containerRef={containerRef}
              />
            ))}
          </Stack>
        </div>
      ))}
    </Stack>
  );
};
