import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography"; // Import the plugin

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			main: "var(--main-font)",
			meta: "var(--meta-font)",
		},
		extend: {
			animation: {
				"carousel-scroll": "carousel-scroll 30s linear infinite",
			},
			keyframes: {
				"carousel-scroll": {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-50%)" },
				},
			},
		},
	},
	plugins: [typography], // Add typography plugin here
} satisfies Config;
