import {React, useEffect} from 'react';
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function FAQ() {
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
				delay: 0.3,
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
    <div ref={ref} className='pt-8'>
		<AnimatePresence>
        <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
	<motion.div class="flex flex-col items-center" animate={animation}
         ref={ref}
         variants={textAnimation}>
		
		<p class="font-semibold text-xl md:text-3xl mt-5 tracking-tight">
        Answered Questions
		</p>
	</motion.div>
	<div class="grid divide-y divide-neutral-200 max-w-3xl mx-auto mt-8 px-3 lg:px-10 dark:bg-blacky">
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> How does the app determine the hazards on the road?</span>
					<motion.span class="transition group-open:rotate-180" whileTap={{ rotate: 90, scale: 0.75 }}>
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </motion.span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
					 The app uses the available technologies of artificial intelligence and geographic information systems, the app will use previous data informationof different conditions on the road and also combining it with human interactions 
					 and behaviors to be able to detect hotspots for road accidents and map risk regions and also give recommedations based on that insight, we also have some other tools and functionality to be able to record and save 
					 such information for future purposes and to improve the accuracy of the modelling for the app.
					
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span>  Is it necessary to have an internet connection to use the app?</span>
					<motion.span class="transition group-open:rotate-180" whileTap={{ rotate: 90, scale: 0.75 }}>
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </motion.span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
					No, we will be having offline features, that will be helpful for people moving through in the offline state but information would not be updated and 
					some functionality which involves the real time updates would not also show but the static features of the road will be available offline for those
					 without internet connection

					
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> Can I use the app while I am offline?</span>
					<motion.span class="transition group-open:rotate-180" whileTap={{ rotate: 90, scale: 0.75 }}>
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </motion.span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn" 
				>
					Yes, you can use the app while you are offline.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> Are there any additional costs for using the emergency assistance feature?</span>
					<motion.span class="transition group-open:rotate-180" whileTap={{ rotate: 90, scale: 0.75 }}>
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </motion.span> 
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
					For the emergency assistance, there will be a secondary cost that is not included in the subscription cost and there will also be a cost to buy or use any of the services offered on the app.
					
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> Is the app compatible with both iOS and Android devices?</span>
					<motion.span class="transition group-open:rotate-180" whileTap={{ rotate: 90, scale: 0.75 }}>
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </motion.span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
					Yes, the app is compatible with both IOS and Android devices and fully functional on both platforms. 
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> How do I access documentation?</span>
					<motion.span class="transition group-open:rotate-180" whileTap={{ rotate: 90, scale: 0.75 }}>
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </motion.span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
					  As soon as the ap is released, we will released, we will be releasing different version of the  documentations to cater for the different use cases
					  and the documentation will be helpful for guiding on how to use the app.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> How do I contact support?</span>
					<motion.span class="transition group-open:rotate-180" whileTap={{ rotate: 90, scale: 0.75 }}>
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </motion.span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
					If you need help with the platform or have any other questions, you can contact the
					companys support team by sending an email to a support@transrisk.com.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> Do you offer any discounts or promotions?</span>
					<motion.span class="transition group-open:rotate-180" whileTap={{ rotate: 90, scale: 0.75 }}>
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </motion.span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
					We will offer discounts and promotions and they will be announced when the app is launched. To stay up-to-date on the latest
					deals and special offers, you can join the waitlist or follow it on social media.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> How do we compare to other similar services?</span>
					<motion.span class="transition group-open:rotate-180" whileTap={{ rotate: 90, scale: 0.75 }}>
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </motion.span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
					 This platform is a highly reliable and feature-rich service that offers a wide range
					of tools and functionality. It is competitively priced and offers a variety of billing options to
					suit different needs and budgets. Also, the app is localalized to the coutry itself and it has much more in depth information and much more functionalities than 
					other safe journey alerts apps and it can also work offline. 
				</p>
			</details>
		</div>
		
	</div>
</div>
<div>
		<p className='text-lg text-black lg:text-2xl pt-10 text-center dark:text-white'> Still got more questions? <span className='text-purple underline'>Chat us</span> </p>
		</div>
		</AnimatePresence>
    </div>
  )
}

export default FAQ