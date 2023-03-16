import { React, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function Details() {
	return (
		<div className='pt-5 lg:pt-10'>
			<AnimatePresence>
				<div className='flex flex-col md:flex-row md:justify-around items-center'>
					<Image
						width={400}
						height={420}
						loading='lazy'
						src='/Details.svg'
						alt='tab'
						className='relative '
					/>

					<motion.div
						className='flex order-first md:order-1 flex-col md:flex pl-3 gap-2 md:gap-5 '
						initial={{ x: "calc(100vw - 50%)" }}
						animate={{ x: 0 }}
						transition={{ delay: 0.4 }}
					>
						<p className='sm:text-base md:text-xs lg:text-base text-left md:text-left dark:text-white'>
							Idea behind the project
						</p>
						<p className='text-xl text-left font-semibold lg:text-left pt-2 md:pt-0 lg:text-2xl dark:text-white'>
							Why Transrisk.AI
						</p>
						<p className='pb-10 md:pb-0 sm:text-base md:text-xs lg:text-base text-left md:text-left dark:text-whitey'>
							We desire to use technology to make a difference{" "}
							<br class='hidden lg:block' /> in peoples lives. We recognized the
							need for a <br class='hidden lg:block' /> more comprehensive and
							real-time solution for <br class='hidden lg:block' /> drivers to
							stay safe on the road. With the <br class='hidden lg:block' />{" "}
							increasing number of accidents happening on the roads.{" "}
						</p>
					</motion.div>
				</div>
			</AnimatePresence>
		</div>
	);
}

export default Details;
