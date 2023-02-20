import React from "react";

function Innovations() {
	return (
		<div className='py-10'>
			<div className='flex flex-col md:flex-row md:justify-around items-center'>
				<div className='relative'>
					<p className='text-3xl text-center md:text-left md:text-5xl dark:text-white'>
						Key Innovations
					</p>
				</div>
				<div className='grid md:grid-cols-2 gap-5'>
					<div className='dark:text-white'>
						<p className='text-center md:text-left dark:text-white pt-5 md:pt-0 text-base'>
							01.{" "}
						</p>
						<p className='text-center md:text-left dark:text-white text-base pt-5'>
							{" "}
							Future enhancement will <br class='hidden lg:block' /> include
							news event, user <br class='hidden lg:block' /> driving
							activities, <br class='hidden lg:block' /> construction will be
							fed <br class='hidden lg:block' />
							real time into the system <br />{" "}
						</p>
					</div>

					<div className='text-center md:text-left dark:text-white'>
						<p className='dark:text-white text-base'>02. </p>
						<p className='dark:text-white pt-5 text-base'>
							{" "}
							Dynamic information feed{" "}
						</p>
					</div>
					<div className='text-center md:text-left dark:text-white'>
						<p className='dark:text-white text-base'>03. </p>
						<p className='dark:text-white text-base pt-5'>
							{" "}
							Alert Engine 
							<ul class='list-disc'>
								<li>Speech (Multilingual)</li>
								<li>Beep & Vibration</li>
							</ul>
						</p>
					</div>
					<div className='text-center md:text-left dark:text-white'>
						<p className='dark:text-white text-base'>04. </p>
						<p className='dark:text-white text-base pt-5'>
							{" "}
							Integration of <br class='hidden lg:block' /> multidimensional
							data <br class='hidden lg:block' /> sources which includes{" "}
							<br class='hidden lg:block' /> NASA, FRSC, GRID3, Google{" "}
							<br class='hidden lg:block' /> Map and ArcGIS{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Innovations;
