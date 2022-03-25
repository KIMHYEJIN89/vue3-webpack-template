//import 가져오기
const path = require('path') //NodeJS에서 파일 및 디렉토리 경로 작업을 위한 전역 모듈
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')

// export  데이터 내보내기
module.exports = {
    
    resolve : {
        extensions : ['.js', '.vue'], //확장자 생략 하겠금

        //경로별칭
        alias:{
            '~': path.resolve(__dirname , 'src'),
            'assets':path.resolve(__dirname, 'src/assets')
        }

    },
    // 파일을 읽어들이기 시작하는 진입점 설정
    entry:'./src/main.js',
    
    // 결과물(번들)을 반환하는 설정
    output:{
        // path:path.resolve(__dirname,'dist'),
        // filename:'main.js',
        clean:true // 새롭게 빌드 명령 하였을때, 기존에 필요없는 파일들은 제거
    },

    module:{
        rules: [
            {
                test: /\.vue$/,
                use:'vue-loader'
            },
            {
                test: /\.s?css$/,
                use:[
                    'vue-style-loader', //가장 마지막 해석
                    'style-loader',
                    'css-loader', 
                    'postcss-loader',
                    'sass-loader'//먼저 해석 됨
                ]
            },
            {
                test: /\.js$/,
                use:[
                    'babel-loader' //webpack이 해석 하겠금 loader써야함
                ]
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    },
    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins:[
        new HtmlPlugin({
            template : './index.html'
        }),
        new CopyPlugin ({ // dist에서 상대경로로 이미지 찾을 때 도움주는 플러그인
            patterns: [
                { from: 'static'}
            ]
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        host:'localhost'
    }
}
