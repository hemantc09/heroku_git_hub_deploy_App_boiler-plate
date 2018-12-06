//entry -> output 

const path = require('path');
// console.log(path.join(__dirname, 'public'));
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
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
            use: CSSExtract.extract({
                use: [
                    {
                        loader:'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader:'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                   
                ]
            })
        }]
    },
    plugins: [
        CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
    }
}
