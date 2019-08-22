const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",  
        })
    ],
    devtool: 'inline-source-map',
    module: {
        rules: [
            { test: /\.css$/, use:['style-loader', 'css-loader']},
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: "url-loader?limit=100000" },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader",
                    options: { minimize: true }
                  }
                ]
              }
        ]
    }
};






