import HtmlWebpackPlugin from 'html-webpack-plugin';

export default [
  new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
  }),
];
