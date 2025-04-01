import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Image = ({ url }) => {
  return <img src={url} className="h-[70px] w-[70px] rounded-full" />;
};
export default function Page() {
  const ref = useRef(null);
  // offset:["{target} {container}", "{target} {container}"]
  const { scrollYProgress } = useScroll(ref, ["start center", "end end"]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);
  const xRow1 = useTransform(scrollYProgress, [0.15, 0.83], [0, -400]);
  const xRow2 = useTransform(scrollYProgress, [0.15, 0.83], [0, 400]);
  const xRow3 = useTransform(scrollYProgress, [0.15, 0.83], [0, -400]);
  const opacity = useTransform(scrollYProgress, [0.71, 0.9], [1, 0]);
  return (
    <>
      <div className="h-screen">
        <div ref={ref} className="h-[300vh]">
          <div className="sticky top-1/2 -translate-y-1/2 overflow-hidden text-[60px]">
            <motion.div
              style={{ scale, x: xRow1, opacity }}
              className="flex items-center justify-center gap-6"
            >
              <p>HTML</p>
              <Image url="/images/1.jpeg" />
              <p>CSS</p>
              <Image url="/images/2.jpeg" />
              <p>JavaScript</p>
              <Image url="/images/3.jpeg" />
              <p>TypeScript</p>
              <Image url="/images/4.jpeg" />
              <p>Node.js</p>
              <Image url="/images/5.jpeg" />
              <p>WebPack</p>
              <Image url="/images/6.jpeg" />
            </motion.div>
            <motion.div
              style={{ scale, x: xRow2, opacity }}
              className="flex items-center justify-center gap-6"
            >
              <p>View</p>
              <Image url="/images/5.jpeg" />
              <p>React</p>
              <Image url="/images/6.jpeg" />
              <p>Angular</p>
              <Image url="/images/1.jpeg" />
              <p>Next.js</p>
              <Image url="/images/2.jpeg" />
              <p>Nest.js</p>
              <Image url="/images/3.jpeg" />
              <p>Express</p>
              <Image url="/images/4.jpeg" />
            </motion.div>
            <motion.div
              style={{ scale, x: xRow3, opacity }}
              className="flex items-center justify-center gap-6"
            >
              <p>Performance</p>
              <Image url="/images/3.jpeg" />
              <p>SEO</p>
              <Image url="/images/4.jpeg" />
              <p>Semantics</p>
              <Image url="/images/5.jpeg" />
              <p>Accessibility</p>
              <Image url="/images/6.jpeg" />
              <p>Scalability</p>
              <Image url="/images/1.jpeg" />
              <p>Speed</p>
              <Image url="/images/2.jpeg" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
