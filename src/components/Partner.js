import React from 'react'
import { useState } from "react";
import Pop from "@/components/Pop";

function Partner() {
  const [showPopModal, setShowPopModal] = useState(false);
  return (
    <div className='bg-blacky pt-10'>
         <p className='text-5xl md:text-10xl pt-5 whitespace-nowrap overflow-hidden text-center text-blacck dark:text-blacck font-semibold'> PARTNER WITH US </p>

         <p className='text-lg md:text-3xl text-center text-whitey dark:text-whitey font-semibold'> Like to become one of our partners? </p>

         <div className='flex pt-8 pb-5 items-center justify-center '>
							<button
								type='button'
                onClick={() => {
									setShowPopModal(true);
								}}
								class='text-black bg-purple hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-lg px-7 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple dark:text-blacky dark:hover:bg-blue-700 dark:focus:ring-blue-800'
							>
								Partner
							</button>
						</div>
            {showPopModal && <Pop setOpenPopModal={setShowPopModal} />}
    </div>
  )
}

export default Partner