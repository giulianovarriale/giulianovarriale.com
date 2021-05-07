const tailwindcss = require('tailwindcss');

module.exports = {
  siteName: 'Giuliano Varriale',
  siteUrl: 'giulianovarriale.com',

  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-48930934-1'
      }
    }
  ],

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
