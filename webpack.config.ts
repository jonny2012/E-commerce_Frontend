const  path = require ('path');
const HtmlWebpackPlugin =  require( 'html-webpack-plugin');
const  MiniCssExtractPlugin = require( 'mini-css-extract-plugin');


module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  resolve: {
 
      alias: {
        components: path.resolve(__dirname, './src/components'),
        modules: path.resolve(__dirname, './src/modules'),
        pages: path.resolve(__dirname, './src/Pages')
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"], // add other extensions if needed
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/build",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css[name].css",
    }),
  ],
  devServer: {
    port: 3333,
    open: true,
    historyApiFallback:true
  },
  module: {
    rules: [
      {
        test: /\.(ts)x?$/i, // Match .ts and .tsx files
        use: {
          loader: "ts-loader",
          options: {
            compilerOptions: {
              module: "CommonJs",
            },
          },
        }, // Use ts-loader for TypeScript files
        exclude: /node_modules/,
      },
      {
        test: /\.module\.(scss)$/, // For CSS/SCSS modules (only files with .module.scss or .module.sass)
        use: [
         MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              esModule:false,
              sourceMap:false,
              exportType:"array",
              modules:{
                localIdentName: '[hash:base64:5]', // Naming convention for CSS modules
              
              }
            },
          },
          {loader:'sass-loader',
          }, // Use Sass (SCSS)
        ],
      },
      {
        test: /\.scss$/, // Match global SCSS files (non-modules)
        exclude: /\.module\.scss$/, // Exclude module files to prevent conflict
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into separate files
          'css-loader', // Translates CSS into CommonJS
          'sass-loader', // Compile SCSS to CSS
        ],
      },
      {
        test: /\.css?$/,
        use:["style-loader", "css-loader"]
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },

      {
        test: /\\.(png|jp(e*)g|svg|gif)$/,
        use: ["@svgr/webpack", "file-loader"],
      },
    ],
  },
};
