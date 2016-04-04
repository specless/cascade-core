var postcss = require('postcss');
var settings = require(__dirname + '/plugin.json');

module.exports = postcss.plugin('postcss-after', function () {
    return function (css, result) {
    	css.walk(function (node) {
    		// Write you plugin here
    	});
    }
});