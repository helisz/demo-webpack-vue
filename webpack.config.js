// 声明入口
const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV === 'development'  // 环境变量配置


const config = {
    target: 'web',  // webpack 编译目标
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename:'bundle.js',
        path:path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },{
                test: /\.css$/,
                use: [
                    'style-loader',     // css 写到html文件
                    'css-loader'        //读取css文件
                ]
            },{
                test: /\.scss$/,
                use: [
                    "style-loader",  
                    "css-loader",   
                    "sass-loader"
                ]
            },{
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader: 'url-loader', // 图片转换成BASE64代码，对几KB的小文件可以这样用
                        options: {
                            limit: 1024, //尺寸大小，小于这个值则转换为BASE64
                            name: '[name]-converted.[ext]' // 输出格式
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // 判断环境
        // 同时提供了全局变量，区分开发或者生产环境。一些配置信息是不需要在生产环境运行。
        // 引用: process.env.NODE_ENV
        // 注意: 因为最终传递的是string类型的配置名，所以单引号内部需要加上双引号
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin()
    ],
    mode:'none' // make bundle.js readable   
}

// 开发环境配置
if(isDev){
    config.devServer = {
        port: 8000,
        host: '0.0.0.0',
         // 错误处理
        overlay: {
            errors: true
        }
        
    }
}

module.exports = config