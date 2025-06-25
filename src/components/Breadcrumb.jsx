import React from "react";
import { useRouter } from "next/router";
import { HomeOutlined, RightOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import tw from "twin.macro";

const BreadcrumbContainer = styled.div`
  ${tw`flex items-center space-x-2 text-sm md:text-base mb-4 md:mb-6`}
`;

const BreadcrumbItem = styled.span`
  ${tw`text-gray-400 hover:text-white transition-colors cursor-pointer`}
`;

const BreadcrumbSeparator = styled.span`
  ${tw`text-gray-600`}
`;

const BreadcrumbCurrent = styled.span`
  ${tw`text-white font-medium`}
`;

const getPageTitle = (pathname) => {
  switch (pathname) {
    case "/":
      return "Home";
    case "/about":
      return "About";
    case "/dashboard":
      return "Dashboard";
    case "/upgrade-level":
      return "Upgrade Level";
    case "/contact":
      return "Contact";
    default:
      return "Page";
  }
};

const Breadcrumb = () => {
  const router = useRouter();
  const { pathname } = router;

  if (pathname === "/") return null; // Don't show breadcrumb on home page

  const handleHomeClick = () => {
    router.push("/");
  };

  const currentPageTitle = getPageTitle(pathname);

  return (
    <BreadcrumbContainer>
      <BreadcrumbItem onClick={handleHomeClick}>
        <HomeOutlined className="mr-1" />
        Home
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <RightOutlined />
      </BreadcrumbSeparator>
      <BreadcrumbCurrent>{currentPageTitle}</BreadcrumbCurrent>
    </BreadcrumbContainer>
  );
};

export default Breadcrumb; 