import React from 'react';
import Image from "next/image";
import { useState } from "react";
import Modal from "@/components/Modal";
import { motion, AnimatePresence, useAnimation } from "framer-motion";



function Hero() {
	const [showModal, setShowModal] = useState(false);
  return (
    <div className='pb-10'>
		<AnimatePresence>
			
        		<motion.div
			initial={{opacity: 0, y: 25 }}
			animate={{opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 15}}
			transition ={{ delay: 0.35 }}
			 >
			
                <div  className='flex flex-col md:flex-row md:justify-between items-center'>
				<motion.img
				initial={{ x: "calc(-100vw - 50%)" }}
				animate={{ x: 0 }}
				transition ={{ delay: 0.40 }}
						src='/tablet.svg'
						alt='tab'
						className='relative lg:w-fit'
						width={300}
						height={420}
						priority
					
				/>
					{/* <Image
						src='/tablet.svg'
						alt='tab'
						className='relative lg:w-fit'
						width={300}
						height={420}
						priority
					/> */}
					
					
					
					<div className='flex order-first md:order-1 flex-col gap-5 md:flex lg:gap-10 '
					 >
						<motion.p className='text-3xl text-left font-bold md:text-center lg:text-left pt-8 md:pl-5 md:pt-0 lg:text-6xl dark:text-white'
						initial={{ x: "md:calc(100vw - 50%)" }}
						animate={{ x: 0 }}
						transition ={{ delay: 0.40 }}>
							Stay Safe on the <br class="md:hidden lg:hidden" /> Road with Real- <br class="block md:block lg:hidden" /> Time <br class="hidden lg:block"/> Information
						</motion.p>
						<motion.p className='sm:text-lg md:pl-5 md:text-xs lg:text-lg text-left md:text-center lg:text-left dark:text-white'
						initial={{opacity: 0, y: 25 }}
						animate={{opacity: 1, y: 0 }}
						transition ={{ duration: 1, delay: 0.7,
							ease: [0.2, 0.65, 0.3, 0.9] }}>
							With information on sharp bends, potholes, weather <br class="hidden lg:block" />{" "}
							conditions, intersections, and kidnapping and security details,{" "}
							<br class="hidden lg:block" /> you can be prepared for any situation as you journey.
						</motion.p>
						<motion.div className='flex pb-10 md:pb-0 items-center sm:justify-start md:justify-center md:items-start md:pl-5 lg:justify-start'
						initial={{ x: "calc(100vw - 50%)" }}
						animate={{ x: 0 }}
						transition ={{ delay: 0.70 }}
						>
							<button
								type='button'
								onClick={() => {
									setShowModal(true);
								}}
								class='text-black bg-purple hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple dark:text-black dark:hover:bg-blue-700 dark:focus:ring-blue-800'
							>
								+ Join Waitlist
							</button>
						</motion.div>
					</div>
					</div>
          </motion.div>
		  
          <div>
            <motion.p className='text-lg lg:text-2xl pt-10 text-center dark:text-white'
				initial={{opacity: 0, y: 25 }}
				animate={{opacity: 1, y: 0 }}
				transition ={{ duration: 1, delay: 0.9,
					ease: [0.2, 0.65, 0.3, 0.9] }}> Users: Personal, Business and Government</motion.p>
          </div>
		  {showModal && <Modal setOpenModal={setShowModal} />}
		
		  </AnimatePresence>
    </div>
  )
}

export default Hero