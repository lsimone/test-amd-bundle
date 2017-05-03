module.exports = {
    entry: "./index.js",
    output: {
        filename: "bundle.js"
    },
    module: {
	rules: [
	    {test: /\.node$/, use: 'imports-loader?define=>false'}
	]
    }
}
