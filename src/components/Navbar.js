import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/Modal";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
        >
          <nav className="bg-blacky border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-black shadow">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
              <Link href="/" class="flex items-start">
                <Image
                  src="/transrisk.svg"
                  alt="gallery-image"
                  className="md:pl-16 md:pt-4 relative md:w-fit"
                  width={100}
                  height={41}
                  priority
                />

                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
              </Link>
              <div class="flex lg:items-center md:pr-16 md:pt-1 md:order-2">
                <button
                  data-modal-target="authentication-modal"
                  data-modal-toggle="authentication-modal"
                  type="button"
                  onClick={() => {
                    setShowModal(true);
                  }}
                  class="text-black bg-purple hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  + Join Waitlist
                </button>

                {showModal && <Modal setOpenModal={setShowModal} />}

                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-whitey"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-whitey"
                        fill="D0BCFF"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <div
                  className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navbar ? "block" : "hidden"
                  }`}
                >
                  <ul class="flex flex-col p-2 mt-2 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium md:border-0 md:bg-white dark:border-gray-700">
                    <li>
                      <Link
                        href="/"
                        class="block py-2 pl-3 pr-4 text-whitey rounded active:text-purple active:underline md:text-muddy  hover:bg-gray-100 hover:bg-transparent hover:text-purple md:p-0 dark:hover:text-whitey dark:text-muddy dark:hover:bg-purple hover:scale-125"
                        aria-current="page"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/About"
                        class="block py-2 pl-3 pr-4 text-whitey md:text-muddy active:text-purple active:underline rounded hover:bg-gray-100 hover:bg-transparent hover:text-purple md:p-0 dark:hover:text-whitey dark:text-muddy dark:hover:bg-purple hover:scale-125"
                      >
                        About
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
