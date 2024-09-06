/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'r-white': "var(--white)",
        'r-black': "var(--black)",
        'r-gray': "var(--gray)",
        'r-green': "var(--green)",
        'r-ash': "var(--ash)",
      },
    },
  },
  plugins: [],
};
