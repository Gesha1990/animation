import { motion } from "framer-motion";
import { MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";

const menuItems = ["Home", "Invoices", "Usage", "Profile", "Settings"];

export default function Page() {
  const [navigationIsVisible, setNavigationIsVisible] = useState(true);
  return (
    <div>
      <motion.div
        initial="hidden"
        animate={navigationIsVisible ? "visible" : "hidden"}
        variants={{
          hidden: {
            width: 80,
            transition: {
              staggerChildren: 0.1,
              staggerDirection: -1,
              delay: 0.3,
              // when: "afterChildren",
            },
          },
          visible: {
            width: 200,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="h-screen bg-[rgba(10,10,10,.8)] p-3 text-white"
      >
        <MenuIcon
          onClick={() => setNavigationIsVisible((visible) => !visible)}
          className="h-10 w-10 cursor-pointer"
        />
        <nav>
          <ul>
            {menuItems.map((item) => {
              return (
                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  className="cursor-pointer rounded-md py-3 px-3 transition-colors hover:bg-white/5"
                  key={item}
                >
                  {item}
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </motion.div>
    </div>
  );
}
