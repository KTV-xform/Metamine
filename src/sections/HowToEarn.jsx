import React from "react";
import { showComingSoon } from "shares/config";

const HowToEarn = () => {
  return (
    <div className="flex w-screen h-screen flex-col justify-center items-center">
      <p className="text-[16px] md:text-[24px] text-white leading-[100%] font-semibold">
        Share Extra Compute Capacity
      </p>
      <h6 className="text-[28px] md:text-[42px] bg-gradient-to-r from-primary to-[#8AC2FF] text-transparent bg-clip-text font-semibold mt-[8px] md:mt-[14px] text-center">
        Join Halcore
      </h6>
      <button
        onClick={showComingSoon}
        className="h-[52px] w-[217px] text-white hover:bg-primary bg-[url('/images/bg-btn.svg')] bg-[length:auto_52px] bg-no-repeat my-[18px] md:my-[48px] hover:scale-110 transition"
      >
        Install Extension
      </button>
      <div className="flex bg-[rgba(255, 255, 255, 0.05)] max-w-[1200px] w-80 md:w-full md:p-[48px] p-[24px] flex-col items-center justify-center backdrop-blur-md">
        <div className="hidden md:flex flex-row w-[calc(100% / 3 * 2 + 52px * 1.5)] items-center">
          <img src="/icons/ic-profit-0.svg" />
          <div className="flex flex-grow border-[1px] border-b-line h-[1px] w-auto" />
          <img src="/icons/ic-profit-1.svg" />
          <div className="flex flex-grow border-[1px] border-b-line h-[1px] w-auto" />
          <img src="/icons/ic-profit-2.svg" />
        </div>
        <div className="flex flex-row grid md:grid-cols-3 md:grid-rows-1 grid-rows-3 w-full md:mt-[32px] md:gap-[32px] gap-[24px]">
          <div className="text-center font-medium">
            <img
              src="/icons/ic-profit-0.svg"
              className="md:hidden block mx-auto mb-3 w-[42px]"
            />
            <p className="text-white text-[14px] md:text-[16px]">
              Install Halcore Extension
            </p>
            <span className="text-hint text-[10px] md:text-[12px] md:mt-[12px] mt-[8px]">
              Install your device and connect to the internet
            </span>
          </div>
          <div className="text-center font-medium">
            <img
              src="/icons/ic-profit-1.svg"
              className="md:hidden block mx-auto mb-3 w-[42px]"
            />
            <p className="text-white text-[14px] md:text-[16px]">
              Sign up and Login
            </p>
            <span className="text-hint text-[10px] md:text-[12px] md:mt-[12px] mt-[8px]">
              Install your device and connect to the internet
            </span>
          </div>
          <div className="text-center font-medium">
            <img
              src="/icons/ic-profit-2.svg"
              className="md:hidden block mx-auto mb-3 w-[42px]"
            />
            <p className="text-white text-[14px] md:text-[16px]">
              Share and Earning
            </p>
            <span className="text-hint text-[10px] md:text-[12px] md:mt-[12px] mt-[8px]">
              Install your device and connect to the internet
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToEarn;
