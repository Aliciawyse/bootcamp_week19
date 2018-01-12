//lets app know where going to use file extensions .js and .jsx.

//also takes all javascript files we're building and bundles it into a single on that can be viewed in our index.html file.
const path = require('path');

module.exports = {
    context: path.join(__dirname, './'),
    entry: './app/app.jsx',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'jsx-loader',
                exclude: /node_modules/,
                include: path.join(__dirname, 'app'),
            },
        ],
    },
};