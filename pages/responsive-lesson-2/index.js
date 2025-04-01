import { BellIcon, CashIcon } from "@heroicons/react/outline";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const fakeNotifications = [
  {
    id: 1,
    timeAgo: "1 hour ago",
    message: "New module about responsiveness added",
  },
  {
    id: 2,
    timeAgo: "2 hours ago",
    message: "Password reset",
  },
  {
    id: 3,
    timeAgo: "3 hours ago",
    message: "went outside for a walk",
  },
];
export default function Page() {
  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <div className="min-h-screen w-full bg-black">
      <button
        onClick={() => setShowNotifications((isOpen) => !isOpen)}
        className="top-3 left-1/2 m-5 rounded-full bg-blue-500 px-8 py-2"
      >
        <BellIcon className="black h-10 w-10" />
      </button>
      <AnimatePresence initial={false}>
        {showNotifications && (
          <motion.div
            className="max-[300px] m-auto max-w-md rounded-2xl border border-gray-300 bg-white p-5"
            animate="open"
            exit="closed"
            variants={{
              open: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
              closed: {
                opacity: 0,
                transition: {
                  staggerChildren: 0.1,
                  staggerDirection: -1,
                },
              },
            }}
            initial="closed"
          >
            <header className="text-md border-b border-gray-300 px-5 pb-3 font-bold">
              <p>Notifications</p>
            </header>
            <ul className="m-0 divide-y divide-gray-300 overflow-hidden p-0">
              {fakeNotifications.map((notification) => {
                return (
                  <motion.li
                    variants={{
                      open: {
                        "--x": "0px",
                        "--y": "0px",
                        opacity: 1,
                      },
                      closed: {
                        "--x": "30px",
                        "--y": "30px",
                        opacity: 0,
                      },
                    }}
                    key={notification.id}
                    className="flex items-center gap-4 py-3 leading-tight max-sm:translate-y-[var(--y)] md:translate-x-[var(--x)]"
                  >
                    <CashIcon className="h-10 w-10" />
                    <div className="flex flex-col">
                      <p className="text-md mb-2">{notification.message}</p>
                      <p className="text-sm opacity-80">
                        {notification.timeAgo}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
