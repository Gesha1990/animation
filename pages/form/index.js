import { PaperAirplaneIcon } from "@heroicons/react/outline";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function Page() {
  const [sent, setSent] = useState(false);
  // offset:["{target} {container}", "{target} {container}"]

  return (
    <div className="grid h-screen place-items-center bg-gray-300">
      <div className="w-full max-w-[600px] rounded-2xl bg-black p-2">
        <form className="relative flex items-center">
          <input
            className="bg-white-opaque h-[50px] w-[80%] rounded-full px-5 py-2"
            placeholder="Email"
          />
          <motion.button
            layout
            type="button"
            style={{
              borderRadius: 999,
              backgroundColor: sent ? "#8aca65" : "#ffff",
              color: sent ? "#fff" : "#000",
              width: sent ? "100%" : "100px",
            }}
            onClick={() => setSent(!sent)}
            className="absolute right-0  flex items-center justify-center bg-white"
          >
            <motion.span layout className="block">
              <PaperAirplaneIcon className=" h-[50px] w-[50px] rotate-90" />
            </motion.span>
            {sent && (
              <motion.span
                initial={{ opacity: 0, x: "50%" }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.3 },
                }}
                className="ml-2 font-medium text-white"
              >
                Sent!
              </motion.span>
            )}
          </motion.button>
        </form>
      </div>
    </div>
  );
}
