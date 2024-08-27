import { Space } from "antd";
import Image from "components/Image";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
  ${tw`flex flex-row items-center text-hint cursor-pointer text-[24px] h-[48px]`}
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
  const history = useHistory();
  const [menuItems, setMenuItems] = useState(DEFAULT);

  const onToggleMenu = (index) => {
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
  };

  const onChange = (item) => {
    if (item?.isComingSoon) {
      return showComingSoon();
    }
    if (item?.isRedirect && item?.href) {
      openInNewTab(item?.href);
      setMenuItems(DEFAULT);
      onSelected?.();
      return;
    }
    history.push(item.key);
    setMenuItems(DEFAULT);
    onSelected?.();
  };

  return (
    <Space direction="vertical" size={6} className="p-[32px]">
      {menuItems.map((item, index) => (
        <React.Fragment key={index.key}>
          <MenuItem onClick={() => onToggleMenu(index)}>
            <div className="flex flex-row justify-between">
              <Space size={12}>
                {item?.icon && (
                  <Image src={item.icon} className="w-[20px] object-contain" />
                )}
                {item.label}
              </Space>
              &nbsp;
              {item?.children?.length > 0 && (
                <IconArrow
                  active={item?.isExpand}
                  src="/icons/ic-arrow-right.svg"
                  className="w-[18px]"
                />
              )}
            </div>
          </MenuItem>
          {item?.children?.length > 0 && (
            <MenuExpand
              height={item?.children?.length * 42}
              active={item?.isExpand}
            >
              {item?.children?.map((sub) => (
                <MenuItem
                  key={sub.key}
                  onClick={() => onChange(sub)}
                  className="h-[42px] text-hint text-[16px]"
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
