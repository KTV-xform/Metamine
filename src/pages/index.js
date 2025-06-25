import React, { Suspense, useEffect, useRef, useState } from "react";
import MotionView from "layouts/MotionView";
import LoadingOverlay from "react-loading-overlay";
import styled from "@emotion/styled";
import tw from "twin.macro";
import Intro from "sections/Intro";
import Vision from "sections/Vision";
import HowToEarn from "sections/HowToEarn";
import HowItWork from "sections/HowItWork";
import Header from "sections/Header";
import Layout from "components/Layout";
import { Affix } from "antd";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const StyledLoader = styled(LoadingOverlay)`
  ${tw`fixed top-0 left-0 bottom-0 right-0 z-[1200] h-screen`}
  pointer-events: none;

  .MyLoader_overlay {
    background: rgba(0, 0, 0, 1);
  }

  &.MyLoader_wrapper--active {
    overflow: hidden;
  }
`;

const InfinityLoadingBar = styled.div`
  width: 300px;
  margin: 0 auto;
  border-radius: 0px;
  border: 0px solid transparent;
  position: relative;
  padding: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  height: 10px;
  border-radius: 5px;

  ${tw`my-[32px]`} & .bar {
    position: absolute;
    border-radius: 10px;
    top: 0;
    right: 100%;
    bottom: 0;
    left: 0;
    background: #007bff;
    width: 0;
    height: 10px;
    animation: borealisBar 1.5s linear infinite;
  }

  @keyframes borealisBar {
    0% {
      left: 0%;
      right: 100%;
      width: 0%;
    }
    10% {
      left: 0%;
      right: 75%;
      width: 25%;
    }
    90% {
      right: 0%;
      left: 75%;
      width: 25%;
    }
    100% {
      left: 100%;
      right: 0%;
      width: 0%;
    }
  }
`;

const ProgressLoading = () => {
  return (
    <div className="flex items-center">
      <img src="/images/logo3.png" />
      <InfinityLoadingBar>
        <div className="bar" />
      </InfinityLoadingBar>
    </div>
  );
};

const sections = {
  1: Intro,
  2: Vision,
  3: HowToEarn,
  4: HowItWork,
};

function useIntersectionObserver(callback, options) {
  const targetRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (!targetRef.current) return;

    observerRef.current = new IntersectionObserver(callback, options);
    observerRef.current.observe(targetRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [callback, options]);

  return targetRef;
}

export default function App() {
  const splineRef = useRef(null);
  const ref = useRef(null);

  const [activeSection, setActiveSection] = useState(1);
  const [isLoading, setLoading] = useState(true);

  const handleLoad = (spline) => {
    splineRef.current = spline;
    setTimeout(() => setLoading(false), 1000);
  };

  useEffect(() => {
    switch (activeSection) {
      case 1: {
        splineRef.current?.emitEvent(
          "mouseDown",
          "efb93347-ef1c-44e5-9a41-b42ff73b1636"
        );
        break;
      }
      case 2: {
        splineRef.current?.emitEvent(
          "mouseDown",
          "c8ae3bae-ebb0-4824-940d-1b6058224868"
        );
        break;
      }
      case 3: {
        splineRef.current?.emitEvent(
          "mouseDown",
          "efb93347-ef1c-44e5-9a41-b42ff73b1636"
        );
        break;
      }
      case 4: {
        splineRef.current?.emitEvent(
          "mouseDown",
          "d08d2589-8959-4b91-9f32-b317847669c4"
        );
        break;
      }
      default: {
        splineRef.current?.emitEvent(
          "mouseDown",
          "c8ae3bae-ebb0-4824-940d-1b6058224868"
        );
        break;
      }
    }
  }, [activeSection]);

  return (
    <Layout showHeader={false}>
      <div className="relative bg-black" ref={ref}>
        <Affix offsetTop={0} className="absolute top-0 right-0 z-10 w-full">
          <Header />
        </Affix>
        <SectionStep current={activeSection} />
        <div className="fixed z-0">
          <Suspense
            fallback={
              <div className="w-screen h-screen bg-black flex justify-center items-center">
                <p className="text-white">Loading...</p>
              </div>
            }
          >
            <Spline
              style={{
                height: "100vh",
                width: "100vw",
              }}
              onLoad={handleLoad}
              scene="https://prod.spline.design/H6wQ-q-C-XZxlbr3/scene.splinecode"
              // scene="/scene.splinecode.json"
            />
          </Suspense>
        </div>
        <div className="overflow-hidden fixed snap-y snap-mandatory overflow-y-scroll w-screen h-screen scrollbar-hide">
          {[...Array(4)].map((_, index) => (
            <Section
              key={index}
              id={index + 1}
              setActiveSection={setActiveSection}
              activeSection={activeSection}
            />
          ))}
        </div>
        <StyledLoader
          active={isLoading}
          spinner={<ProgressLoading />}
          classNamePrefix="MyLoader_"
        />
      </div>
    </Layout>
  );
}

const Section = ({ id, setActiveSection, activeSection }) => {
  const sectionRef = useRef(null);

  const targetRef = useIntersectionObserver(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setActiveSection(id);
      }
    },
    { threshold: 0.5 }
  );

  const Component = sections[id];

  return (
    <section
      ref={sectionRef}
      className="w-screen h-screen snap-always snap-center p-2"
    >
      <MotionView
        id={id}
        activeSection={activeSection}
        horizontal={[6, 7].includes(id)}
      >
        <div
          id={id}
          ref={targetRef}
          style={{ height: "100vh" }}
          className="flex justify-center items-center"
        >
          {sections[id] && <Component />}
        </div>
      </MotionView>
    </section>
  );
};

const Dot = styled.div`
  border: 1px solid #5baaff;
  ${tw`w-[14px] h-[14px] rounded-full`};
  ${({ active }) => active && tw`bg-primary`}
`;

const SectionStep = ({ current = 1 }) => {
  return (
    <div className="fixed top-[25vh] left-[24px] z-10 md:block hidden">
      <div className="flex flex-row justify-conter items-center gap-3">
        <Dot active={current >= 1} />
        <span className="text-white">Intro</span>
      </div>
      <div className="w-[1px] h-[24px] bg-line ml-[7px]" />
      <div className="flex flex-row justify-conter items-center gap-3">
        <Dot active={current >= 2} />
        <span className="text-white">Vision</span>
      </div>
      <div className="w-[1px] h-[24px] bg-line ml-[7px]" />
      <div className="flex flex-row justify-conter items-center gap-3">
        <Dot active={current >= 3} />
        <span className="text-white">How to earn</span>
      </div>
      <div className="w-[1px] h-[24px] bg-line ml-[7px]" />
      <div className="flex flex-row justify-conter items-center gap-3">
        <Dot active={current >= 4} />
        <span className="text-white">How it work</span>
      </div>
    </div>
  );
};
