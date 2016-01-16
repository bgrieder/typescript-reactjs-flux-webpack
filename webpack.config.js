//var webpack = require( 'webpack' ); //Comment this out if you want to use the noErrorsPlugin below

module.exports = {
    //The sources of this app are made from a Typescript file and a Less file,
    //These "entry points" will both respectively import their Typescript and less dependencies
    entry: {
        app: [
            './typescript/app.ts',
            './less/app.less'
        ]
    },
    //The output is a single bundle of js and css which is loaded by index.html
    output: {
        path: './public/js/generated', //Path where bundle.js is generated on the file system
        publicPath: '/js/generated/', //Relative parent URL of the bundle
        filename: 'bundle.js'
    },
    //The list of extension that will be resolved for modules
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.less', '.css']
    },
    //JQuery and React are directly loaded in index.html using a script tags
    // so they must not be bundled.
    // 1. smaller bundle = faster generation times
    // 2. browser caching can be used on these two libraries
    externals: {
        "jquery": "jQuery",
        "react/addons": "React"
    },
    // ts-jsx-loader: will transform the React.jsx calls with the passed JSX into React Typescript
    // ts-loader will transpile the Typescript into Javascript
    // less: transpiles LESS into CSS
    // css: generates a 'compiled' CSS string
    // style: insert a style tag with the CSS in the page
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts-loader?sourceMap!ts-jsx-loader'},
            {test: /\.less$/, loader: "style!css!less"}
        ]
    }
    // Optional plugin which prevents the display of an error page in case of
    // a compilation error when using webpack-dev-server
    //plugins: [
    //    new webpack.NoErrorsPlugin() //Stops hot reloading until the compilation error is fixed
    //]
};
