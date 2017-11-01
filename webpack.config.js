var sass = encodeURIComponent(jsonToSassVars(sassGlobals));
var webpackConfig = {
    module: {
        loaders:[
            {test: /.scss$/, loader: "style!css!sass!prepend?data=" + sass}
        ]
    },
}