var beautify = require('js-beautify').js_beautify;
var beautify_html = require('js-beautify').html;

module.exports = function(api, node) {
	var contentCopy = node.content.slice(0);
	_.each(node.content, function(element) {
		if (element.attrs !== undefined) {
			if (_.has(element.attrs, "lazy-content-loader") === true) {
				var index = node.content.indexOf(element);
				node.content[index] = "";
			}
		}
	});
	var html = api.renderHtml(node.content);
	var component = api.component.name;
	var name = node.attrs["data-lazy-content"];
	name = name.split(' ').join('_');
	var filename = "lazy-content_" + name;
	node.content = [];
	_.each(contentCopy, function(element) {
		if (element.attrs !== undefined) {
			if (_.has(element.attrs, "lazy-content-loader") === true) {
				element.attrs["data-lazy-content-loader"] = element.attrs["lazy-content-loader"]
				delete element.attrs["lazy-content-loader"];
				node.content.push(element);
			}
		}
	});
	node.attrs["data-lazy-src"] = "/assets/" + filename + ".html";
	node.attrs["data-lazy-state"] = "waiting";
	html = app.utils.processHtml.run(html, component, filename);
	html = beautify_html(html, {indent_size: 4});
	var scripts = app.project.pluginScriptFragments.lazyContent[filename];

	if (scripts !== undefined) {
		scripts = scripts.join("\n");
		scripts = beautify(scripts, { indent_size: 4});
		scriptTag = "\n<script id='" + filename + "' type='text/plain'>\n" + scripts + "\n</script>";
		html = html + scriptTag;
	}
	api.writeFile(filename + ".html", html);
	return node
}

