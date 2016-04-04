module.exports = function(api, node) {
	var _ = api.underscore;
	node.tag = "video";
	var configFile = api.readFile("plugin.json");
	var defaults = JSON.parse(configFile).defaultOptions;
	var devices = [":smartphone", ":tablet", ":desktop"];
	var id = node.attrs.id;

	_.each(defaults, function(value, key, obj) {
		if (_.has(node.attrs, key) === true ) {
			if (node.attrs[key] === "") {
				defaults[key] = true;
			} else {
				defaults[key] = node.attrs[key];
			}
			if (key === "aspect") {
				defaults.aspect = node.attrs[key].split(",");
				defaults.aspect[0] = Number(defaults.aspect[0]);
				defaults.aspect[1] = Number(defaults.aspect[1]);
			}
		}
		_.each(devices, function(device) {
			var attribute = key + device;
			if (_.has(node.attrs, attribute) === true) {
				if (node.attrs[attribute] === "") {
					defaults[attribute] = true;
				} else {
					defaults[attribute] = node.attrs[attribute];
				}
				if (key === "aspect") {
					defaults[aspect + device] = node.attrs[attribute].split(",");
					var aspect = defaults[aspect + device];
					aspect[0] = Number(defaults.aspect[0]);
					aspect[1] = Number(defaults.aspect[1]);
					defaults[aspect + device] = aspect;
				}
			}
		})
	});

	_.each(node.content, function(item) {
		if (item.tag === "ad-video-endframe") {
			item.tag = "div";
			if (item.attrs === undefined) {
				item.attrs = {};
			}
			item.attrs["data-element"] = "video-endframe";
		}
	});

	if (defaults["player-type"] === "youtube") {
		api.addDependency("vendorYoutube.js");
	} else if (defaults["player-type"] === "inline") {
		api.addDependency("vendorInline.js");
	}

	_.each(defaults, function(value, key, obj) {
		if (_.has(node.attrs, key) === true && key !== "id") {
			delete node.attrs[key];
		}
	});

	var options = JSON.stringify(defaults);
	var script = "ad.plugins.Video('" + id + "'," + options + ");"

	api.addScriptFragment(script);
	return node;
}
