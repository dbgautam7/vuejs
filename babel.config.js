module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  rules: [
    {
     test: /\.svg$/,
     loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
    },
  ],
}
