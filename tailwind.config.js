/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "media",
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontSize: {
			"sm": '0.8rem',
      "base": '1rem',
	  "lg": "1.125rem",
			"xl": "1.25rem",
			"2xl": "1.563rem",
			"3xl": "1.953rem",
			"4xl": "2.441rem",
			"5xl": "3.052rem",
			"10xl": "12rem",
			"5xl": "3.052rem",
			"6xl": "3.75rem",
		},
		colors: {
			purple: "#d0bcff",
			grey: "#938F99",
			blacky: "#1C1B1F",
			blacck: "#111111",
			muddy: "#938F99",
			whitey: "#FFFFFF",
			greyy: "#49454F",
			
		},
		extend: {
			backgroundImage: {
				'about-pattern': "url('/back.png')",
			},

			fontFamily: {
				sans: ["DM Sans"],
			},

			spacing: {
				
				'105': '25rem',
				'128': '32rem',
				'144': '36rem',
			  }
		},
	},
	plugins: [],
};
