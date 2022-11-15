/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				figma: {
					primary: "#2091F9",

					"secondary-green": "#2DC071",
					"secondary-orange": "#F15B07",

					"text-main": "#252B42",
					"text-secondary": "#374754",
					"text-light": "#FFFFFF",

					"background-dark": "#252B42",
					"background-light": "#FFFFFF",
					"background-gradient": "#222B32",
				},
			},
		],
	},
	plugins: [require("daisyui"), require("@tailwindcss/forms")],
};
