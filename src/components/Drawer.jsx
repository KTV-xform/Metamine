import { Drawer } from "antd";
import tw, { styled } from "twin.macro";

const StyleDrawer = styled(Drawer)`
  height: 100%;

  .ant-drawer-wrapper-body {
    ${tw`bg-[#171D24]`}
  }

  .ant-drawer-content {
    ${tw`bg-background`}
  }

  .ant-drawer-header,
  .ant-drawer-mask {
    ${tw`hidden`}
  }

  .ant-drawer-body {
    ${tw`p-0`}
  }
`;

export default StyleDrawer;
