import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Home/Hero";
import Ease from "@/components/Home/Ease";
import Screens from "@/components/Home/Screens";
import { useTheme } from "next-themes";
import Core from "@/components/Home/Core";
import Partner from "@/components/Partner";
import FAQ from "@/components/Home/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
	const { theme, setTheme } = useTheme();
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<Head>
				<title>Transrisk AI</title>
				<meta name='description' content='Transrisk' />

				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
			</Head>

			<Navbar />

			{/* <label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" />
  <div class="w-11 h-6 bg-muddy peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple ">
  <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
  
      </button>
  </div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
	Toggle me</span>
</label> */}

			<div className='container mx-auto my-8'>
				<div className='px-8 py-4 lg:px-24 lg:py-8'>
					<Hero />
					<Ease />
				</div>
				<div className='px-4 py-4 lg:px-32 lg:py-8'>
					<Screens />
					<Core />
					<Partner />
				</div>
				<div className='px-4 py-4 lg:px-32 lg:py-8'>
					<FAQ />
				</div>
				<div className='px-8 py-4 lg:px-32 lg:py-8'>
					<Footer />
				</div>
			</div>
		</>
	);
}
