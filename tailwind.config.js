/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		fontFamily: {
			serif: ["Public Sans", "sans-serif"],
		},
		extend: {
			colors: {
				// ### Primary

				"DarkBlue": "hsl(233, 26%, 24%)",
				"LimeGreen": "hsl(136, 65%, 51%)",
				"BrightCyan": "hsl(192, 70%, 51%)",

				// ### Neutral

				"GrayishBlue": "hsl(233, 8%, 62%)", // nav text
				"LightGrayishBlue": "hsl(220, 16%, 96%)", // dark esction bg
				"VeryLightGray": "hsl(0, 0%, 98%)", //bright section bg
				"White": "hsl(0, 0%, 100%)",

				"-atribution": "hsl(228, 45%, 44%)",
			},
      backgroundImage: {
				"desk": "url(../images/bg-intro-desktop.svg)",
				"mobile": "url(../images/bg-intro-mobile.svg)",
			}
		},
	},
	plugins: [],
	darkMode: "class",
};
