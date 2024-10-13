/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', 
		'./node_modules/preline/preline.js', 
		'./node_modules/flowbite/**/*.js'
	
	],
	theme: {
		extend: {
			colors: {
				primary: {
					transparent: 'transparent',
					current: 'currentColor',
					"swrokslite":"#93bfcf",
					"swroksdark":"#6096b4",
					"950":"#0a0a0a"
				
				}
			  }

		},
	},
	plugins: [
		require('preline/plugin'),
		require('flowbite/plugin')
	],
}
