const cssnano = require('cssnano');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('postcss-import-url'),
    cssnano({
      autoprefixer: false,
      preset: ['default'],
    }),
  ],
}
