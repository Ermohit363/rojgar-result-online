// tailwind.config.js
export default {
    darkMode: 'class', // important!
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './content/**/*.md', // <— add this if your markdown is in "content" folder
    './app.vue',
  ],
}
