/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', 
		'./node_modules/preline/preline.js', 
		'./node_modules/flowbite/**/*.js'
	
	],
	theme: {
		extend: {
			colors: {
				primary: {"50":"#fafafa","100":"#f5f5f5","200":"#e5e5e5","300":"#d4d4d4","400":"#a3a3a3","500":"#737373","600":"#525252","700":"#404040","800":"#262626","900":"#171717","950":"#0a0a0a"}
			  }

		},
	},
	plugins: [
		require('preline/plugin'),
		require('flowbite/plugin')
	],
}
