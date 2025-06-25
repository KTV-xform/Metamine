import { Row, Space } from "antd";
import Drawer from "components/Drawer";
import MenuDesktop from "components/MenuDesktop";
import MenuMobile from "components/MenuMobile";
import ContentWrapper from "layouts/ContentWrapper";
import React, { memo, useState, useCallback } from "react";
import { showComingSoon } from "shares/config";
import { useRouter } from "next/router";
import tw, { styled } from "twin.macro";

const MenuButton = styled.button`
  ${tw`p-1 hover:bg-gray-800 rounded transition-colors flex items-center justify-center`}
`;

const MenuIcon = styled.div`
  ${tw`w-5 h-5 flex flex-col justify-center items-center space-y-1`}
  
  .line {
    ${tw`w-4 h-0.5 bg-white bg-opacity-70 transition-all duration-200`}
  }
  
  ${({ active }) => active && `
    .line:nth-child(1) {
      transform: rotate(45deg) translate(2px, 2px);
    }
    .line:nth-child(2) {
      opacity: 0;
    }
    .line:nth-child(3) {
      transform: rotate(-45deg) translate(2px, -2px);
    }
  `}
`;

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [headerHeight] = useState(180);
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleDashboardClick = () => {
    router.push("/dashboard");
  };

  const handleMenuToggle = useCallback(() => {
    setVisible((prevState) => !prevState);
  }, []);

  const handleMenuClose = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <ContentWrapper
      containerCss={[
        tw`justify-center transform duration-500 ease-in-out md:h-[80px] h-[56px] md:px-[14px] px-[8px]`,
      ]}
      contentCss={tw`h-full flex items-center md:py-[0px] py-[0px] md:px-[24px] px-[12px] max-w-[100%]`}
    >
      <img
        className="h-[20px] md:h-[24px] cursor-pointer mr-[20px] md:mr-[50px]"
        src="/images/logo3.png"
        alt=""
        onClick={handleLogoClick}
      />
      <MenuDesktop
        className="hidden md:flex"
        headerHeight={headerHeight}
      />

      <div className="md:flex hidden ml-auto gap-2 md:gap-3">
        <button
          onClick={showComingSoon}
          className="h-[36px] md:h-[40px] border border-line text-white px-[12px] md:px-[16px] hover:scale-110 transition text-sm md:text-base"
        >
          Sign up
        </button>
        {/* <button
          onClick={handleDashboardClick}
          className="h-[36px] md:h-[40px] border border-primary bg-primary text-white px-[12px] md:px-[16px] hover:scale-110 transition text-sm md:text-base"
        >
          Dashboard
        </button> */}
      </div>

      <Space className="md:hidden ml-auto" size="small">
        <button
          onClick={showComingSoon}
          className="h-[32px] md:h-[40px] border border-line text-white px-[8px] md:px-[16px] hover:scale-110 transition text-xs md:text-[14px]"
        >
          Sign up
        </button>
        {/* <button
          onClick={handleDashboardClick}
          className="h-[32px] md:h-[40px] border border-primary bg-primary text-white px-[8px] md:px-[16px] hover:scale-110 transition text-xs md:text-[14px]"
        >
          Dashboard
        </button> */}
        <button 
          onClick={handleMenuToggle}
          className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-5 flex flex-col justify-center items-center space-y-1">
            <div className="w-4 h-0.5 bg-white bg-opacity-70"></div>
            <div className="w-4 h-0.5 bg-white bg-opacity-70"></div>
            <div className="w-4 h-0.5 bg-white bg-opacity-70"></div>
          </div>
        </button>
      </Space>

      <Drawer 
        placement="right" 
        open={visible} 
        onClose={handleMenuClose}
        width="100vw"
        destroyOnClose={true}
        maskClosable={true}
        keyboard={true}
      >
        <div className="flex flex-col h-full bg-black">
          <Row className="w-full justify-between p-[16px] border-b border-gray-800">
            <img
              className="h-[20px] cursor-pointer"
              src="/images/logo3.png"
              alt=""
              onClick={handleLogoClick}
            />
            <MenuButton
              onClick={handleMenuClose}
              aria-label="Close menu"
            >
              <MenuIcon active={true}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </MenuIcon>
            </MenuButton>
          </Row>
          <div className="flex-1 overflow-y-auto">
            <MenuMobile
              className="flex flex-col items-center"
              headerHeight={headerHeight}
              direction="vertical"
              onAfterClick={handleMenuClose}
            />
          </div>
        </div>
      </Drawer>
    </ContentWrapper>
  );
};

export default memo(Header);
