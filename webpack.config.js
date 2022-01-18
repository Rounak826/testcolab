const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    
    entry:{
        main: path.resolve(__dirname,"src/app.js")
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],


            }, 
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { 
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            } 
        ]
    },
    devtool: 'inline-source-map', 
    output: {
        path: path.resolve(__dirname,"dist"),
        filename:"[name].bundle.js"
    },
    plugins: [new HtmlWebpackPlugin()],
    mode: "development" 
}