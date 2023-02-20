import React from 'react';
import Navbar from "@/components/Navbar";
import Details from '@/components/About/Details';
import Team from '@/components/About/Team';
import Innovations from '@/components/About/Innovations';
import Partner from '@/components/Partner';
import Footer from '@/components/Footer';

function About() {
  return (
    <div>
      <Navbar />
        <div className=" bg-about-pattern lg:pl-5" >

            <div className='flex flex-col justify-center px-10 lg:pt-10 h-64'>
            <p className='text-3xl font-semibold text-center lg:text-left pt-8 md:pl-10 md:pt-0 lg:text-6xl dark:text-blacky'>
            About us
						</p>
            <div>
            <p className='sm:text-lg md:pl-5 md:text-xs lg:text-lg text-center lg:text-left dark:text-white'>
            Real time intelligence that prevents car crashes and <br class="hidden lg:block" />road risks using Artificial Intelligence and GIS
							 
						</p>
            </div>
            </div>
        </div>
        <div className="px-8 py-4 lg:px-32 lg:py-8">
          <Details />
        </div>
        <div className="px-8 py-4 lg:px-24 lg:py-8">
          <Team />
          <Innovations />
        </div>
        <div className="px-8 py-4 lg:px-32 lg:py-8">
          <Partner />
          <Footer />
        </div>
        
        </div>
  )
}

export default About