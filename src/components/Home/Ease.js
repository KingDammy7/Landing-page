import { React, useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

function Ease() {
	const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
	
	const animation = useAnimation();
	useEffect(() => {
		if (inView) {
			animation.start({
				x: 0,
				transition: {
					type: "spring",
					duration: 1,
					bounce: 0.35,
				},
			});
		}
		if (!inView) {
			animation.start({ x: "50vw md:100vw" });
		}
		
	});

	return (
		<div ref={ref} className='py-10'>
			<AnimatePresence>
				<motion.div
					ref={ref}
					className='flex flex-col md:flex-row md:justify-around items-center'
					animate={animation}
					style={{
						transform: inView ? "none" : "translateX(-200px)",
						opacity: inView ? 1 : 0,
						transition: "all 0.95s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
					}}
				>
					<div className='relative'>
						<p className='text-2xl text-left md:text-left md:text-5xl dark:text-white'>
							Our easy-to-use <br class='hidden lg:block' /> interface allows{" "}
							<br class='hidden lg:block' /> you to{" "}
						</p>

						<picture className=' invisible md:visible lg:absolute lg:bottom-4 lg:right-3'>
							<source
								srcset='/arrow.svg'
								media='(prefers-color-scheme: dark)'
							/>
							<img
								src='/arrowl.svg'
								media='(prefers-color-scheme: light)'
								alt='Light Mode Image'
							/>
						</picture>
					</div>
					<motion.div
						className='grid md:grid-cols-2 gap-8'
						initial={{ x: "calc(100vw - 50%)" }}
						animate={{ x: 0 }}
						transition={{ delay: 0.2 }}
					>
						<div className='dark:text-white'>
							<p className='hidden md:block text-left md:text-left dark:text-white pt-5 md:pt-0 text-base'>
								01.{" "}
							</p>{" "}
							<p className='text-left md:text-left text-xl md:text-2xl pt-5 dark:text-white font-bold'>
								{" "}
								<span className='text-base md:hidden pr-1'>01. </span>
								Safety Information{" "}
							</p>
							<p className='text-left  md:text-left dark:text-white text-base pt-5'>
								{" "}
								Information about potential <br /> hazards on the road, based on
								the <br /> users current location. <br />{" "}
							</p>
						</div>

						<div className='text-left md:text-left dark:text-white'>
							<p className='hidden md:block dark:text-white text-base'>02. </p>{" "}
							<p className='text-xl text-left md:text-2xl pt-5 dark:text-white font-semibold'>
								{" "}
								<span className='text-base md:hidden pr-1'>02. </span>
								Emergency Assistance{" "}
							</p>
							<p className='dark:text-white pt-5 text-base'>
								{" "}
								The app allows users to call for <br /> assistance in case of
								emergency <br /> or car troubles.{" "}
							</p>
						</div>
						<div className='text-left md:text-left dark:text-white'>
							<p className='hidden md:block dark:text-white text-base'>03. </p>{" "}
							<p className='text-xl text-left md:text-2xl pt-5 dark:text-white font-semibold'>
								{" "}
								<span className='text-base md:hidden pr-1'>03. </span>
								User-generated reports{" "}
							</p>
							<p className='dark:text-white text-base pt-5'>
								{" "}
								Allows users to report on hazards, <br /> road conditions to
								help other users <br /> avoid these hazards on the road. <br />{" "}
							</p>
						</div>
						<div className='text-left md:text-left dark:text-white'>
							<p className='hidden md:block dark:text-white text-base'>04. </p>{" "}
							<p className='text-xl md:text-2xl pt-5 dark:text-white font-semibold'>
								{" "}
								<span className='text-base md:hidden pr-1'>04. </span>
								Personalization{" "}
							</p>
							<p className='dark:text-white text-base pt-5'>
								{" "}
								Tailor your experience by setting <br /> preferences and
								receiving <br /> notifications relevant to your <br /> specific
								needs. <br />{" "}
							</p>
						</div>
					</motion.div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}

export default Ease;
