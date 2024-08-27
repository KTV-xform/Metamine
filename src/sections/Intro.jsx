import React from "react";
import { showComingSoon } from "shares/config";

const Intro = () => {
  return (
    <div className="flex w-screen h-screen flex-col justify-center items-center">
      <p className="text-[14px] md:text-[20px] text-hint leading-[100%]">
        Global Distributed Training Network
      </p>
      <h1 className="text-white text-[30px] md:text-[54px] font-medium mt-[12px] md:mt-[16px] text-center">
        Halcore Compute Network
      </h1>
      <p className="text-white text-[12px] md:text-[20px] text-center w-[80%] md:w-[700px]">
        Halcore is built to scale native AI inference on-chain with security and
        decentralization in mind.
      </p>
      <button
        onClick={showComingSoon}
        className="h-[52px] w-[217px] text-white hover:bg-primary bg-[url('/images/bg-btn.svg')] bg-[length:auto_52px] bg-no-repeat my-[24px] md:my-[48px] hover:scale-110 transition"
      >
        Install Extension
      </button>
      <div className="flex flex-row gap-8">
        <div className="flex flex-row gap-2">
          <img src="/icons/ic-chrome.svg" className="md:w-[20px] w-[16px]" />
          <span className="text-[16px] md:text-[20px] text-hint">
            Available
          </span>
        </div>
        <div className="flex flex-row gap-2">
          <img src="/icons/ic-appstore.svg" className="md:w-[20px] w-[16px]" />
          <img src="/icons/ic-chplay.svg" className="md:w-[20px] w-[16px]" />
          <span className="text-[16px] md:text-[20px] text-hint">
            Coming Soon
          </span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
