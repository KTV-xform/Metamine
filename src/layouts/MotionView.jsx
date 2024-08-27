import { motion, useAnimationControls } from "framer-motion";
import React, { useEffect } from "react";
import { memo } from "react";
import { useInView } from "react-intersection-observer";

const MotionView = ({ children, id, activeSection, horizontal = false }) => {
  const controls = useAnimationControls();
  const [ref, inView] = useInView();
  const isUp = id < activeSection && inView;

  useEffect(() => {
    if (inView) {
      controls.start({
        [!horizontal ? "y" : "x"]: !isUp ? "0%" : "-50%",
        opacity: !isUp ? 1 : 0,
        transition: { duration: 0.75 },
      });
    }
  }, [controls, inView, isUp, horizontal]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{
        [!horizontal ? "y" : "x"]: !isUp ? "50%" : "0%",
        opacity: !isUp ? 0 : 1,
      }}
      transition={{ type: "spring" }}
    >
      {children}
    </motion.div>
  );
};

export default memo(MotionView);
