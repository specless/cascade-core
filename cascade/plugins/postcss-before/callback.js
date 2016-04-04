var postcss = app.utils.postcss;
var pluginJson = require(__dirname + '/plugin.json');

module.exports = postcss.plugin('blank', function () {
    return function (css, result) {
    	css.walk(function (node) {
    		// Write you plugin here
    	});
    }
});