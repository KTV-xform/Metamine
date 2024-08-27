import React from "react";
import Marqueee from "components/Marquee";

const MARQUEE_DATA = [
  {
    img: "/images/img-marquee-1.png",
    label: "Inference",
  },
  {
    img: "/images/img-marquee-2.png",
    label: "Hyperparameter Tuning",
  },
  {
    img: "/images/img-marquee-3.png",
    label: "Evaluation/Validation",
  },
  {
    img: "/images/img-marquee-4.png",
    label: "Batch Processing",
  },
  {
    img: "/images/img-marquee-5.png",
    label: "Distributed Training",
  },
  {
    img: "/images/img-marquee-6.png",
    label: "Model Testing",
  },
];

const HowItWork = () => {
  const renderMarquee = (i, key) => {
    return (
      <span
        key={key}
        className="overflow-hidden md:rounded-lg rounded-md md:w-[300px] w-[200px] mx-2"
      >
        <img src={i?.img} alt="" />
        <div className="md:p-[12px] p-[8px] bg-[rgba(255,255,255,0.05)] backdrop-blur-md text-center">
          <p className="md:text-[20px] text-[10px] leading-[120%] text-white font-normal">
            {i?.label}
          </p>
        </div>
      </span>
    );
  };

  return (
    <div className="flex flex-col md:gap-[64px] gap-[32px] items-center">
      <span className="text-center flex flex-col gap-[12px] md:max-w-[684px] max-w-[342px]">
        <p className="font-medium md:text-[54px] text-[32px] leading-[100%] text-white">
          How it works?
        </p>
        <p className="md:text-[20px] text-[14px] leading-[120%] text-white font-normal">
          Halcore taps into under-utilized global computing power to power AI
          based modeling at scale.
        </p>
      </span>
      <Marqueee size={32} data={MARQUEE_DATA} renderItem={renderMarquee} />
    </div>
  );
};

export default HowItWork;
