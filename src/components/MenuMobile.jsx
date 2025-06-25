import { Space } from "antd";
import Image from "components/Image";
import React, { useState, useCallback } from "react";
import { useRouter } from "next/router";
import { showComingSoon } from "shares/config";
import { openInNewTab } from "shares/helpers";
import { MENU_ITEMS } from "shares/menu";
import tw, { css, styled } from "twin.macro";

const MenuExpand = styled.ul`
  transform-origin: top;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.3s ease, opacity 0.3s ease;

  ${({ active, height }) =>
    active &&
    css`
      max-height: ${height}px;
      opacity: 1;
    `}
`;

const MenuItem = styled.li`
  ${tw`flex flex-row items-center text-hint cursor-pointer text-lg md:text-[24px] h-[40px] md:h-[48px] hover:text-white transition-colors`}
`;

const IconArrow = styled.img`
  transition: all 0.4s ease;
  transform: rotateZ(0deg);

  ${({ active }) =>
    active &&
    css`
      transform: rotateZ(90deg);
    `}
`;

const DEFAULT = MENU_ITEMS.map((i) => ({ ...i, isExpand: false }));

export const MenuMobile = ({ onSelected }) => {
  const router = useRouter();
  const [menuItems, setMenuItems] = useState(DEFAULT);

  const onToggleMenu = useCallback((index) => {
    const newMenu = [...menuItems];
    if (newMenu[index].children) {
      newMenu[index] = {
        ...newMenu[index],
        isExpand: !newMenu[index].isExpand,
      };
      setMenuItems(newMenu);
    } else {
      onChange(menuItems[index]);
    }
  }, [menuItems]);

  const onChange = useCallback((item) => {
    try {
      if (item?.isComingSoon) {
        showComingSoon();
        return;
      }
      if (item?.isRedirect && item?.href) {
        openInNewTab(item?.href);
        setMenuItems(DEFAULT);
        onSelected?.();
        return;
      }
      if (item?.key) {
        router.push(item.key);
        setMenuItems(DEFAULT);
        onSelected?.();
      }
    } catch (error) {
      console.error("Navigation error:", error);
      // Fallback to home page if navigation fails
      router.push("/");
      setMenuItems(DEFAULT);
      onSelected?.();
    }
  }, [router, onSelected]);

  return (
    <Space direction="vertical" size={4} className="p-[24px] md:p-[32px] w-full">
      {menuItems.map((item, index) => (
        <React.Fragment key={item.key || index}>
          <MenuItem onClick={() => onToggleMenu(index)}>
            <div className="flex flex-row justify-between w-full items-center">
              <Space size={12}>
                {item?.icon && (
                  <Image src={item.icon} className="w-[18px] md:w-[20px] object-contain" />
                )}
                <span className="text-sm md:text-base">{item.label}</span>
              </Space>
              {item?.children?.length > 0 && (
                <IconArrow
                  active={item?.isExpand}
                  src="/icons/ic-arrow-right.svg"
                  className="w-[16px] md:w-[18px]"
                />
              )}
            </div>
          </MenuItem>
          {item?.children?.length > 0 && (
            <MenuExpand
              height={item?.children?.length * 36}
              active={item?.isExpand}
            >
              {item?.children?.map((sub, subIndex) => (
                <MenuItem
                  key={sub.key || `sub-${subIndex}`}
                  onClick={() => onChange(sub)}
                  className="h-[36px] text-hint text-sm md:text-[16px] pl-6"
                >
                  {sub.label}
                </MenuItem>
              ))}
            </MenuExpand>
          )}
        </React.Fragment>
      ))}
    </Space>
  );
};

export default MenuMobile;
