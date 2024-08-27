import React from "react";
import { css, Global } from "@emotion/react";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

import "@rainbow-me/rainbowkit/styles.css";
import "react-toastify/dist/ReactToastify.css";

const customStyles = css`
  body {
    font-family: "Inter", cursive !important;
  }

  a {
    ${tw`hover:text-primary`}
  }

  ${tw`antialiased`}

  div {
    ${tw`!font-base`}
  }

  /* For Webkit-based browsers (Chrome, Safari and Opera) */

  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* For IE, Edge and Firefox */

  .scrollbar-hide {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .ant-popover-inner {
    border-radius: 0 !important;
    padding: 8px 12px !important;
  }

  .toast-success-container {
    color: white !important;
    background: #38d996 !important;
    border: none !important;
    border-radius: 0 !important;
  }

  .toast-error-container {
    color: white !important;
    background: #ec5a5a !important;
    border: none !important;
    border-radius: 0 !important;
  }

  .toast-warn-container {
    color: white !important;
    background: #ffa209 !important;
    border: none !important;
    border-radius: 0 !important;
  }

  .toast-info-container {
    color: white !important;
    background: #007bff !important;
    border: none !important;
    border-radius: 0 !important;
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
