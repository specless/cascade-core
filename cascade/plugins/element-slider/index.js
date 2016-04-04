Specless.component('Slider', window, function (specless, _, extendFrom, factories, ad, $, plugins) {
	
	plugins.Slider = function(id, options) {
		ad.activateLocation(function() {
			options.deviceType = ad.get("deviceType");
			options = plugins.Slider.parseOptions(id, options);
			plugins.Slider.swiperSetup(id, options);
			plugins.Slider.setupTracking(id, options);
			plugins.Slider.addMethods(id);
			plugins.Slider.setupListeners(id);
		});
	}

	plugins.Slider.parseOptions = function(id, options) {
		
		var defaults = {
			nextButton : ".swiper-button-next",
			prevButton : ".swiper-button-prev",
			scrollbar : ".swiper-scrollbar",
			pagination : ".swiper-pagination",
			paginationClickable : true
		};

		if (options["has_swiper-button-next"] === undefined) {
			defaults.nextButton = null;
		}
		if (options["has_swiper-button-prev"] === undefined) {
			defaults.prevButton = null;
		}
		if (options["has_swiper-scrollbar"] === undefined) {
			defaults.scrollbar = null;
		}
		if (options["has_swiper-pagination"] === undefined) {
			defaults.pagination = null;
		}
		
		for (var key in options) {
            var newKey = key.split(":");
            if (newKey.length > 1) {
                if (newKey[1] === options.deviceType) {
                    options[newKey[0]] = options[key];
                }
            }
        }

        var newOptions = {};
        
        for (var key in options) {
        	var newKey = key.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
        	newOptions[newKey] = options[key];
        }
        
        for (var key in newOptions) {
        	defaults[key] = newOptions[key];
        }

        options = defaults;

		return options;
	}

	plugins.Slider.swiperSetup = function(id, options) {
		if (plugins.Slider.sliders === undefined) {
			plugins.Slider.sliders = {};
		}
		var element = document.getElementById(id);
		plugins.Slider.sliders[id] = new Swiper (element, options);
	}

	plugins.Slider.get = function(id) {
		var slider = plugins.Slider.sliders[id];
		return slider;
	}

	plugins.Slider.getSlideName = function(id, index) {
		var slider = plugins.Slider.get(id);
		var slide = slider.slides[index];
		var name = slide.getAttribute("data-slide-name");

		if (name === undefined || name === null) {
			name = "Slide " + (index);
		}

		return name;
	}

	plugins.Slider.currentSlideName = function(id) {
		var slider = plugins.Slider.get(id);
		var index = slider.activeIndex;
		var name = plugins.Slider.getSlideName(id, index);
		return name;
	}

	plugins.Slider.timer = function() {
		var timerOn;
        var timer = {
            c: 0,
            start: function() {
                timerOn = setInterval(function() {
                    timer.c = timer.c + 1;
                }, 1000);
            },
            stop: function() {
                clearInterval(timerOn);
            }
        }
        return timer;
	}

	plugins.Slider.setupTracking = function(id) {
		var slider = plugins.Slider.get(id);

		slider.on("init", function() {
			ad.report("slider", "load", {
                dps: id,
                dpn: 1,
                ffw: true,
                ita: false
            });
		});

		slider.on("slideChangeEnd", function() {
			ad.report("slider", "move_to_slide", {
                dps: id + "||" + plugins.Slider.currentSlideName(id),
                dpn: 1,
                ffw: true,
                ita: false
            });
		});

		// slider.on("touchEnd", function(swiper, event) {
		// 	ad.report("slider", "touch_swipe", {
  //               dps: id + "||" + plugins.Slider.currentSlideName(id),
  //               dpn: 1,
  //               ffw: true,
  //               ita: true
  //           });
  //           console.log(event);
  //           slider.once("slideChangeEnd", function() {
  //           	console.log("touch swiped");
  //           })
		// });

		slider.on("touchEnd", function(swiper, event) {
			var element = event.target;
			var classes = ['swiper-button-next', 'swiper-button-prev', 'swiper-pagination-bullet', 'swiper-slide'];
			var action = ['controls_next','controls_prev','controls_pagination', 'controls_swipe'];

			var hasClass = false;
			for (i = 0; i < classes.length; i++) {
				hasClass = $(element).hasClass(classes[i]);
				if (hasClass === true) {
					var actionName = action[i];
					slider.once("slideChangeEnd", function() {
						ad.report("slider", actionName, {
			                dps: id + "||" + plugins.Slider.currentSlideName(id),
			                dpn: 1,
			                ffw: true,
			                ita: true
			            });
			        });
			        setTimeout(function(){ 
			        	swiper.off("slideChangeEnd") 
			        	slider.on("slideChangeEnd", function() {
							ad.report("slider", "move_to_slide", {
				                dps: id + "||" + plugins.Slider.currentSlideName(id),
				                dpn: 1,
				                ffw: true,
				                ita: false
				            });
						});
			        }, (swiper.params.speed + 1000));
				} 
			}
		});

		slider.once("reachEnd", function() {
			ad.report("slider", "reached_end", {
                dps: id,
                dpn: 1,
                ffw: true,
                ita: false
            });
		});

	}

	plugins.Slider.addMethods = function(id) {

		var slider = plugins.Slider.get(id);

		slider.goToSlide = function(slide) {
			var slideName;
			if (Number.isInteger(slide) === true) {
				slider.slideTo(slide);
				slideName = "Slide " + (slide - 1);
			} else {
				for (i = 0; i < slider.slides.length; i++) {
					var slideName = slider.slides[i].getAttribute("data-slide-name");
					if (slideName === slide) {
						slider.slideTo(i);
						slideName = slide;
					}
				}
			}
		}
	}

	plugins.Slider.setupListeners = function(id) {
		var slider = plugins.Slider.get(id);
		
		$("[data-go-to-slide]").click(function() {
			var attribute = $(this).attr("data-go-to-slide");
			
			if (typeof attribute === "number") {
				attribute = [attribute];
			} else {
				attribute = attribute.split(",");
			}
			if (attribute.length > 1) {
				var sliderId = attribute[0].trim();
				var slide = attribute[1].trim();
			} else {
				var sliderId = id;
				var slide = attribute[0];
			}

			if (isNaN(slide) === false) {
				slide = Number(slide);
			}
			var targetSlider = plugins.Slider.get(sliderId);
			targetSlider.once("slideChangeEnd", function() {
				ad.report("slider", "contols_external", {
	                dps: sliderId + "||" + plugins.Slider.currentSlideName(sliderId),
	                dpn: 1,
	                ffw: true,
	                ita: true
	            });
			});
			targetSlider.goToSlide(slide);
		});

	}
});