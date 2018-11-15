const tailwindcss = require('tailwindcss');

module.exports = {
  siteName: 'Giuliano Varriale',
  siteUrl: 'giulianovarriale.com',
  siteDescription: 'Giuliano Varriale, 30, front-end developer',

  plugins: [],

  chainWebpack: config => {
    config.module
      .rule('css') // or sass, scss, less, postcss, stylus
      .oneOf('normal') // or module
      .use('postcss-loader')
      .tap(options => {
        options.plugins.push(tailwindcss('./tailwind.js'))
        return options
      })
  },
}
