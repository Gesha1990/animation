import { motion } from "framer-motion";
import { useState } from "react";

const Skeleton = () => {
  return (
    <>
      <div className="mb-4 aspect-video  w-full rounded-2xl bg-gray-300" />
      <div className="mb-2 h-[40px] w-[90%] rounded-2xl bg-gray-300" />
      <div className="mb-2 h-[20px] w-[80%] rounded-2xl bg-gray-300" />
      <div className="mb-2 h-[20px] w-[80%] rounded-2xl bg-gray-300" />
      <div className="mb-2 h-[20px] w-[80%] rounded-2xl bg-gray-300" />
      <div className="mb-12 flex gap-3">
        <div className="h-[20px] w-[30%] rounded-2xl bg-gray-300" />
        <div className="h-[20px] w-[30%] rounded-2xl bg-gray-300" />
      </div>
    </>
  );
};
export default function Page() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="min-h-screen w-full bg-black">
      <button
        onClick={() => setIsOpened((isOpen) => !isOpen)}
        className="relative top-3 left-1/2 m-5 rounded-full bg-blue-500 px-8 py-2"
      >
        {isOpened ? "Close" : "Open"}
      </button>
      <motion.div
        animate={isOpened ? "open" : "closed"}
        variants={{
          open: {
            opacity: 1,
            "--x": "0%",
            "--y": "0%",
          },
          closed: {
            opacity: 0,
            "--x": "-100%",
            "--y": "100%",
          },
        }}
        transition={{
          duration: 0.3,
        }}
        initial="closed"
        className="m-auto mt-5   max-h-[90%] w-[90%] bg-white p-10 max-sm:translate-y-[var(--y)] md:translate-x-[var(--x)]"
      >
        <Skeleton />
      </motion.div>
    </div>
  );
}
