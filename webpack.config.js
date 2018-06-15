const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VueLoaderStyle = require('css-loader');
const VueLoaderOptionsPlugin = require('vue-loader-options-plugin')

module.exports = {
    mode: 'development',
    entry : './src/app/main.js',
    output: {
        path: path.join(__dirname,'src/public/js'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
          vue: 'vue/dist/vue.js'
        }
      },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader',
                exclude: /node_modules/
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                loader:'css-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins:
    [
        new VueLoaderPlugin(),
        new VueLoaderOptionsPlugin({
            babel: { // options for babel-loader, if you don't want `.babelrc`
              presets: ['es2015', 'stage-2'],
              plugins: ['transform-runtime', 'transform-object-rest-spread']
            }
          })
    ]
    
}

