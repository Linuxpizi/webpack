/**
 * Created by TangSong on 2017/6/20.
 */

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:{
        main:'./app/index.js',
        vendor:'moment'
    },
    output:{
        filename:'[name].[chunkhash].js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:'/\.css$/',
                use:ExtractTextPlugin.extract({
                    use:'css-loader'
                })
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor'
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     //(options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
        //     sourceMap:options.devtool && (options.devtool.indexOf("sourceMap") >= 0 || options.devtool.indexOf("source-map") >= 0)
        // }),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('production')
        // })

        //webpack -p = --define process-env.NODE_ENV="'production'"
    ]
};
