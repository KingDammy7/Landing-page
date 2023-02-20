import React from "react";
import Image from "next/image";


function Ease() {
	return (
		<div className='py-10'>
			<div className='flex flex-col md:flex-row md:justify-around items-center'>
				<div className='relative'>
					<p className='text-3xl text-center md:text-left md:text-5xl dark:text-white'>
						Our easy-to-use <br /> interface allows <br /> you to{" "}
					</p>
				
					<picture className=' invisible md:visible lg:absolute lg:bottom-4 lg:right-2'>
						<source srcset='/arrow.svg' media='(prefers-color-scheme: dark)' />
						<img src='/arrowl.svg' media='(prefers-color-scheme: light)' alt='Light Mode Image' />
					</picture>
				</div>
				<div className='grid md:grid-cols-2 gap-8'>
					<div className='dark:text-white'>
						<p className='text-center md:text-left dark:text-white pt-5 md:pt-0 text-base'>
							01.{" "}
						</p>{" "}
						<p className='text-center md:text-left  text-2xl pt-5 dark:text-white font-semibold'>
							{" "}
							Safety Information{" "}
						</p>
						<p className='text-center md:text-left dark:text-white text-base pt-5'>
							{" "}
							Information about potential <br /> hazards on the road, based on
							the <br /> users current location. <br />{" "}
						</p>
					</div>

					<div className='text-center md:text-left dark:text-white'>
						<p className='dark:text-white text-base'>02. </p>{" "}
						<p className='text-2xl pt-5 dark:text-white font-semibold'>
							{" "}
							Emergency Assistance{" "}
						</p>
						<p className='dark:text-white pt-5 text-base'>
							{" "}
							The app allows users to call for <br /> assistance in case of
							emergency <br /> or car troubles.{" "}
						</p>
					</div>
					<div className='text-center md:text-left dark:text-white'>
						<p className='dark:text-white text-base'>03. </p>{" "}
						<p className='text-2xl pt-5 dark:text-white font-semibold'>
							{" "}
							User-generated reports{" "}
						</p>
						<p className='dark:text-white text-base pt-5'>
							{" "}
							Allows users to report on hazards, <br /> road conditions to help
							other users <br /> avoid these hazards on the road. <br />{" "}
						</p>
					</div>
					<div className='text-center md:text-left dark:text-white'>
						<p className='dark:text-white text-base'>04. </p>{" "}
						<p className='text-2xl pt-5 dark:text-white font-semibold'>
							{" "}
							Personalization{" "}
						</p>
						<p className='dark:text-white text-base pt-5'>
							{" "}
							Tailor your experience by setting <br /> preferences and receiving{" "}
							<br /> notifications relevant to your <br /> specific needs.{" "}
							<br />{" "}
						</p>
					</div>
				</div>
				
			</div>
		</div>
	);
}

export default Ease;
