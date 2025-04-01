import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cardsInViewVariants = {
  inView: {
    scale: 1,
    opacity: 1,
  },
  outOfView: {
    scale: 0.8,
    opacity: 0,
  },
};
const transitionVariants = {
  inView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  outOfView: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};
const FadeIn = ({ children, className, variants }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.8, 1],
    [0, 1, 1, 0]
  );
  return (
    <motion.div ref={ref} className={className} style={{ opacity }}>
      {children}
    </motion.div>
  );
};
const Card = ({ title, subTitle, url }) => {
  return (
    <div
      key={url}
      className="relative h-[100%] w-[100%]"
      // className={`bg-[url('/images/${url}')] bg-cover`}
    >
      <img
        src={`/images/${url}`}
        className="h-[100%] w-[100%] rounded-lg object-cover"
      />
      <div className="absolute top-5 left-[20%]">
        <div className="text-center">{title}</div>
        <div className="text-center">{subTitle}</div>
      </div>
    </div>
  );
};
const GridOne = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  return (
    <motion.div
      animate={isInView ? "inView" : "outOfView"}
      variants={transitionVariants}
      ref={ref}
      className="grid-template-columns: repeat(2, minmax(0,	1fr)) relative mt-[800px] mb-5 grid h-[400px] w-full max-w-[500px] grid-cols-2 gap-1 sm:h-[500px]"
    >
      <motion.div variants={cardsInViewVariants} className="row-span-2">
        <Card title="Image 1" subTitle="Some description 1..." url="1.jpeg" />
      </motion.div>
      <motion.div variants={cardsInViewVariants}>
        <Card title="Image 2" subTitle="Some description 2..." url="2.jpeg" />
      </motion.div>
      <motion.div variants={cardsInViewVariants}>
        <Card title="Image 3" subTitle="Some description 3..." url="3.jpeg" />
      </motion.div>
    </motion.div>
  );
};
const GridTwo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  return (
    <motion.div
      animate={isInView ? "inView" : "outOfView"}
      variants={transitionVariants}
      ref={ref}
      className="grid-template-columns: repeat(2, minmax(0, 1fr))	relative mb-[100px] mt-[800px] grid h-[400px] w-full max-w-[500px] grid-cols-2 gap-1 sm:h-[600px]"
    >
      <FadeIn variants={cardsInViewVariants} className="row-span-2">
        <Card title="Image 1" subTitle="Some description 1..." url="1.jpeg" />
      </FadeIn>
      <FadeIn variants={cardsInViewVariants}>
        <Card title="Image 2" subTitle="Some description 2..." url="2.jpeg" />
      </FadeIn>
      <FadeIn variants={cardsInViewVariants}>
        <Card title="Image 3" subTitle="Some description 3..." url="3.jpeg" />
      </FadeIn>
    </motion.div>
  );
};
export default function Page() {
  return (
    <>
      <div className="h-screen text-white">
        <div className="flex w-full flex-col items-center justify-center px-8 py-4">
          <GridOne />
          <GridTwo />
        </div>
      </div>
    </>
  );
}
