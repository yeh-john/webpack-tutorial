// Any OS can use this
const path = require('path');

module.exports = {
    // Setting mode
    mode: "development",

    context: path.join(__dirname, "src"),
    // Load file
    entry: `./index.js`,

    // Output file
    output: {
        path: path.join(__dirname, "dist"),
        filename: "main.js"
    },

    module:{
        rules:[
            {
                /* test = .filename */
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(gif|png|jpg|svg)$/,
                type: "asset/resource",
            }
        ]
    }
}