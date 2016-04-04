module.exports = function(api, node) {
	var options = node.attrs;
	var id = options.id;
	var configFile = api.readFile("plugin.json");

	if (node.attrs === undefined) {
		node.attrs = {}
	}
	if (node.attrs.class === undefined) {
		node.attrs.class = "swiper-container";
	} else {
		node.attrs.class = node.attrs.class + " swiper-container";
	}

	var elementToClass = {
		"ad-slider-slide" : "swiper-slide",
		"ad-slider-pagination" : "swiper-pagination",
		"ad-slider-prev" : "swiper-button-prev",
		"ad-slider-next" : "swiper-button-next",
		"ad-slider-scrollbar" : "swiper-scrollbar"
	}

	var wrapper = {
		tag: "div",
		attrs: {class: "swiper-wrapper"},
		content: []
	};
	
	_.each(elementToClass, function(value, key, object) {
		if (node.content !== undefined) {
			for (i = 0; i < node.content.length; i++) { 
				var element = node.content[i];
				if (element.tag === key) {
					var oldTag = element.tag;
					options["has_" + object[key]] = true;
					element.tag = "div";
					if (element.attrs === undefined) {
						element.attrs = {}
					}
					if (element.attrs.class === undefined) {
						element.attrs.class = value;
					} else {
						element.attrs.class = element.attrs.class + " " + value;
					}
					if (oldTag === "ad-slider-slide") {
						wrapper.content.push(element);
						node.content.splice(i, 1);
					}
				}
			}
		}
	});
	if (node.content === undefined) {
		node.content = [wrapper];
	} else {
		node.content.splice(1, 0, wrapper);
	}
	options = JSON.stringify(options);
	var script = "ad.plugins.Slider('" + id + "'," + options + ");";
	api.addScriptFragment(script);
	return node;
}
