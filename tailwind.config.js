/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			lineHeight: {
				lHeight: "75px",
			},
			gradientColorStopPositions: {
				37: "37%",
				67: "67%",
			},
			linearGradients: {
				"custom-gradient": [
					"0% 0%",
					"37% 0%",
					"67% 0%",
					"100% 0%",
					"#ff0000",
					"#00ff00",
					"#0000ff",
					"#ffff00",
				],
			},
			height: {
				custom1: "100vh",
				200: "90px",
				80: "80px",
				50: "50px",
			},
			width: {
				"width-full": "100%",
				"width-100": "100px",
				"width-200": "200px",
				50: "50px",
			},
			fontSize: {
				"2xl": "1.75rem",
				smxl: "18px",
				"4xl": "3.8rem",
				"3xl": "1.5rem",
				"5xl": "3rem",
				"1xl": "1.4rem",
				sm: "14px", // Another custom size
				"6xl": "4.8rem", // Another custom size
				lxl: "130px",
				"4xl": "2.2rem",
				"2.5xl": "1.8rem",
				"4.5xl": "2.8rem",
			},
			fontFamily: {
				body: ["GT Walsheim Trial"],
			},
			colors: {
				white10: "white",
				dark10: "black",
				yellow500: "#F7C926",
				shallowgray: "#F9F9F9",
			},
		},
	},
	plugins: [require("tailwindcss-gradients")],
};
