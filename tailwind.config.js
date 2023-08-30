/** @type {import('tailwindcss').Config} */
export default {
  content: [
		"index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
		keyframes: {
			fadeIn: {
				'0%': { transform: 'translateY(0)' },
				'50%': { transform: 'translateY(-100%)' },
				'100%': { transform: 'translateY(0%)' },
			},
		},
		animation: {
			'fade-in': 'fadeIn 0.5s linear',
		},
		backgroundImage: {
			main:
			"url('./src/assets/bubble-light.jpeg')",
		},
    },
  },
  plugins: [],
}

