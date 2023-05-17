import { React, useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

function Screens() {
	const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start("visible");
		}
		if (!inView) {
			animation.start("hidden");
		}
	}, [animation, inView]);

	const textAnimation = {
		hidden: {
			opacity: 0,
			y: 25,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				delay: 0.1,
				bounce: 0.35,
				ease: [0.2, 0.65, 0.3, 0.9],
			},
		},
	};

	const secondAnimation = {
		hidden: {
			opacity: 0,
			y: 25,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				delay: 0.8,
				bounce: 0.35,
				ease: [0.2, 0.65, 0.3, 0.9],
			},
		},
	};

	const thirdAnimation = {
		hidden: {
			opacity: 0,
			y: 25,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				delay: 1.0,
				bounce: 0.4,
				ease: [0.2, 0.65, 0.3, 0.9],
			},
		},
	};

	return (
		<div className='py-10'>
			<AnimatePresence>
				<div
					ref={ref}
					className='flex flex-col md:flex-row md:justify-around items-center '
				>
					<motion.img
						ref={ref}
						initial='hidden'
						animate={animation}
						variants={textAnimation}
						src='/Phone.png'
						alt='tab'
						className='relative '
						width={400}
						height={420}
						priority
					/>
					<motion.div
						className='flex flex-col md:flex pl-0 md:pl-3 gap-3 md:gap-10 '
						ref={ref}
						initial='hidden'
						animate={animation}
						variants={textAnimation}
					>
						<p className='text-lg md:text-xl text-left font-bold md:text-left pt-8 md:pt-0 lg:text-2xl dark:text-white'>
							Experience Seamless Navigation
						</p>
						<p className='sm:text-base md:text-xs lg:text-base text-left md:text-left dark:text-white'>
							Navigate with ease and stay informed with real-{" "}
							<br class='hidden lg:block' />
							time updates on hazards, weather conditions, and{" "}
							<br class='hidden lg:block' />
							user-generated reports with the Transrisk Safe{" "}
							<br class='hidden lg:block' />
							Journey App - The ultimate companion for a safe
							<br class='hidden lg:block' /> and smooth journey.
						</p>
					</motion.div>
				</div>

			
			<hr class="mx-28 hidden lg:block h-px my-8 bg-liney border-0 dark:bg-gray-700"/>
			
				

				<div className='flex flex-col md:flex-row md:justify-around items-center'>
					<motion.div
						className='flex flex-col md:flex gap-3 md:gap-10 '
						initial='hidden'
						animate={animation}
						variants={secondAnimation}
					>
						<p className='text-lg md:text-xl text-left font-semibold md:text-left pt-8 md:pt-0 lg:text-2xl dark:text-white'>
							Emergency Services
						</p>
						<motion.p
							className='sm:text-base md:text-xs lg:text-base text-left md:text-left dark:text-white'
							initial={{ opacity: 0, y: 25 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 1,
								delay: 0.9,
								ease: [0.2, 0.65, 0.3, 0.9],
							}}
						>
							Get access to emergency services such as police,{" "}
							<br class='hidden lg:block' /> ambulance, roadside assistance.
							Users can <br class='hidden lg:block' /> quickly call for help and
							receive assistance in a <br class='hidden lg:block' /> timely
							manner with a feature where users can{" "}
							<br class='hidden lg:block' /> send their location to the
							emergency services for <br class='hidden lg:block' /> a faster
							response.
						</motion.p>
					</motion.div>

					<motion.img
						initial='hidden'
						animate={animation}
						variants={secondAnimation}
						src='/Emergency.png'
						alt='tab'
						className='relative pt-10 order-first md:order-2 md:pt-0'
						width={400}
						height={420}
						priority
					/>
				</div>
				<motion.div
					initial='hidden'
					animate={animation}
					variants={thirdAnimation}
				>
					<p className='text-lg pt-10 text-center dark:text-white'>
						{" "}
						Web Dashboard Analytics
					</p>
					<p className='sm:text-base md:text-xs lg:text-base text-center  dark:text-white'>
						Get a comprehensive overview of the road conditions, weather
						conditions, security alerts and roadside assistance in your city.
					</p>
					<div className='pt-8 flex items-center justify-center'>
						<motion.img
							initial={{ x: "calc(-100vw - 50%)" }}
							animate={{ x: 0 }}
							transition={{ delay: 0.8 }}
							src='/Web.png'
							alt='tab'
							className='  '
							width={400}
							height={420}
							priority
						/>
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}

export default Screens;
