module.exports = {
    entry: {
        main: './src/index.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    esModule: false,
                },
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[contenthash].[ext]',
                        outputPath: 'imgs',
                    }
                }
            }
        ]
    }
};