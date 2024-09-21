
module.exports = {
  cache:false,
  module: {
    rules: [
      {
        test: /\.scss$/, // To process SCSS files
        use: [
          'style-loader', // Injects styles into the DOM
          {
            loader: 'css-loader',
            options: {
              modules: {
                // This controls the name of the generated CSS classes
                localIdentName: '[local]', 
               
              },
            },
          },
          'sass-loader', // Compiles Sass to CSS
        ],
      },
      { test: /\\.(png|jp(e*)g|svg|gif)$/, use: ['@svgr/webpack', 'file-loader'], }
    ],
  },

};