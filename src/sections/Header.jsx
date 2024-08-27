import { Row, Space } from "antd";
import Drawer from "components/Drawer";
import MenuDesktop from "components/MenuDesktop";
import MenuMobile from "components/MenuMobile";
import ContentWrapper from "layouts/ContentWrapper";
import React, { memo, useState } from "react";
import { showComingSoon } from "shares/config";
import tw from "twin.macro";

const Header = ({ pathname }) => {
  const [visible, setVisible] = useState(false);
  const [headerHeight] = useState(180);

  return (
    <ContentWrapper
      containerCss={[
        tw`justify-center transform duration-500 ease-in-out md:h-[80px] h-[48px] md:px-[14px]`,
      ]}
      contentCss={tw`h-full flex items-center md:py-[0px] py-[0px] md:px-[24px] px-[16px] max-w-[100%]`}
    >
      <img
        className="h-[16px] md:h-[24px] cursor-pointer mr-[50px]"
        src="/images/logo.png"
        alt=""
      />
      <MenuDesktop
        className="hidden md:flex"
        headerHeight={headerHeight}
        pathname={pathname}
      />

      <div className="md:flex hidden ml-auto gap-3">
        <button
          onClick={showComingSoon}
          className="h-[40px] border border-line text-white px-[16px] hover:scale-110 transition"
        >
          Sign up
        </button>
        <button
          onClick={showComingSoon}
          className="h-[40px] border border-primary bg-primary text-white px-[16px] hover:scale-110 transition"
        >
          Dashboard
        </button>
      </div>

      <Space className="md:hidden ml-auto">
        <button
          onClick={showComingSoon}
          className="md:h-[40px] h-[28px] border border-line text-white md:px-[16px] px-[6px] hover:scale-110 transition md:text-[14px] text-[12px]"
        >
          Sign up
        </button>
        <button
          onClick={showComingSoon}
          className="md:h-[40px] h-[28px] border border-primary bg-primary text-white md:px-[16px] px-[6px] hover:scale-110 transition md:text-[14px] text-[12px]"
        >
          Dashboard
        </button>
        <button onClick={() => setVisible((prevState) => !prevState)}>
          <img src="/icons/ic-menu.svg" className="" alt="" />
        </button>
      </Space>

      <Drawer placement="right" open={visible} width="100vw">
        <div className="flex flex-col h-[100vh]">
          <Row className="w-full justify-between p-[16px]">
            <img
              className="h-[16px] cursor-pointer"
              src="/images/logo.png"
              alt=""
            />
            <button
              onClick={() => setVisible((prevState) => !prevState)}
              className="md:hidden block"
            >
              <img src={"/icons/ic-close.svg"} alt="" />
            </button>
          </Row>
          <MenuMobile
            className="flex flex-col items-center"
            headerHeight={headerHeight}
            pathname={pathname}
            direction="vertical"
            onAfterClick={() => setVisible(false)}
          />
        </div>
      </Drawer>
    </ContentWrapper>
  );
};

export default memo(Header);
