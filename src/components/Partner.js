import {React, useEffect, useState } from 'react';
import Pop from "@/components/Pop";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence, useAnimation } from "framer-motion"

function Partner() {
  const [showPopModal, setShowPopModal] = useState(false);
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
      initial: { x: "calc(100vw - 50%)" },
      x: 0,
			transition: {
				duration: 1,
				delay: 0.5,
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
      x: 0,
			transition: {
				duration: 1,
				delay: 0.5,
				bounce: 0.35,
				ease: [0.2, 0.65, 0.3, 0.9],
			},
		},
	};

  return (
    
    <div ref={ref} className='bg-blacky pt-10' >
      <AnimatePresence>
         <p className='text-5xl md:text-10xl pt-5 whitespace-nowrap overflow-hidden text-center text-blacck dark:text-blacck font-semibold'> PARTNER WITH US </p>

         <motion.p className='text-lg md:text-3xl text-center text-whitey dark:text-whitey font-semibold' initial='hidden'
         animate={animation}
         ref={ref}
         variants={secondAnimation}> Like to become one of our partners? </motion.p>

         <motion.div ref={ref} className='flex pt-8 pb-5 items-center justify-center '
         initial='hidden'
         animate={animation}
         variants={textAnimation}
        >
							<button
								type='button'
                onClick={() => {
									setShowPopModal(true);
								}}
								class='text-black bg-purple hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-lg px-7 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple dark:text-blacky dark:hover:bg-blue-700 dark:focus:ring-blue-800'
							>
								Partner
							</button>
						</motion.div>
            {showPopModal && <Pop setOpenPopModal={setShowPopModal} />}
            </AnimatePresence>
    </div>
  )
}

export default Partner