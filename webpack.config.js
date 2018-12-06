//entry -> output 

const path = require('path');
// console.log(path.join(__dirname, 'public'));

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    // loader 
    module: {
        rules: [{
            loader: 'babel-loader',
            //files end with .js 
            test: /\.js$/,
            //run thorugh node_module thorugh bable so exclude the node_module
            exclude:/node_modules/
        },{
            //make css and scss file extension
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};

