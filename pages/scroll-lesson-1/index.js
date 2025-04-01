import { motion } from "framer-motion";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";
const PlaceHolder = () => (
  <div className="aspect-video w-[600px] rounded-lg bg-slate-300"></div>
);
export default function Page() {
  const ref = useRef(null);
  // offset:["{target} {container}", "{target} {container}"]
  const { scrollYProgress } = useScroll({
    target: ref,

    offset: ["end end", "end start"],
  });
  const [y, setY] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (y) => setY(y.toFixed(2)));
  // const { scrollYProgress, scrollXProgress, scrollY, scrollX } = useScroll();
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  // const [xProgress, setXProgress] = useState(0);
  // const [yProgress, setYProgress] = useState(0);
  // useMotionValueEvent(scrollX, "change", (x) => setX(x));
  // useMotionValueEvent(scrollY, "change", (y) => setX(y));
  // useMotionValueEvent(scrollXProgress, "change", (xp) => setXProgress(xp));
  // useMotionValueEvent(scrollYProgress, "change", (yp) => setYProgress(yp));
  return (
    <main className="flex h-[3000px]  flex-col items-center justify-center text-2xl text-white">
      <motion.div
        className="fixed top-0 h-3 w-full origin-left bg-cyan-400"
        style={{ scaleX: y }}
      ></motion.div>
      <div className="fixed top-0 mt-3 text-black">{y}</div>

      <div
        ref={ref}
        className="mt-[110vh] h-[50vh] w-1/2 rounded-2xl bg-gray-300"
      ></div>
    </main>
  );
}
