/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    	"index.html",
    	"./src/**/*.{html,js}"
    ],
    theme: {
        extend: {
        	fontFamily: {
        		'quicksand': ['Quicksand', 'sans-serif'],
        	}
        }
    },
    plugins: []
};