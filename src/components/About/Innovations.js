import {React, useEffect} from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

function Innovations() {
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
			animation.start({ x: "50vw md:100vw"});
		}
	});
	return (
		<div ref={ref} className='py-10'>
			<AnimatePresence>
			<motion.div className='flex flex-col md:flex-row md:justify-around md:items-center' 
			ref={ref}
			
			animate={animation}
			style={{
				transform: inView ? "none" : "translateX(-200px)",
				opacity: inView ? 1 : 0,
				transition: "all 0.95s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
			}}>
				<div className='relative'>
					<p className='text-xl text-left md:text-left md:text-5xl dark:text-white'>
						Key Innovations
					</p>
				</div>
				<div className='hidden md:grid md:grid-cols-2 md:gap-5'>
					<div className='dark:text-white'>
						<p className='text-left md:text-left dark:text-white pt-5 md:pt-0 text-base'>
							01.{" "}
						</p>
						<p className='text-left md:text-left dark:text-white text-base pt-5'>
							{" "}
							Future enhancement will <br class='hidden lg:block' /> include
							news event, user <br class='hidden lg:block' /> driving
							activities, <br class='hidden lg:block' /> construction will be
							fed <br class='hidden lg:block' />
							real time into the system <br />{" "}
						</p>
					</div>

					<div className='text-left md:text-left dark:text-white'>
						<p className='dark:text-white text-base'>02. </p>
						<p className='dark:text-white pt-5 text-base'>
							{" "}
							Dynamic information feed{" "}
						</p>
					</div>
					<div className='text-left md:text-left dark:text-white'>
						<p className='dark:text-white text-base'>03. </p>
						<p className='dark:text-white text-base pt-5'>
							{" "}
							Alert Engine 
												
						</p>
						<div>
						<ul className="list-disc">
								<li>Speech (Multilingual)</li>
								<li>Beep & Vibration</li>
							</ul>
						</div>
					</div>
					<div className='text-left md:text-left dark:text-white'>
						<p className='dark:text-white text-base'>04. </p>
						<p className='dark:text-white text-base pt-5'>
							{" "}
							Integration of <br class='hidden lg:block' /> multidimensional
							data <br class='hidden lg:block' /> sources which includes{" "}
							<br class='hidden lg:block' /> NASA, FRSC, GRID3, Google{" "}
							<br class='hidden lg:block' /> Map and ArcGIS{" "}
						</p>
					</div>
				</div>
				<div className="md:hidden pt-5">
					<ul className='list-disc'>
						<li  >
						Future enhancement will include news event, user driving activities, construction will be fed real time into the system
						</li>
						<li className="pt-5">
						Dynamic information feed
						</li>
						<li className="pt-5">
						Alert Engine: Speech (Multilingual), Beeps & Vibration
						</li>
						<li className="pt-5">
						Integration of multidimensional data sources which includes NASA, FRSC, GRID3, Google Map and ArcGIS
						</li>
					</ul>
				</div>

			</motion.div>
			</AnimatePresence>
		</div>
	);
}

export default Innovations;
