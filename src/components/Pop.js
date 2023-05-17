import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Pop({ setOpenPopModal,  }) {
	const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4iotb2f', 'template_h7o1skr', form.current, '4Gu45lfT-wl6l6PyL')
      .then((result) => {
          console.log(result.text);
		  e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

	return (
		<>
			<div className='fixed inset-0 z-10 bg-whitey overflow-y-auto bg-opacity-25 backdrop-blur-sm flex items-center justify-center'>
				<div
					className='fixed inset-0 w-full h-full  '
					onClick={() => setOpenPopModal(false)}
				></div>
				<div className='flex items-center min-h-screen px-2 py-8'>
					<div className='relative md:w-[412px] w-full max-w-lg mx-auto bg-whitey dark:bg-blacky rounded-md shadow-lg'>
						<div className=''>
							<div className='flex items-center justify-between bg-purple dark:bg-whitey p-2'>
								<h4 className='text-lg font-medium text-blacky dark:text-blacky'>
									Become a Partner
								</h4>
								<button onClick={() => setOpenPopModal(false)}>
									<svg
										width='40'
										height='40'
										viewBox='0 0 40 40'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M27 14.41L25.59 13L20 18.59L14.41 13L13 14.41L18.59 20L13 25.59L14.41 27L20 21.41L25.59 27L27 25.59L21.41 20L27 14.41Z'
											fill='#1C1B1F'
										/>
									</svg>
								</button>
							</div>
							<div className='p-4 '>
								<form ref={form} onSubmit={sendEmail} class='w-full max-w-sm'>
									<div class='flex flex-col w-full items-center '>
										<div className='w-full flex items-start text-left'>
											<input
												class='appearance-none  bg-transparent border-0 border-b border-greyy w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none'
												type='text'
												placeholder='First Name'
												aria-label='First name'
												name="first_name"
											/>
										</div>
										<div className='w-full flex items-start text-left'>
											<input
											name="last_name"
												class='appearance-none bg-transparent border-0 border-b border-greyy w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none'
												type='text'
												placeholder='Last Name'
												aria-label='Last name'
											/>
										</div>
										<div className='pt-5 w-full flex items-start text-left'>
											<input
											name="user_email"
												type='email'
												id='email'
												className='appearance-none dark:appearance-none  text-gray-700 bg-transparent dark:bg-transparent border-0 dark:border-b border-b border-greyy w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none '
												placeholder='Email Address'
												required
											/>
										</div>
										<div className='flex items-center pt-5'>
											<button
												type='submit'
												value="Send" 
												class='text-black bg-purple hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-purplee dark:text-black dark:hover:bg-blue-700 dark:focus:ring-blue-800'
											>
												Partner
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
