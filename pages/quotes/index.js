import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { useState } from "react";

let images = [
  {
    img: "/images/1.jpeg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, fuga?",
  },
  {
    img: "/images/2.jpeg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aut",
  },
  {
    img: "/images/3.jpeg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, obcaecati.",
  },
  {
    img: "/images/4.jpeg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, atque.",
  },
  {
    img: "/images/5.jpeg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, corrupti!",
  },
  {
    img: "/images/6.jpeg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, libero!",
  },
];

export default function Page() {
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);
  const lastQuoteIndex = images.length - 1;

  const next = () => {
    setActiveQuoteIndex((currentQuote) => {
      return currentQuote >= lastQuoteIndex ? 0 : currentQuote + 1;
    });
  };
  const previous = () => {
    setActiveQuoteIndex((currentQuote) => {
      return currentQuote === 0 ? lastQuoteIndex : currentQuote - 1;
    });
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <motion.div
        animate={`quote_${activeQuoteIndex}`}
        whileHover={["paused", `quote_${activeQuoteIndex}_highlighted`]}
        initial="inactive"
        className="flex flex-col rounded bg-white"
      >
        <div className="flex">
          <motion.button
            onClick={previous}
            variants={{
              inactive: { opacity: 0, y: 20 },
              paused: { opacity: 1, y: 0 },
            }}
            className="relative top-20  h-10 w-10 cursor-pointer"
          >
            <ChevronLeftIcon />
          </motion.button>
          {images.map(({ img }, index) => {
            return (
              <>
                <motion.img
                  variants={{
                    paused: {
                      scale: 0.9,
                      filter: "grayscale(1)",
                    },
                    [`quote_${index}_highlighted`]: {
                      scale: 1.3,
                      opacity: 1,
                      filter: "grayscale(0)",
                    },
                  }}
                  style={{
                    height: "70px",
                    width: "70px",
                    marginLeft: "-10px",
                    borderRadius: "100px",
                  }}
                  transition={{
                    type: "spring",
                    bounce: 0.5,
                  }}
                  src={img}
                  key={index}
                ></motion.img>
              </>
            );
          })}
          <motion.button
            onClick={next}
            variants={{
              inactive: { opacity: 0, y: 20 },
              paused: { opacity: 1, y: 0 },
            }}
            className="relative top-20  h-10 w-10 cursor-pointer"
          >
            <ChevronRightIcon />
          </motion.button>
        </div>
        <div className="mt-3 grid text-center">
          {images.map(({ text }, index) => {
            return (
              <motion.blockquote
                index={index}
                initial={{ y: 20, opacity: 0 }}
                variants={{
                  inactive: { opacity: 0, y: 20 },
                  [`quote_${index}`]: { opacity: 1, y: 0 },
                }}
                transition={{ ease: "easeInOut" }}
                className="m-auto max-w-xs pt-10 [grid-area:1/1]"
              >
                {text}
              </motion.blockquote>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
