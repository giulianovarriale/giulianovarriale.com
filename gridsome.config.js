const tailwindcss = require('tailwindcss');

module.exports = {
  siteName: 'Giuliano Varriale',
  siteUrl: 'giulianovarriale.com',

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
