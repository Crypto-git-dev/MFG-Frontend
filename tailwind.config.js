/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			lineHeight: {
				lHeight: "75px",
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
				"1xl": "1.3rem",
				sm: "14px", // Another custom size
				"6xl": "4.8rem", // Another custom size
				lxl: "130px",
			},
			fontFamily: {
				body: ["GT Walsheim Trial"],
			},
		},
		colors: {
			blue: "#1C1E53",
			brand: "#226692",
			white10: "white",
			blue10: "#0007C2",
			dark10: "black",
			red10: "red",
			grey10: "gray",
			gray20: "#EAECF0",
			green10: "#22C55E",
			red20: "#EF4444",
			gray30: "#F9FAFB",
			gray40: "#667085",
			gray50: "#e3e3e3",
			gray60: "#A1A1AA",
			blue20: "#1D4ED8",
			blue30: "#1C1E53",
			gray70: "#585757",
			pink10: "#7F56D9",
			blue100: "#282B6D",
			yellow500: "#F7C926",
		},
	},
	plugins: [],
};
