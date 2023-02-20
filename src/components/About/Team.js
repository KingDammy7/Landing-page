import React from 'react';
import Image from "next/image";

function Team() {
  return (
    
        <div className='py-10'>
			<div className='lg:px-36 relative md:pb-5'>
			<p className='text-3xl text-center md:text-left md:text-5xl dark:text-white'>
        Meet the team behind <br/><span className=''> this project </span></p>
		<picture className='invisible pl-5 md:visible lg:absolute lg:bottom-10 lg:left-105' >
   <source srcset="/arrow.svg" media="(prefers-color-scheme: dark)" />
   <img src="/arrowl.svg" alt="Light Mode Image" />
</picture>
		
		</div>
        <div className='flex flex-col md:flex-row md:justify-around  items-center lg:items-start'>
            <div className='invisible relative md:b-5'>
        <p className='text-xl text-center md:text-left md:text-5xl dark:text-white'>
        Meet the team behind <br/><span className=''> this project </span></p>
        

                        </div>
					<div className='grid md:grid-cols-3 gap-5'>
                        
						<div className='dark:text-white'>
                        <Image
						src='/team/Siji.svg'
						alt='arrow'
						className='flex md:w-fit'
						width={240}
						height={30}
						priority
					/>
                            <p className='text-center md:text-left dark:text-white font-bold text-xl pt-5'> Oluwasijibomi Ogunniran  </p>
                            <p>
                            Civil Engineer and Data-Scientist
                            </p>
						</div>
						
                        <div className='text-center md:text-left dark:text-white'>
                        <Image
						src='/team/Taiwo.svg'
						alt='arrow'
						className='flex md:w-fit'
						width={240}
						height={30}
						priority
					/>
                      <p className='text-center md:text-left dark:text-white text-base pt-5'> Odetola Taiwo  </p>
                            <p>
                            Civil Engineer and Data-Scientist
                            </p>
						</div>
                        <div className='text-center md:text-left dark:text-white'>
                        <Image
						src='/team/Dam.svg'
						alt='arrow'
						className='flex md:w-fit '
						width={240}
						height={30}
						priority
					/>
              <p className='text-center md:text-left dark:text-white font-bold text-xl pt-5'> Oluwadamilola & Bamise  </p>
                            <p>
                            Geographers and GIS Analyst
                            </p>
						</div>
                        <div className='text-center md:text-left dark:text-white'>
                        <Image
						src='/team/Faith.svg'
						alt='arrow'
						className='flex md:w-fit'
						width={240}
						height={30}
						priority
					/>
                             <p className='text-center md:text-left font-bold text-xl dark:text-white pt-5'> Oluwole Faith </p>
                            <p>
                            Product Manager
                            </p>
						</div>
                        <div className='text-center md:text-left dark:text-white'>
                        <Image
						src='/team/Dan.svg'
						alt='arrow'
						className='flex md:w-fit'
						width={240}
						height={30}
						priority
					/>
                            <p className='text-center md:text-left dark:text-white font-bold text-xl pt-5'> Esivue Daniel  </p>
                            <p>
                            Android Developer
                            </p>
						</div>
						
						
					</div>
					</div>
                    
          </div>
    
  )
}

export default Team