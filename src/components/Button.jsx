import {Button as AntdButton} from "antd";
import React, {memo} from "react";
import tw, {css, styled} from "twin.macro";

const StyleButton = styled(AntdButton)`
  ${tw`!font-base`}
  .ant-btn-loading-icon {
    display: inline-block;
  }

  &:disabled {
    ${tw`!text-[#FFFFFF80] !bg-[#808191] hover:bg-[#808191]!`}
  }

  &:hover,
  &:focus,
  & {
    span {
      ${tw`!font-base`}
    }

    ${tw`hover:bg-transparent!`}
    ${({size}) => css`
      ${size === 'large' && tw`!h-[56px] !px-[20px] !text-[16px]`}
      ${size === 'medium' && tw`!h-[46px] !px-[20px] !text-[12px]`}
      ${size === 'small' && tw`!h-[32px] !text-[10px]`}
    `}
    ${({type}) => css`
      ${tw`border-none !rounded-none !text-secondary bg-no-repeat`}

      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center;

      ${type === 'primary' && css`background-image: url('/images/bg-btn.png');`}
      ${type === 'secondary' && css`background-image: url('/images/bg-btn-secondary.png');`}
      ${type === 'outline' && css`background-image: url('/images/bg-btn-outline.png');`}
      
      &:disabled {
        background-image: url("/images/bg-btn-disabled.png");
        color: #6F6F6F !important;
        background-color: transparent !important;
      `}
  }
`;

const Button = (props) => {
  return <StyleButton {...props} />;
};

export default memo(Button);
