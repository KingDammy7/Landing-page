import React from "react";
import Image from "next/image";

function Details() {
	return (
		<div className="pt-5 lg:pt-10">
			<div className='flex flex-col md:flex-row md:justify-around items-center'>
				<Image
					src='/Details.svg'
					alt='tab'
					className='relative '
					width={400}
					height={420}
					
				/>
				<div className='flex flex-col md:flex pl-3 gap-5 '>
                <p className='sm:text-base md:text-xs lg:text-base text-center md:text-left dark:text-white'>
                Idea behind the project
                        </p>
					<p className='text-xl text-center font-semibold md:text-left pt-8 md:pt-0 lg:text-2xl dark:text-white'>
						Why Transrisk.AI
					</p>
					<p className='sm:text-base md:text-xs lg:text-base text-center md:text-left dark:text-blacky'>
						We desire to use technology to make a difference{" "}
						<br class='hidden lg:block' /> in peoples lives. We recognized the
						need for a <br class='hidden lg:block' /> more comprehensive and
						real-time solution for <br class='hidden lg:block' /> drivers to
						stay safe on the road. With the <br class='hidden lg:block' />{" "}
						increasing number of accidents happening on the roads.{" "}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Details;
