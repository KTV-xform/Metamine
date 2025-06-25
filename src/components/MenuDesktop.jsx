import React from "react";
import { Space } from "antd";
import { openInNewTab } from "shares/helpers";
import { MENU_ITEMS } from "shares/menu";
import tw, { styled } from "twin.macro";
import { useRouter } from "next/router";
import { showComingSoon } from "shares/config";

const MenuItem = styled(Space)`
  .menu-item-label {
    ${tw`cursor-pointer text-sm lg:text-base`}
    ${({ active }) => (active ? tw`text-white` : tw`text-hint`)}
  }

  .menu-item-arrow {
    opacity: 0.6;
    transition: all 0.4s ease;
    transform: rotateZ(0deg);
  }

  .menu-item-dropdown {
    visibility: hidden;
    opacity: 0;
    transition: all 0.4s ease;
  }

  &:hover {
    .menu-item-label {
      ${tw`text-white`}
    }

    .menu-item-arrow {
      opacity: 1;
      transform: rotateZ(-180deg);
    }

    .menu-item-dropdown {
      visibility: visible;
      opacity: 1;
      transition: all 0.4s ease;
    }
  }
`;

const SubMenuItem = styled.li`
  ${tw`cursor-pointer h-[42px] hover:bg-primary flex flex-row items-center px-[16px]`}
`;

const MenuDesktop = () => {
  const router = useRouter();

  const onChange = (item) => {
    if (!item?.key || item?.children?.length > 0) return;
    if (item?.isComingSoon) {
      showComingSoon();
      return;
    }
    if (item?.isRedirect && item?.href) {
      openInNewTab(item?.href);
      return;
    }
    router.push(item?.key);
  };

  return (
    <nav className="lg:gap-[32px] md:gap-[20px] lg:gap-[26px] md:flex hidden">
      {MENU_ITEMS.map((item, i) => {
        if (item?.hideDesktop) return null;
        return (
          <MenuItem
            key={i}
            active={router?.pathname === item.key}
            className="relative z-0!"
            size={4}
          >
            <div
              onClick={() => onChange(item)}
              className="menu-item-label relative"
            >
              {item.label}
              {item?.badge && (
                <span className="absolute bg-red-500 text-white lg:text-[8px] md:text-[6px] leading-[100%] p-[2px 3px] rounded-[6px]">
                  {item?.badge}
                </span>
              )}
            </div>
            {item?.children?.length > 0 && (
              <img
                src="/icons/ic-arrow-down.svg"
                className="w-[8px] md:w-[10px] menu-item-arrow"
              />
            )}
            {item?.children?.length > 0 && (
              <ul
                className="absolute top-[32px] left-0 w-[200px] md:w-[240px] menu-item-dropdown bg-[#171D24]
               p-[6px] z-10!"
              >
                {item?.children?.map((sub, index) => (
                  <SubMenuItem
                    key={`SUB_MENU_${index}`}
                    onClick={() => onChange(sub)}
                  >
                    <Space size={12} className="text-white text-sm md:text-[14px]">
                      {sub?.icon && (
                        <img
                          src={sub.icon}
                          className="lg:w-[16px] md:w-[14px] object-contain"
                        />
                      )}
                      {sub.label}
                    </Space>
                  </SubMenuItem>
                ))}
              </ul>
            )}
          </MenuItem>
        );
      })}
    </nav>
  );
};

export default MenuDesktop;
