// Import Node.js built-in 'path' module for handling file paths
const path = require('path');

// Import the HtmlWebpackPlugin to generate an HTML file automatically
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point of the application
  entry: './src/index.js',

  // Output configuration
  output: {
    // Output directory as an absolute path
    path: path.resolve(__dirname, 'dist'),
    // Output bundle file name
    filename: 'bundle.js',
    // Clean the output directory before each build
    clean: true,
    // Public URL of the output when referenced in a browser (will be updated for GitHub Pages)
    publicPath: './'
  },

  // Module rules for handling different file types
  module: {
    rules: [
      {
        // Use handlebars-loader for .hbs template files
        test: /\.hbs$/,
        use: 'handlebars-loader'
      },
      {
        // Use style-loader and css-loader for .css files
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  // Plugins to extend Webpack functionality
  plugins: [
    new HtmlWebpackPlugin({
      // Specify the HTML template to use
      template: './src/index.html'
    })
  ],

  // Development server configuration
  devServer: {
    // Directory to serve static files from
    static: path.join(__dirname, 'dist'),
    // Port number for the dev server
    port: 8080,
    // Enable support for history API fallback (useful for SPAs)
    historyApiFallback: true
  },

  // Set the mode to development for better debugging
  mode: 'development'
};