import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Page() {
  const ref = useRef(null);
  // offset:["{target} {container}", "{target} {container}"]
  const { scrollYProgress } = useScroll(ref, ["start center", "end end"]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className="border-white-opaque text-white">
      <div className="min-h-[100vh] text-center text-2xl">
        Scroll this examples
      </div>
      <div
        ref={ref}
        className="grid h-[800px] grid-cols-2 bg-gray-500 text-black"
      >
        <motion.div
          style={{ x }}
          className="sticky top-1/2 h-fit  translate-y-1/2  rounded-2xl bg-blue-400 p-3"
        >
          Sticky div
        </motion.div>
        <div className="h-fit rounded-2xl bg-blue-400  p-3">Not so sticky</div>
      </div>
      <div className="h-screen">
        Some content after, that is taller than our scrollable section
      </div>
    </div>
  );
}
