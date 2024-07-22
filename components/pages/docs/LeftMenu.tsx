import React, { useState } from 'react';
import { Text } from 'cssville-ui/build/components/ui/simple/Typography';
import { Stack } from "cssville-ui/build/components/ui/simple/Stack";
import { MenuItems } from './../../../data/pagesData';
import { Logo } from "../../Logo";
import { Link } from "react-router-dom";
import { Button } from "cssville-ui/build/components/ui/simple/Button";
import useScreenSize from '../../../utils/useScreenSize';

const MenuItem = ({ href, item, category, activeCategory, activeItem }) => {
  const isActive = category === activeCategory && item === activeItem;
  const activeLinkClasses = isActive ? "bor-lef-col-blue-300" : "bor-lef-col-blue-100";
  const activeTextClasses = isActive ? "bac-col-blue-100-hover bac-col-blue-100 fon-wei-600" : "bac-col-blue-50-hover";
  return (
    <Link to={href} key={item} className={`${activeLinkClasses} bor-lef-col-blue-300-hover bor-lef-sty-solid bor-lef-wid-2px wid-full box-siz-border-box tex-dec-none col-text`}>
      <Text className={`${activeTextClasses} mar-x-4 bor-rad-3 pad-x-4 pad-y-2`}>
        {item}
      </Text>
    </Link>
  );
};

export const LeftMenu = ({ activeItem, activeCategory }) => {
  const screenSize = useScreenSize();
  const [isOpen, setIsOpen] = useState(screenSize.width > 544);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Stack noGap className="min-wid-1/4 max-wid-xs pad-rig-5 pad-bot-6 max-hei-100vh ove-y-auto pos-sticky top-0 bor-rig-1 sm-pos-relative sm-max-wid-full sm-wid-full sm-pad-rig-0">
      <Stack noGap row fullWidth className="jus-con-space-between" itemsCenter>
        <Logo className="pad-y-6" />
        <Button noShadow onClick={handleClick}
          className="dis-none sm-dis-flex mar-rig-4"
          icon={
            <img src={isOpen ? "/img/x.svg" : "/img/three-bars.svg"} alt="bars" className="hei-100 wid-full" />
          } />
      </Stack>
      {MenuItems.map(i => (
        <Stack noGap className="sm-wid-full" key={i.category}>
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
