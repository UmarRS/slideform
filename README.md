## About

Slide Form is a form builder for simple sliding forms. The `index.js` file has an example implementation of what SlideForm can do. Feel free to contribute and add features.

## To Use

1. Install SlideForm and its dependencies:
   ```bash
   npm i sliform
   npm i -D tailwindcss
   npx tailwindcss init
   ```
2. Add this to your tailwind.config.js file:

```bash
    /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if your project doesn't have 'pages' or 'components' directories, you can do:
    "./*.{html,js}", // <- This includes all .html and .js files in your project root
    "./src/**/*.{html,js}", // <- This includes all files in a src directory
    "./node_modules/sliform/**/*.{js}", // Ensure this matches the path to your library
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

```

## Mentions

If you have a project that uses SlideForm, please open an issue so I can mention it.
