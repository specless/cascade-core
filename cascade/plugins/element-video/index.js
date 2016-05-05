Specless.component('Video', window, function (specless, _, extendFrom, factories, ad, $, plugins) {
	
	plugins.Video = function(id, options) {
		options.deviceType = ad.get("deviceType");
		options = plugins.Video.parseOptions(options);
        var players = plugins.Video.players;
        // Check if this player has already been setup
        if (_.has(players, options.id) === false) {
            if (plugins.Video.players === undefined) {
                plugins.Video.players = {};
            }
            plugins.Video.players[id] = {
                fns : [],
                ready: function(callback) {
                    this.fns.push(callback);
                }
            }
			plugins.Video.vjsSetup(id, options, function(player) {
                var tempPlayer = plugins.Video.players[id];
				if (plugins.Video.players === undefined) {
					plugins.Video.players = {};
				}
				plugins.Video.players[id] = player;
				player._specless = options;
				plugins.Video.setupStyles(id);
				plugins.Video.applySizing(id);
				plugins.Video.setupTracking(id);
				plugins.Video.managePlayback(id);
                _.each(tempPlayer.fns, function(callback) {
                    callback(plugins.Video.players[id]);
                });
			});
        }
	}

	plugins.Video.parseOptions = function(options) {

        for (var key in options) {
            var newKey = key.split(":");
            if (newKey.length > 1) {
                if (newKey[1] === options.deviceType) {
                    options[newKey[0]] = options[key];
                }
            }
        }

		isIphone = function() {
            if (navigator.userAgent.match(/iPhone/i)) {
                return true;
            }
        },
        isIpad = function() {
            if (navigator.userAgent.match(/iPad/i)) {
                return true;
            }
        };

        if (options.name === null) {
            options.name = options.src;
        }

        if (options["simple-controls"] === true) {
            options.controls = true;
        }

        if (options.wallpaper === true) {
            options.controls = false;
            options.muted = true;
            options.preload = false;
            options.autoplay = true;
            options.loop = true;
            options.sizing = "cover";
            options["view-toggle-off"] = true;
        }

        if (isIphone === true) {
            options.controls = false;
        }

        if (options.autoplay === true && options.deviceType === "desktop") {
            options.muted = true;
        }

		return options;
	}

	plugins.Video.getSettings = function(id) {
		return plugins.Video.get(id)._specless;
	}

	plugins.Video.get = function(id) {
		var player = plugins.Video.players[id];
		return player;
	}

	plugins.Video.vjsOptions = function(options) {
		var vjsOptions = {
            autoplay: options.autoplay,
            controls: options.controls,
            preload: options.preload,
            muted: options.muted,
            loop: options.loop,
            nativeControlsForTouch: false,
            customControlsOnMobile: true
        };
        if (options["player-type"] === "youtube") {
            vjsOptions["techOrder"] = ["youtube"];
            vjsOptions["sources"] = [{
                "type": "video/youtube",
                "src": options.src
            }];
        } else if (options["player-type"] === "inline") {
            vjsOptions["techOrder"] = ["jsv"];
            vjsOptions["sources"] = [{
                "type": "video/jsv",
                "src": options.src
            }];
            vjsOptions["Jsv"] = {
                audio: options["inline-audio-src"]
            };
        } else if (options["player-type"] !== "html5" && options["player-type"] !== "inline") {
            console.warn("Invalid 'type' attribute value ('" + options["player-type"] + "')for Video plugin element. Valid values are 'html5', 'inline', 'youtube'. Default value of 'html5' will be used instead.");
            options["player-type"] = "html5";
        }
        return vjsOptions;
	}

	plugins.Video.vjsSetup = function(id, options, callback) {
		var vjsOptions = plugins.Video.vjsOptions(options);
        var element = document.getElementById(id);
        element.setAttribute("src", options.src);
		videojs(id, vjsOptions, function() {
			callback(this);
		});
	}

	plugins.Video.timer = function() {
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

	plugins.Video.setupStyles = function(id) {
		var player = plugins.Video.get(id);
		var settings = plugins.Video.getSettings(id);

        var endFrame = $(player.el_).find("[data-element='video-endframe']");
        $(player.el_).append(endFrame);

		var currentDevice;
		$(player.el_).addClass("video-js");
		player.bigPlayButton.el_.setAttribute("data-interactive", "");
        player.posterImage.el_.setAttribute("data-interactive", "");
        player.controlBar.el_.setAttribute("data-interactive", "");
        if (settings["player-type"] === "youtube") {
            player.loadingSpinner.hide();
            if (currentDevice === "smartphone" || isIpad === true) {
                player.bigPlayButton.hide();
                player.posterImage.hide();
            }
        }
        if (settings["player-type"] === "inline") {
            if (settings["inline-audio-src"] === false) {
                player.controlBar.volumeMenuButton.hide();
            }
            player.controlBar.fullscreenToggle.hide();
        }
        if (settings["simple-controls"] === true) {
            $(player.el_).addClass("vjs-simple-controls");
            var replayButton = document.createElement("button");
            replayButton.className = "vjs-replay-button vjs-icon-replay vjs-control vjs-button";
            replayButton.role = "button";
            replayButton.name_ = "replayButton";
            replayButton.setAttribute("role", "button");
            replayButton.setAttribute("type", "button");
            player.controlBar.addChild('button', {
                'el': replayButton
            });
            $(replayButton).on("click", function() {
                player.currentTime(0);
                player.muted(false);
                player.play();
                player.el_.dispatchEvent(new Event('userReplay'));
            });
        }
        if (settings.loop === true) {
            player.loadingSpinner.hide();
        }
        if (settings["data-exit"] !== false) {
            player.tech_.el_.setAttribute("data-exit", settings["data-exit"]);
            var children = player.tech_.el_.children;
            for (var i = 0; i < children.length; i++) {
                children[i].setAttribute("data-exit", settings["data-exit"]);
            }
        }
	}

	plugins.Video.setupTracking = function(id) {
		var player = plugins.Video.get(id);
		var settings = plugins.Video.getSettings(id);
        
        ad.report("video", "player_setup", {
            ffw: true,
            playerId: id
        });

        function addVideo() {
            var video = {
                name: settings.name,
                loads: 0,
                completes: 0,
                plays: 0,
                pauses: 0,
                percentWatched: 0,
                timer: new plugins.Video.timer()
            };
            settings.videos.push(video);
        };

        function isNewVideo() {
            var result = true
            for (i = 0; i < settings.videos.length; i++) {
                if (settings.videos[i].name === settings.name) {
                    result = false;
                }
            }
            return result;
        };

        function currentVideo() {
            for (i = 0; i < settings.videos.length; i++) {
                if (settings.videos[i].name == settings.name) {
                    return settings.videos[i];
                }
            }
        };

        if (settings.videos === undefined) {
            settings.videos = [];
            addVideo();
            currentVideo().loads = currentVideo().loads + 1;
            if (currentVideo().loads === 1) {
                ad.report("video", "load", {
                    dps: id + "||" + currentVideo().name,
                    dpn: 1,
                    ffw: true,
                    ita: false
                });
            }
        }

        player.on("play", function() {
            if (isNewVideo()) {
                addVideo();
            }
            var video = currentVideo();
            video.timer.start();
            ad.report("video", "play", {
                dps: id + "||" + video.name,
                dpn: 1,
                ffw: true,
                ita: false
            });
            video.plays = video.plays + 1;
            if (video.plays === 1) {
                ad.report("video", "first_play", {
                    dps: id + "||" + video.name,
                	dpn: 1,
                	ffw: true,
                	ita: false
                });
            }
        });

        player.on("pause", function() {
            if (isNewVideo()) {
                addVideo();
            }
            var video = currentVideo();
            video.timer.stop();
            ad.report("video", "pause", {
                dps: video.name,
                ffw: true
            });
            video.pauses = video.pauses + 1;
            if (video.pauses === 1) {
                ad.report("video", "first_pause", {
                    dps: id + "||" + video.name,
                	dpn: 1,
                	ffw: true,
                	ita: false
                });
            }
        });

        player.on("ended", function() {
            if (isNewVideo()) {
                addVideo();
            }
            var video = currentVideo();
            video.timer.stop();
            video.completes = video.completes + 1;
            if (video.completes === 1) {
                ad.report("video", "completed", {
                    dps: id + "||" + video.name,
                	dpn: 1,
                	ffw: true,
                	ita: false
                });
            }
        });

        player.on("timeupdate", function() {
            if (isNewVideo()) {
                addVideo();
            }
            var video = currentVideo();
            var intervals = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
            var percent = Math.round(player.currentTime() / player.duration() * 100);
            if (percent > video.percentWatched) {
                video.percentWatched = percent;
                for (i = 0; i < intervals.length; i++) {
                    if (percent >= intervals[i]) {
                        if (video["" + intervals[i] + ""] === undefined) {
                            video["" + intervals[i] + ""] = 0;
                        }
                        video["" + intervals[i] + ""] = video["" + intervals[i] + ""] + 1;
                        if (video["" + intervals[i] + ""] === 1) {
                            ad.report("video", "percent_completed", {
                                dps: id + "||" + video.name,
			                	dpn: intervals[i],
			                	ffw: true,
			                	ita: false
                            });
                        }
                    }
                }
            }
        });

        ad.on("unload", function() {
            var name, count;
            for (i = 0; i < settings.videos.length; i++) {
                name = settings.videos[i].name;
                count = settings.videos[i].timer.c;
                ad.report("video", "total_time_watched", {
                    dps: id + "||" + name,
                    dpn: count,
                    ffw: true,
                    ita: false
                });
            }
        });

        player.on('error', function() {
            if (isNewVideo()) {
                addVideo();
            }
            var error = player.error();
            var video = currentVideo();
            ad.report("video", "error", {
                dps: id + "||" + video.name,
            	dpn: 1,
            	ffw: true,
            	ita: false
            });
        });

        $(player.bigPlayButton.el_).on("click", function() {
            if (isNewVideo()) {
                addVideo();
            }
            var video = currentVideo();
            ad.report("video", "controls_play", {
                dps: id + "||" + video.name,
            	dpn: 1,
            	ffw: true,
            	ita: true
            });
        });

        $(player.posterImage.el_).on("click", function() {
            if (isNewVideo()) {
                addVideo();
            }
            var video = currentVideo();
            ad.report("video", "controls_play", {
                dps: id + "||" + video.name,
            	dpn: 1,
            	ffw: true,
            	ita: true
            });
        });

        $(player.controlBar.playToggle.el_).on("click", function() {
            if (isNewVideo()) {
                addVideo();
            }
            var video = currentVideo();
            var state;
            if (player.paused() === true) {
                state = "play";
            } else {
                state = "pause";
            }
            ad.report("video", "controls_" + state, {
                dps: id + "||" + video.name,
            	dpn: 1,
            	ffw: true,
            	ita: true
            });
        });

        $(player.controlBar.volumeMenuButton.el_).on("click", function() {
            if (isNewVideo()) {
                addVideo();
            }
            var video = currentVideo();
            var level = player.volume();
            var muted = player.muted();
            if (muted === false) {
                muted = "mute";
            } else {
                muted = "unmute";
            }
            ad.report("video", "controls_" + muted, {
                dps: id + "||" + video.name,
            	dpn: 1,
            	ffw: true,
            	ita: true
            });
        });

        $(player.controlBar.fullscreenToggle.el_).on("click", function() {
            if (isNewVideo()) {
                addVideo();
            }
            var video = currentVideo();
            var state = $(player.el_).hasClass("vjs-fullscreen");
            if (state === true) {
                state = "exit_fullscreen";
            } else {
                state = "enter_fullscreen";
            }
            ad.report("video", "controls_" + state, {
                dps: id + "||" + video.name,
            	dpn: 1,
            	ffw: true,
            	ita: true
            });
        });

        $(player.controlBar.progressControl.el_).on("mouseup", function() {
            if (isNewVideo()) {
                addVideo();
            }
            var video = currentVideo();
            var time = player.currentTime();
            ad.report("video", "controls_seek", {
                dps: id + "||" + video.name,
            	dpn: 1,
            	ffw: true,
            	ita: true
            });
        });

        player.el_.addEventListener("userReplay", function() {
            if (isNewVideo()) {
                addVideo();
            }
            var video = currentVideo();
            ad.report("video", "controls_replay", {
                dps: id + "||" + video.name,
            	dpn: 1,
            	ffw: true,
            	ita: true
            });
        });

        player.el_.addEventListener("videoUpdated", function() {
            if (isNewVideo()) {
                addVideo();
            }
            var video = currentVideo();
            video.loads = video.loads + 1;
            if (currentVideo().loads === 1) {
                ad.report("video", "load", {
                    dps: id + "||" + currentVideo().name,
            		dpn: 1,
            		ffw: true,
            		ita: true
                });
            }
        });
	}

	plugins.Video.managePlayback = function(id) {
        var player = plugins.Video.get(id);
        var settings = plugins.Video.getSettings(id);

        var paused = player.paused();

        if (settings.muted === true) {
            player.muted(true);
        }

        // Enable mute toggling based on hover when this option is true
        if (settings.audioHover === true) {
            player.muted(true)
            document.onmouseenter = function() {
                player.muted(false)
            };
            document.onmouseleave = function() {
                player.muted(true)
            };
        }

        // If autoplay is enabled, but the component isn't visible yet, pause the video.
        if (settings.autoplay === true && ad.get("isShowing") === false) {
            player.pause();
            paused = false;
        }

        // Force video to pause when the ad transitions away from component
        if (settings.wallpaper === false) {
            ad.on("transitionEnd", function() {
                if (ad.get("isShowing") === false) {
                    player.pause();
                } else if (paused === false) {
                    player.play();
                }
                paused = player.paused();
            });

            // Force video to pause after the users exits the ad
            ad.on("exit", function() {
                player.pause();
            })
        }

        // Disable the default functionality for videos to pause when the ad is out of view
        if (settings["view-toggle-off"] === false) {

            var autoplay;

            if (settings.autoplay === true && ad.get("adVisible") === false) {
                player.pause();
                console.log(id + " has autoplay, and is now paused.");
                autoplay = true;
            }

            ad.on("alter:adVisible", function() {
                if ($(player.el_).hasClass("vjs-has-started") === true) {
                    if (ad.get("adVisible") === false) {
                        paused = player.paused();
                        player.pause();
                    } else if (paused === false) {
                        player.play();
                    }
                } else {
                    if (ad.get("adVisible") === true && autoplay === true) {
                        player.play();
                        autoplay = false;
                    }
                }
            });
        }

        if (settings.loop === false) {

            // Mark video element as ended, once ended
            player.on("ended", function() {
                player.el_.setAttribute("data-ended", "");
            })

            // Remove ended attribute when player plays
            player.on("play", function() {
                player.el_.removeAttribute("data-ended");
            })
        }
    }

    plugins.Video.applySizing = function(id) {
        
        var player = plugins.Video.get(id);
        var settings = plugins.Video.getSettings(id);
		var playerTech = $("#" + id + " .vjs-tech");
		if (settings["player-type"] === "youtube") {
			playerTech = $("#" + id + "_Youtube_api")
		}

        var applySize = function() {
            var eWidth = player.el_.clientWidth;
            var eHeight = player.el_.clientHeight;
            var videoAspectHeight = settings.aspect[1] / settings.aspect[0];
            var videoAspectWidth = settings.aspect[0] / settings.aspect[1];
            var width, height, top, left, transform;

            if (settings.sizing === "cover") {

                player.posterImage.el_.style.backgroundSize = "cover";
                if ((eHeight / eWidth) > videoAspectHeight || eHeight === eWidth) {
                    width = eHeight * videoAspectWidth, height = eHeight, left = "50%", top = 0, transform = "translateX(-50%)";
                } else {
                    width = eWidth, height = eWidth * videoAspectHeight, left = 0, top = "50%", transform = "translateY(-50%)";
                }

            } else if (settings.sizing === "contain") {
                if (settings["player-type"] === "inline") {
                    if ((eWidth / eHeight) >= videoAspectWidth) {
                        width = eHeight * videoAspectWidth, height = eHeight, left = "50%", top = 0, transform = "translateX(-50%)";
                    } else {
                        width = eWidth, height = eWidth * videoAspectHeight, left = 0, top = "50%", transform = "translateY(-50%)";
                    }
                } else {
                    width = "100%", height = "100%", left = 0, top = 0, transform = "none";
                }

                if (settings["player-type"] === "youtube") {}
            } else {
                if (settings["player-type"] === "inline") {
                    if ((eWidth / eHeight) >= videoAspectWidth) {
                        width = eHeight * videoAspectWidth, height = eHeight, left = "50%", top = 0, transform = "translateX(-50%)";
                    } else {
                        width = eWidth, height = eWidth * videoAspectHeight, left = 0, top = "50%", transform = "translateY(-50%)";
                    }
                } else {
                    width = "100%", height = "100%", left = 0, top = 0, transform = "none";
                }
                console.warn("Invalid 'sizing' attribute value for <ad-video> element. Valid values are 'contain', and 'cover'.");
            }
            var styles = {
                position: "absolute",
                width: width,
                height: height,
                left: left,
                top: top,
                transform: transform
            };
            
           playerTech.css(styles);

            if (settings["player-type"] === "inline") {
                playerTech.css("position", "absolute");
            }
        }
        applySize(player.el_);
        ad.on("resized", function() {
            applySize(player.el_);
        });
    }

});