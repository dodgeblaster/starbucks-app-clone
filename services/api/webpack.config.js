const path = require('path')
const slsw = require('serverless-webpack')

const entries = {}

Object.keys(slsw.lib.entries).forEach(
    key => (entries[key] = ['./source-map-install.js', slsw.lib.entries[key]])
)

module.exports = {
    mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
    entry: entries,
    devtool: 'none',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.graphql', '.tsx'],
        mainFields: ['main', 'module']
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js'
    },
    target: 'node',
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: 'ts-loader' },
            {
                test: /\.graphql$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'graphql-import-loader'
                    }
                ]
            }
        ]
    }
}
