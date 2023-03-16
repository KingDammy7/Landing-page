import { React, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

function Core() {
	const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
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
				delay: 0.2,
				bounce: 0.35,
				ease: [0.2, 0.65, 0.3, 0.9],
			},
		},
	};

	const secondAnimation = {
		hidden: {
			opacity: 0,
			y: 25,
			scale: 0.5,
		},
		visible: {
			opacity: 1,
			y: 0,
            x: [50, 150, 0],  
            scale: 1,
			transition: {
				duration: 2,
				delay: 0.5,
				ease: [0.5, 0.71, 1, 1.5],
			},
			
		},
	};

	return (
		<div className='pb-10'>
			<AnimatePresence>
				<div ref={ref}>
					<motion.p
						className='text-2xl pt-5 text-center dark:text-white font-semibold'
						initial='hidden'
						animate={animation}
						variants={secondAnimation}
					>
						{" "}
						Core Features{" "}
					</motion.p>
					<motion.div
						className='grid pt-5 md:grid-cols-3 gap-8'
						initial='hidden'
						animate={animation}
						variants={textAnimation}
					>
						<div className='flex flex-col items-center justify-center bg-blacky text-whitey dark:text-white text-center lg:text-left '>
							<p className='text-xl md:text-2xl pt-5 dark:text-white font-bold'>
								{" "}
								Weather Report{" "}
							</p>
							<p className='dark:text-white text-base pt-2 pb-5'>
								{" "}
								Accurate weather report{" "}
							</p>
						</div>

						<div className='flex flex-col text-whitey items-center justify-center bg-blacky text-center lg:text-left dark:text-white'>
							<p className='text-xl md:text-2xl text-white pt-5 dark:text-white font-bold'>
								{" "}
								Signage{" "}
							</p>
							<p className='dark:text-white pt-2 pb-5 text-base'>
								{" "}
								Real time road safety signage{" "}
							</p>
						</div>
						<div className='flex flex-col text-whitey items-center justify-center bg-blacky text-center lg:text-left dark:text-white'>
							<p className='text-xl md:text-2xl pt-5 dark:text-white font-bold'>
								{" "}
								Road Tips{" "}
							</p>
							<p className='dark:text-white text-base pt-2 pb-5'>
								{" "}
								Tips to ensure security and safety{" "}
							</p>
						</div>
						<div className='flex flex-col text-whitey items-center justify-center bg-blacky text-center lg:text-left dark:text-white'>
							<p className='text-xl md:text-2xl pt-5 dark:text-white font-bold'>
								{" "}
								Status{" "}
							</p>
							<p className='dark:text-white text-base pt-2 pb-5'>
								{" "}
								Real time road status{" "}
							</p>
						</div>
						<div className='flex flex-col text-whitey items-center justify-center bg-blacky text-center lg:text-left dark:text-white'>
							<p className='text-xl md:text-2xl pt-5 dark:text-white font-bold'>
								{" "}
								Traffic{" "}
							</p>
							<p className='dark:text-white text-base pt-2 pb-5'>
								{" "}
								Traffic condition of route{" "}
							</p>
						</div>
						<div className='flex flex-col text-whitey items-center justify-center bg-blacky text-center lg:text-left dark:text-white'>
							<p className='text-xl md:text-2xl pt-5 dark:text-white font-bold'>
								{" "}
								Security{" "}
							</p>
							<p className='dark:text-white text-base pt-2 pb-5'>
								{" "}
								Security report of your route{" "}
							</p>
						</div>
					</motion.div>
				</div>
			</AnimatePresence>
		</div>
	);
}

export default Core;
