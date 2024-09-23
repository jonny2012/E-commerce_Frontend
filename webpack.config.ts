import path from "path"
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"



module.exports = {
  cache: false,
  mode: "development",
  entry: './src/index.tsx',
  devtool: "inline-source-map",
  resolve: {
    alias: {
      modules: path.resolve(__dirname, 'src/modules/'),
      assets: path.resolve(__dirname, 'src/assets/'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // add other extensions if needed
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
    clean: true
  },
  plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html") }),
  new MiniCssExtractPlugin({
    filename: "css/[name].[contenthash:8].css",
    chunkFilename: "css[name].css",

  })
  ],
  devServer: {
    port: 3333,
    open: true
  },
  module: {

    rules: [

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource'

      },
      {
        test: /\.(ts)x?$/i,  // Match .ts and .tsx files
        use: {
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              module: "CommonJs"
            }
          }
        }, // Use ts-loader for TypeScript files
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap:true,
              modules: {
               localIdentName: '[local]_[hash:base64:5]'
              }
            }
          },
          {loader:'sass-loader',
            options:{
              sourceMap:true,
              modules:true,
            }
          },

        ],
      },
      { test: /\.(c|sc)ss$/,  'typings-for-css-modules-loader?modules&sass' },

      { test: /\\.(png|jp(e*)g|svg|gif)$/, use: ['@svgr/webpack', 'file-loader'], }
    ],
  },

};