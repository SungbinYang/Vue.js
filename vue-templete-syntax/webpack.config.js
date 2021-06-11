// import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const copyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');


// export
module.exports = {
    // parcel index.html
    // 파일을 읽어들이기 시작하는 진입점 설정
    // 웹팩은 js를 진입점으로 사용

    resolve: {
        extensions: ['.js', '.vue'],
        // 경로 별칭
        alias: {
            '~': path.resolve(__dirname, 'src'),
            'assets': path.resolve(__dirname, 'src/assets')
        }
    },

    entry: './src/main.js',

    // 결과물(번들)을 반환하는 과정
    output: {
        // path: path.resolve(__dirname, 'dist'), // __dirname(webpack.config.js 경로)과 'dist'를 합쳐서 절대적인 경로를 만들어준다.
        // filename: 'main.js',
        clean: true
    },

    module: {
        rules: [{
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.s?css$/,
                use: [
                    // 순서 중요
                    'vue-style-loader',
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                use: 'file-loader'
            }
        ]
    },

    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new copyPlugin({
            patterns: [
                { from: 'static' }
            ]
        }),
        new VueLoaderPlugin()
    ],

    devServer: {
        host: 'localhost'
    }
}