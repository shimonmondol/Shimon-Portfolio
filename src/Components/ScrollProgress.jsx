import { motion, useScroll, useSpring } from "framer-motion";
  // import { useMotionValueEvent } from "framer-motion";
// import { useState } from "react";
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();


// const [percent, setPercent] = useState(0);

// useMotionValueEvent(scrollYProgress, "change", (v) => {
//   setPercent(Math.round(v * 100));
// });


  // Smooth spring animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-teal-400 z-[999]"
    >
        <div className="fixed top-2 right-4 text-xs text-teal-400">
  
</div>
    </motion.div>
  );
};

export default ScrollProgress;
