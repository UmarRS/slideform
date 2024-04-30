/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if your project doesn't have 'pages' or 'components' directories, you can do:
    "./*.{html,js}", // <- This includes all .html and .js files in your project root
    "./src/**/*.{html,js}", // <- This includes all files in a src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
