import useSound from "use-sound";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { amount: 0.9 });
  const [play, { stop }] = useSound("/sounds/camera-13695.mp3");
  useEffect(() => {
    stop();
    if (isInView) {
      play();
    }
  }, [isInView]);
  return (
    <div className="mx-auto max-w-[640px] py-8 px-8">
      <div className="-rotate-3 bg-gradient-to-br from-slate-300 p-5">
        <p className="text-rxl mb-4 font-bold leading-[1.1]">
          That beautiful cabin on that idyllic lake..
        </p>
        <p className="mb-3 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit
          cupiditate earum eos itaque nostrum beatae minima molestias. Unde
          dolore natus explicabo obcaecati, et magnam. Reprehenderit, vitae illo
          vel maiores odit nam. Ut cum aliquid unde autem repellat laborum
          maxime inventore deleniti molestias eligendi possimus sit, a placeat
          sequi cumque reprehenderit dolore. Soluta sit maiores iure libero?
          Provident aperiam quod, corporis odit qui deserunt laboriosam illum
          quis, nulla cumque asperiores. Praesentium corrupti, sit quod minima
          asperiores incidunt nulla obcaecati dolore vero minus amet id
          consequatur sapiente odit assumenda ipsam perspiciatis, vel eaque
          consectetur fugiat vitae blanditiis non. Quasi, non inventore?
        </p>
        <p className="mb-3 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          perferendis dicta neque? Obcaecati, natus voluptatem! Facilis
          accusamus repellat asperiores tempora perferendis, placeat doloremque
          possimus suscipit quisquam? Temporibus, repudiandae nihil rem odio
          officiis architecto debitis soluta nulla sed hic fugiat deserunt
          cupiditate aliquid eaque dolorum. Magni nisi eius error veniam
          voluptas numquam atque, delectus consequuntur voluptatem, sint
          suscipit ratione culpa reprehenderit amet maiores neque quam repellat
          quo aperiam earum eveniet? Minima sint, alias obcaecati excepturi
          impedit praesentium, eveniet optio animi odit quo cumque, facere
          veritatis cum qui magni quam. Quo dolorem rem omnis laudantium illo
          quod quam velit neque obcaecati sit.
        </p>
        <p className="mb-3 mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
          nesciunt facilis culpa mollitia reprehenderit ratione tempora minus
          soluta, doloremque asperiores labore vero dolorum quibusdam aut
          similique magnam ut quod, sint perferendis voluptate, veniam quia
          dolorem alias quisquam! Asperiores qui, adipisci facilis quaerat ullam
          placeat assumenda, nostrum, quos neque atque consequuntur laudantium
          debitis nihil odio suscipit? Asperiores dolore incidunt repudiandae
          adipisci ipsa magnam temporibus ad consequatur ipsam cum, quas soluta
          architecto itaque quo quam rem quidem? Qui fuga iure facilis velit
          nostrum dolores pariatur vero, magnam quibusdam mollitia, nulla cumque
          maxime debitis corrupti ut distinctio ducimus quos, officiis aliquam!
          Iste, dicta?
        </p>
      </div>
      <motion.img
        variants={{
          hidden: {
            opacity: 0,
            rotate: "0deg",
            scale: 0.9,
          },
          visible: {
            rotate: "5deg",
            opacity: 1,
            scale: 1,
          },
        }}
        animate={isInView ? "visible" : "hidden"}
        ref={imageRef}
        className="relative z-10 w-[80%] border-8 border-white"
        src="/images/1.jpeg"
      />
    </div>
  );
}
