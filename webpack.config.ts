module.exports = {
    module: {
      rules: [
        {
          test: /\.scss$/, // To process SCSS files
          use: [
            'style-loader', // Injects styles into the DOM
            {
              loader: 'css-loader',
              options: {
                modules: true, // Enable CSS Modules
              },
            },
            'sass-loader', // Compiles Sass to CSS
          ],
        },
        { test: /\\.(png|jp(e*)g|svg|gif)$/, use: ['file-loader'], }
      ],
    },
  };