const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            templateContent: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>SPA Example</title>
</head>
<body>
  <nav>
    <a href="/home" data-link>Home</a>
    <a href="/products" data-link>Products</a>
    <a href="/about" data-link>About</a>
  </nav>
  <div id="app"></div>
</body>
</html>
            `,
            filename: 'index.html',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        historyApiFallback: true,
        open: true,
        port: 8080,
    },
};