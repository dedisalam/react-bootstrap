import path from 'path';
import { Configuration as WebpackConfiguration, HotModuleReplacementPlugin } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import WorkboxWebpackPlugin from 'workbox-webpack-plugin';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const isProduction = process.env.NODE_ENV === 'production';

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const config: Configuration = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    open: false,
    host: 'localhost',
    historyApiFallback: true,
  },
  plugins: (() => {
    if (isProduction) {
      return [
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css',
        }),
        new WorkboxWebpackPlugin.GenerateSW(),
      ];
    }
    return [
      new HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
      new ForkTsCheckerWebpackPlugin({
        async: false,
      }),
      new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx'],
      }),
    ];
  })(),
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        exclude: ['/node_modules/'],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

export default config;
