import React from 'react';
import Image from "next/image";
import { useState } from "react";
import Modal from "@/components/Modal";


function Hero() {
	const [showModal, setShowModal] = useState(false);
  return (
    <div>
        		<div className='flex flex-col md:flex-row md:justify-between items-center'>
                
					<Image
						src='/tablet.svg'
						alt='tab'
						className='relative lg:w-fit'
						width={300}
						height={420}
						priority
					/>
					<div className='flex flex-col gap-5 md:flex lg:gap-10 '>
						<p className='text-3xl text-center lg:text-left pt-8 md:pl-5 md:pt-0 lg:text-4xl dark:text-white'>
							Stay Safe on the <br class="hidden lg:block" /> Road with Real-Time <br class="hidden lg:block"/> Information
						</p>
						<p className='sm:text-lg md:pl-5 md:text-xs lg:text-lg text-center lg:text-left dark:text-white'>
							With information on sharp bends, potholes, weather <br class="hidden lg:block" />{" "}
							conditions, intersections, and kidnapping and security details,{" "}
							<br class="hidden lg:block" /> you can be prepared for any situation as you journey.
						</p>
						<div className='flex items-center justify-center md:items-start md:pl-5 lg:justify-start'>
							<button
								type='button'
								onClick={() => {
									setShowModal(true);
								}}
								class='text-black bg-purple hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple dark:text-black dark:hover:bg-blue-700 dark:focus:ring-blue-800'
							>
								+ Join Waitlist
							</button>
						</div>
					</div>
          </div>
          <div>
            <p className='text-lg lg:text-2xl pt-10 text-center dark:text-white'> Users: Personal, Business and Government</p>
          </div>
		  {showModal && <Modal setOpenModal={setShowModal} />}
    </div>
  )
}

export default Hero