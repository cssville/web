import React, { useEffect, useState } from 'react';
import { Text } from 'cssville-ui/build/components/ui/simple/Typography';
import { Stack } from "cssville-ui/build/components/ui/simple/Stack";
import { MenuItems } from './../../../data/pagesData';
import { Logo } from "../../Logo";
import { Link } from "react-router-dom";
import { Button } from "cssville-ui/build/components/ui/simple/Button";

const MenuItem = ({ href, item, category, activeCategory, activeItem, onClick }) => {
  const isActive = category === activeCategory && item === activeItem;
  const activeLinkClasses = isActive ? "bor-lef-col-blue-400 bor-lef-col-blue-400-hover" : "bor-lef-col-blue-100 bor-lef-col-blue-200-hover";
  const activeTextClasses = isActive ? "bac-col-blue-100-hover bac-col-blue-100 fon-wei-600" : "bac-col-blue-50-hover";
  return (
    <Link to={href} key={item} onClick={onClick} className={`${activeLinkClasses} dis-flex hei-8 bor-lef-sty-solid bor-lef-wid-2 wid-full box-siz-border-box tex-dec-none col-text`}>
      <Text tag="span" className={`${activeTextClasses} mar-x-5 bor-rad-4 pad-x-5 pad-y-3`}>
        {item}
      </Text>
    </Link>
  );
};

export const LeftMenu = ({ activeItem, activeCategory }) => {

  const isDesktop = () => window.innerWidth > 768;

  const [isOpen, setIsOpen] = useState(isDesktop());

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.body.classList.remove('ove-hidden');
    } else {
      document.body.classList.add('ove-hidden');
    }
  };

  const handleMenuClick = () => {
    if(!isDesktop())
      setIsOpen(false);
    document.body.classList.remove('ove-hidden');
  };

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(isDesktop())
    };
    window.addEventListener('resize', handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const md = `${isOpen ? "md-pos-absolute md-max-wid-xs" : "md-pos-relative md-max-wid-full"} md-bor-rig-0 md-wid-full md-pad-x-6`
  const sm = `${isOpen ? "sm-pad-x-4" : "sm-pad-x-0"}`

  return (
    <>
      {isOpen &&
        <Stack fullWidth className="dis-none md-dis-block hei-100vh pos-absolute bac-col-grey-900-05 z-ind-5" />
      }
      <Stack noGap className={`min-wid-1/4 max-wid-xs pad-rig-6 pad-bot-7 max-hei-100vh ove-y-auto pos-sticky z-ind-10 top-0 bor-rig-1 bac-col-white ${md} ${sm}`}>
        <Stack noGap row fullWidth className="jus-con-space-between" itemsCenter>
          <Logo className="pad-y-7" />
          <Button noShadow onClick={handleClick}
            className="dis-none md-dis-flex"
            icon={
              <img src={isOpen ? "/img/x.svg" : "/img/three-bars.svg"} alt="bars" className="hei-100 wid-full" />
            } />
        </Stack>
        {isOpen && MenuItems.map(i => (
          <Stack noGap className="md-wid-full" key={i.category}>
            <Text xl bold>
              {i.category}
            </Text>
            <Stack noGap column fullWidth>
              {i.values.map((v: { item: any; href: any; }) => (
                <MenuItem key={`text-${i.category}-${v.item}`} item={v.item} onClick={handleMenuClick} href={v.href} activeItem={activeItem} category={i.category} activeCategory={activeCategory} />
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </>
  );
};
