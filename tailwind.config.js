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
			lateIn: {
				'0%': { transform: 'translateX(-100%)', opacity: 0 },
				'100%': { transform: 'translateX(0%)', opacity: 1 },
			},
			textAnim: {
				'0%': { color: 'white' },
				'100%': { color: 'orange' },
			}
		},
		animation: {
			'fade-in': 'fadeIn 0.5s linear',
			'late-in': 'lateIn 0.5s ease-in 0.3s',
			'text-anim': 'textAnim 1.5s ease-in-out 1s infinite',
		},
		backgroundImage: {
			main:
			"url('./src/assets/bubble-light.jpeg')",
		},
    },
  },
  plugins: [],
}

