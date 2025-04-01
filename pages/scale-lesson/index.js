import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const springConfig = {
  type: "spring",
  bounce: 0.5,
};

export default function Page() {
  const x = useMotionValue(0);
  const scaleDrag = useTransform(x, [-100, 0, 100], [0.5, 1, 1.5]);
  const borderRadius = useTransform(x, [-100, 0, 100], ["100%", "0%", "50%"]);
  const backgroundColor = useTransform(
    x,
    [-100, 0, 100],
    ["#6d4b7e", "#306a87", "#695a37"]
  );

  const sliderValue = useMotionValue(1);
  const opacity = useTransform(sliderValue, [1, 5], [0, 1]);
  const scale = useSpring(sliderValue, springConfig);

  const onRangeChange = (e) => {
    sliderValue.set(parseFloat(e.target.value));
  };
  return (
    <div className="top-10 flex flex-col items-center justify-center">
      <div className="flex w-full justify-between p-10">
        <div>
          <motion.button
            className="rounded-md bg-black p-10 px-3 py-2 text-white"
            style={{ scale: scale, opacity }}
          >
            Scale
          </motion.button>
        </div>
        <div>
          <input
            type="range"
            min={1}
            max={5}
            step={0.01}
            defaultValue={1}
            onChange={onRangeChange}
          />
        </div>
      </div>

      <motion.div
        drag="x"
        style={{ x, scale: scaleDrag, borderRadius, backgroundColor }}
        // dragConstraints={{ left: 0, right: 0 }}
        className="rounded-md bg-blue-800 px-3 py-2 text-white"
      >
        Drag me
      </motion.div>
    </div>
  );
}
