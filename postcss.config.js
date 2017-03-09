module.exports = {
  plugins: [
    require('postcss-smart-import'),
    require('precss')({ "import": { disable: true }}),
    require('autoprefixer')
  ]
}
