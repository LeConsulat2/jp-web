// tailwind.config.js
export default {
  darkMode: 'class', // ← 이걸 꼭 'class'로 설정해야 함
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {} },
  plugins: [],
};
