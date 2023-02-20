import React from 'react'

function Core() {
  return (
    <div className='pb-10'>
        <p className='text-2xl pt-5 text-center dark:text-white font-semibold'> Core Features </p>
        	<div className='grid pt-5 md:grid-cols-3 gap-8'>
                        
						<div className='flex flex-col items-center justify-center bg-blacky text-whitey dark:text-white text-center lg:text-left '>
							 <p className='text-2xl pt-5 dark:text-white font-semibold'> Weather Report </p>
                            <p className='dark:text-white text-base pt-2 pb-5'> Accurate weather report </p>
						</div>
						
                        <div className='flex flex-col text-whitey items-center justify-center bg-blacky text-center lg:text-left dark:text-white'>
							 <p className='text-2xl text-white pt-5 dark:text-white font-semibold'> Signage </p>
                            <p className='dark:text-white pt-2 pb-5 text-base'> Real time road safety signage </p>
						</div>
                        <div className='flex flex-col text-whitey items-center justify-center bg-blacky text-center lg:text-left dark:text-white'>
							<p className='text-2xl pt-5 dark:text-white font-semibold'> Road Tips </p>
                            <p className='dark:text-white text-base pt-2 pb-5'> Tips to ensure security and safety </p>
						</div>
                        <div className='flex flex-col text-whitey items-center justify-center bg-blacky text-center lg:text-left dark:text-white'>
							<p className='text-2xl pt-5 dark:text-white font-semibold'> Status </p>
                            <p className='dark:text-white text-base pt-2 pb-5'> Real time road status </p>
						</div>
                        <div className='flex flex-col text-whitey items-center justify-center bg-blacky text-center lg:text-left dark:text-white'>
							<p className='text-2xl pt-5 dark:text-white font-semibold'> Traffic </p>
                            <p className='dark:text-white text-base pt-2 pb-5'> Traffic condition of route </p>
						</div>
                        <div className='flex flex-col text-whitey items-center justify-center bg-blacky text-center lg:text-left dark:text-white'>
							<p className='text-2xl pt-5 dark:text-white font-semibold'> Security </p>
                            <p className='dark:text-white text-base pt-2 pb-5'> Security report of your route </p>
						</div>

						
						
					</div>
    </div>
  )
}

export default Core