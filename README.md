<h2>About<h2>
Slide Form is a form builder for simple sliding forms. The index.js file has an example implementation of what SlideForm can do. Feel free to contribute and add features.

<h2>To Use:<h2>
1. npm i sliform
2. npm i -D tailwindcss
3. npx tailwindcssinit
4. add this to you tailwindcss.config file:

/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: [
"./pages/**/_.{js,ts,jsx,tsx}",
"./components/\*\*/_.{js,ts,jsx,tsx}",
// Or if your project doesn't have 'pages' or 'components' directories, you can do:
"./_.{html,js}", // <- This includes all .html and .js files in your project root
"./src/\*\*/_.{html,js}", // <- This includes all files in a src directory
"./node_modules/sliform/\*_/_.js", // Ensure this matches the path to your library
],
theme: {
extend: {},
},
plugins: [],
};

Download it using npm i sliform or visit [npmjs.com](https://www.npmjs.com/package/sliform)

If you have a project that uses SlideForm, please open an issue so I can mention it.
