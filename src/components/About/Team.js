import React from 'react';
import Image from "next/image";

function Team() {
  return (
    
        <div className='py-10'>
			<div className='lg:px-36 relative md:pb-5'>
			<p className='text-xl text-left md:text-left md:text-5xl dark:text-white font-bold'>
        Meet the team behind <br class="hidden lg:block" /><span className=''> this project </span></p>
		<picture className='hidden pl-5 md:block lg:absolute lg:bottom-10 lg:left-105' >
   <source srcset="/arrow.svg" media="(prefers-color-scheme: dark)" />
   <img src="/arrowl.svg" alt="Light Mode Image" />
</picture>
		
		</div>
        <div className='flex flex-col md:flex-row md:justify-around  items-center lg:items-start'>
            <div className='invisible relative md:b-5'>
        <p className='text-xl text-left md:text-left md:text-5xl dark:text-white'>
        Meet the team behind <br class="hidden lg:block"/><span className=''> this project </span></p>
        

                        </div>
					<div className='grid md:grid-cols-3 gap-5'>
                        
						<div className='dark:text-white '>
							
                        <Image
						src='/team/Siji.JPG'
						alt='arrow'
						loading='lazy'
						className=' md:h-64 flex '
						width={240}
						height={30}
					
					/>
					
                            <p className='text-center md:text-left dark:text-white font-bold text-xl pt-5'> Oluwasijibomi Ogunniran  </p>
                            <p>
                            Founder
                            </p>
						</div>
						
                        <div className='text-center md:text-left dark:text-white'>
					
                        <Image
						src='/team/Taiwo.jpg'
						alt='arrow'
						className='flex md:h-64 '
						loading='lazy'
						width={240}
						height={30}
						
					/>
                      <p className='text-center md:text-left dark:text-white text-base pt-5'> Odetola Taiwo  </p>
                            <p>
                            Co-founder
                            </p>
						</div>
                        <div className='text-center md:text-left dark:text-white'>
                        <Image
						src='/team/Dami.jpeg'
						loading='lazy'
						alt='arrow'
						className='flex md:w-fit md:h-64 '
						width={240}
						height={30}
						
					/>
              <p className='text-center md:text-left dark:text-white font-bold text-xl pt-5'> Damilola  </p>
                            <p>
                            GIS Analyst
                            </p>
						</div>
                        <div className='text-center md:text-left dark:text-white'>
                        <Image
						src='/team/Bamise.jpeg'
						alt='arrow'
						loading='lazy'
						className='flex md:w-fit md:h-64 '
						width={240}
						height={30}
						
					/>
                             <p className='text-center md:text-left font-bold text-xl dark:text-white pt-5'> Bamise </p>
                            <p>
                            Product Manager
                            </p>
						</div>
                        <div className='text-center md:text-left dark:text-white'>
                        <Image
						src='/team/Daniel.jpg'
						alt='arrow'
						loading='lazy'
						className='flex  md:h-64 '
						width={240}
						height={30}
						
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