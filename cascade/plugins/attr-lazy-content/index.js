Specless.component('LazyContent', window, function (specless, _, extendFrom, factories, ad, $, plugins) {
	plugins.LazyContent = function(name) {
		var selector = "[data-lazy-content='" + name + "']";
		var el = $(selector);
		var newName = name.split(' ').join('_');
		var filename = "lazy-content_" + newName;
		var lazyContent = {};
		lazyContent.loadStart = document.createEvent('Event');
		lazyContent.loadSuccess = document.createEvent('Event');
		lazyContent.loadFail = document.createEvent('Event');
		lazyContent.loadStart.initEvent('loadStart', true, true);
		lazyContent.loadSuccess.initEvent('loadSuccess', true, true);
		lazyContent.loadFail.initEvent('loadFail', true, true);
		lazyContent.src = el.attr("data-lazy-src");
		lazyContent.el = el.get(0);
		lazyContent.load = function() {
			el.get(0).dispatchEvent(lazyContent.loadStart);
			var html;
			if (el.attr("data-lazy-state") === "waiting") {
				el.attr("data-lazy-state", "loading");
				var src = el.attr("data-lazy-src");
				var request = new XMLHttpRequest();
				request.open('GET', src);
				request.onreadystatechange = function() {

					if (request.readyState == 4 && request.status == 200) {
						html = request.responseText;
						var tempWrapper = document.createElement('div');
						tempWrapper.innerHTML = html;
						_.each(tempWrapper.children, function(child) {
							if (child !== undefined) {
								try {
									el.get(0).appendChild(child);
								} catch (error) {
									var span = document.createElement('span');
									span.innerHTML = child;
									el.get(0).appendChild(span);
								}
							}
						});
						var script = $("#" + filename).text();
						eval(script);
						el.attr("data-lazy-state", "ready");
						el.get(0).dispatchEvent(lazyContent.loadSuccess);
					}
				}
				try {
					request.send();
				} catch (error) {
					console.warn("Loading lazy content failed. Error: " + error);
					el.get(0).dispatchEvent(lazyContent.loadFail);
				}
			} else {
				console.warn("The lazy content area '" + name  + "' has already been loaded.");
				el.get(0).dispatchEvent(lazyContent.loadSuccess);
			}
		};
		lazyContent.on = function(eventName, callback) {
			el.get(0).addEventListener(eventName, callback, false);
		};
		return lazyContent;
	}
	// plugins.LazyContent.load = function(name) {
	// 	var selector = "[data-lazy-content='" + name + "']";
	// 	var filename = "lazy-content_" + name;
	// 	var el = $(selector);
	// 	var html;
	// 	var loadStartEvent = document.createEvent('Event');
	// 	var loadEndEvent = document.createEvent('Event');
	// 	loadStartEvent.initEvent('loadStart', true, true);
	// 	loadEndEvent.initEvent('loadEnd', true, true);
	// 	if (el.attr("data-lazy-state") === "waiting") {
	// 		el.attr("data-lazy-state", "loading");
	// 		var src = el.attr("data-lazy-src");
	// 		var request = new XMLHttpRequest();
	// 		request.open('GET', src);
	// 		request.onreadystatechange = function() {

	// 			if (request.readyState == 4 && request.status == 200) {
	// 				html = request.responseText;
	// 				var tempWrapper = document.createElement('div');
	// 				tempWrapper.innerHTML = html;
	// 				_.each(tempWrapper.children, function(child) {
	// 					console.log(child);
	// 					if (child !== undefined) {
	// 						try {
	// 							el.get(0).appendChild(child);
	// 						} catch (error) {
	// 							var span = document.createElement('span');
	// 							span.innerHTML = child;
	// 							el.get(0).appendChild(span);
	// 						}
	// 					}
	// 				});
	// 				var script = $("#" + filename).text();
	// 				eval(script);
	// 				el.attr("data-lazy-state", "ready");
	// 			}
	// 		}
	// 		try {
	// 			request.send();
	// 		} catch (error) {
	// 			console.log("Loading lazy content failed. Error: " + error);
	// 		}
	// 	} else {
	// 		console.warn("The lazy content area '" + name  + "' has already been loaded.");
	// 	}
	// }
});