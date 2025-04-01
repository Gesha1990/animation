import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const springConfig = {
  type: "spring",
  bounce: 0.5,
};

export default function Page() {
  const [isVisible, setVisible] = useState(true);
  return (
    <div className="top-10 flex flex-col items-center justify-center">
      <motion.button
        className="bg-black text-white"
        onClick={() => {
          setVisible((prev) => !prev);
        }}
      >
        Toggle visibility
      </motion.button>
      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
            variants={{
              open: {
                opacity: 1,
                y: 0,
              },

              close: {
                opacity: 0,
                y: 20,
              },
            }}
            initial="close"
            animate="open"
            // initial={{ opacity: 0, scale: 0 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{
            //   ease: "backInOut",
            //   duration: 2,
            // }}
            className="h-1/2  w-1/2  rounded-2xl"
            // exit={{ opacity: 0, scale: 0 }}
            exit="close"
          >
            <div className="my-4 mb-3 aspect-video w-full rounded-xl bg-slate-400">
              Random cart
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
