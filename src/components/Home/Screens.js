import React from 'react';
import Image from "next/image";

function Screens() {
  return (
    <div className='py-10'>
        	<div className='flex flex-col md:flex-row md:justify-around items-center'>
                
                <Image
                    src='/Phone.svg'
                    alt='tab'
                    className='relative '
                    width={400}
                    height={420}
                    priority
                />
                <div className='flex flex-col md:flex pl-3 gap-10 '>
                    <p className='text-xl text-center font-semibold md:text-left pt-8 md:pt-0 lg:text-2xl dark:text-white'>
                    Experience Seamless Navigation
                    </p>
                    <p className='sm:text-base md:text-xs lg:text-base text-center md:text-left dark:text-white'>
                    Navigate with ease and stay informed with real- <br class="hidden lg:block" />
                    time updates on hazards, weather conditions, and <br class="hidden lg:block" />
                    user-generated reports with the Transrisk Safe <br class="hidden lg:block" />
                     Journey App - The ultimate companion for a safe<br class="hidden lg:block" /> and smooth journey.
                    </p>
                
                </div>
      </div>

      <div className='flex flex-col md:flex-row md:justify-around items-center'>
                
               
                <div className='flex flex-col md:flex gap-10 '>
                    <p className='text-xl text-center font-semibold md:text-left pt-8 md:pt-0 lg:text-2xl dark:text-white'>
                    Emergency Services
                    </p>
                    <p className='sm:text-base md:text-xs lg:text-base text-center md:text-left dark:text-white'>
                    Get access to emergency services such as police, <br class="hidden lg:block" /> ambulance, roadside assistance. 
                    Users can <br class="hidden lg:block" /> quickly call for help and receive assistance in a <br class="hidden lg:block" /> timely manner with a 
                    feature where users can <br class="hidden lg:block" /> send their location to the emergency services for <br class="hidden lg:block" /> a faster response.
                    </p>
                
                </div>

                <Image
                    src='/Emergency.svg'
                    alt='tab'
                    className='relative pt-10 md:pt-0'
                    width={400}
                    height={420}
                    priority
                />
      </div>
      <div>
        <p className='text-lg pt-10 text-center dark:text-white'> Web Dashboard Analytics</p>
        <p className='sm:text-base md:text-xs lg:text-base text-center  dark:text-white'>
        Get a comprehensive overview of the road conditions, weather conditions, 
        security alerts and roadside assistance in your city.
                    </p>
                    <div className='pt-8 flex items-center justify-center'>
                    <Image
                    src='/Web.svg'
                    alt='tab'
                    className='  '
                    width={400}
                    height={420}
                    priority
                />
                </div>
      </div>
    </div>
  )
}

export default Screens