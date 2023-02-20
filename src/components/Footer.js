import React from "react";
import Image from "next/image";

function Footer() {
	return (
		<div>
            <footer className=" mt-8">
            <div className="flex items-center justify-between">
            <a href='#'>
				<div className="lg:pl-10">
			<picture >
   <source srcset="/transrisk.svg" media="(prefers-color-scheme: dark)" />
   <img src="/Transriskl.svg" alt="Light Mode Image" />
</picture>
</div>
						</a>
                        <div className="flex flex-row space-x-3 lg:space-x-6 items-center justify-between">
                        <a
							href='#'
							class='text-gray-400 hover:text-gray-900 dark:hover:text-white'
						>
									<picture >
   <source srcset="/twitter.svg" media="(prefers-color-scheme: dark)" />
   <img src="/twitterl.svg" alt="Light Mode Image" />
</picture>

							<span class='sr-only'>Twitter page</span>
						</a>
						<a
							href='#'
							class='text-gray-400 hover:text-gray-900 dark:hover:text-white'
						>
								<picture >
   <source srcset="/linkedin.svg" media="(prefers-color-scheme: dark)" />
   <img src="/linkedinl.svg" alt="Light Mode Image" />
</picture>

							<span class='sr-only'>LinkedIn</span>
						</a>
						<a
							href='#'
							class='text-gray-400 hover:text-gray-900 dark:hover:text-white'
						>
								<picture >
   <source srcset="/facebook.svg" media="(prefers-color-scheme: dark)" />
   <img src="/facebookl.svg" alt="Light Mode Image" />
</picture>

							<span class='sr-only'>Facebook page</span>
						</a>

						<a
							href='#'
							class='text-gray-400 hover:text-gray-900 dark:hover:text-white'
						>
							<picture >
   <source srcset="/message.svg" media="(prefers-color-scheme: dark)" />
   <img src="/messagel.svg" alt="Light Mode Image" />
</picture>

							<span class='sr-only'>Message </span>
						</a>
                        </div>
            </div>

            <div className="lg:ml-8 lg:pl-2 flex items-center justify-center lg:justify-start pt-8">
			<picture >
   <source srcset="/copy.svg" media="(prefers-color-scheme: dark)" />
   <img src="/Copyl.svg" alt="Light Mode Image" />
</picture>
<p className="pl-5">2023. Transrisk.AI INC</p>
            </div>

            </footer>
			
		</div>
	);
}

export default Footer;
