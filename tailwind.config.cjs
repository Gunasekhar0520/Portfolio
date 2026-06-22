module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        cyanNeon: '#00f5ff',
        purpleNeon: '#8a2be2',
        blueNeon: '#00b3ff'
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
