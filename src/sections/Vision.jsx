import { Grid } from "antd";
import React from "react";

const Vision = () => {
  const { md } = Grid.useBreakpoint();
  return (
    <div className="flex w-screen h-screen flex-col justify-center items-center">
      <p className="text-[24px] md:text-[32px] text-white leading-[120%] font-semibold text-center md:w-full w-75">
        Support global AI modelling by contributing extra compute resources
        locally
      </p>
      {md ? (
        <img src="/images/banner.png" className="max-w-[1200px] mt-[60px]" />
      ) : (
        <img src="/images/banner-sm.png" className="w-80 mt-[30px]" />
      )}
    </div>
  );
};

export default Vision;
