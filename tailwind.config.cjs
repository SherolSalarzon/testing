/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
	"./src/**/*.{html,js,jsx,md,mdx,ts,tsx,astro}"
  ],
  presets: [require("./ui.preset.js")]
}