#Specless Cascade

## Assets

Regardless where you are referring to a file from, as long as it is placed in the `assets` folder, then the path should start with `/assets/` (for example: `/assets/my-image.png`).

## CSS

### Flowlanes

Example:
```
@flowlane 90 {
	// Styles for a 90px high flowlane go here
}
```

### Breakpoints
Breakpoints must be inserted within Flowlanes.

Using a breakpoint outside of a flowlane, simply sets a max-width media query. 
Example:
```
@breakpoint 728 {
	// Styles to apply at a screen max-width of 728 go here
}
```

Using a breakpoint within a flowlane, sets a proportional breakpoint in that flowlane. 
Example:
```
@flowlane 90 {
	//Styles for a 90px high flowlane go here
	
	@breakpoint 728 {
		// Styles for the 728 breakpoint within the 90px flowlane go here
	}
	
}
```

### Layouts

Layouts allow you to specify a specific size where styles will apply. Does not scale like a flowlane. Currently can produce strange effects when use with flowlanes in the same ad. To avoid, code dimensions in layouts in px instead of rem. 

Example:
```
@layout (728x90) {
	// Styles that should apply when the ad is example 728x90 go here
}
```

Example with size range:
```
@ layout ([728-970]x90) {
	// Styles that apply when the ad is between 728 and 970 px wide and 90px tall go here.
}
```

Multiple layouts using spec.ly notation example:
```
@layout (728x90/300x250) {
	// Styles that should apply when the ad is 728x90 or 300x250 go here. 
}
```

### Contexts

##### Context Categories:

- time
- environment
- location
- user
- input
- device
- site
- ad
- layout
- custom

Basic usage:
```
@device (type: smartphone) {
	// Styles that apply only when the device is a tablet go here
}

@time (day : sunday) {
	// Styles that apply only when the day is 'sunday' go here.
}
```

Multiple context features-- and:
```
// Same Context Type Example
@device (type: smartphone) and (os-family: ios) {
	// Styles that apply  only when the device type is a smartphone and the os is ios go here
}

// Nesting Multiple Context Types Example 
@device (type: smartphone) {

	@time (day: sunday) {
		// Styles that apply only when the device is a smartphone and the day is 'sunday' go here
	}
}
```

Multiple context features-- or: 
```
@device (type: smartphone), (type: tablet) {
	// Styles that apply  only when the device type is a smartphone OR the device type is a tablet go here
}
```

Ranges:
```
@device (viewport-width > 1000) {
	// Styles that apply when the viewport width is greater than 1000 go here. 
}
```

Explicit matches-- if the context returns a list of possible values, sometimes you may want to match a scenario that only matches a single value. For example format-expand-directions returns all directions that ad expands (example: 'n e'). If you want to match a scenario that is ONLY north and not any other directions, use the "only' flag:
```
@format only (expand-directions: n) {
	// Sylesfor a format that ONLY expands north go here. If it also expands east, the selector will not match.
}
```

## Ad Elements

### ad-video

##### Attributes
- `id`: Required. A unique name to identify the player.
- `player-type`: Can be `html5` or `youtube`
- `src`: The path to the video file in the /assets/directory
- `name`: A name to identify the specific video in reporting. 
- `sizing`: Can be `cover` or `contain`. Forces video to either fill it's parent container, or letter-box within the container.
- `autoplay`: Determines if the video should auto-play when auto-play capabilities are allowed (i.e. not allowed on mobile). Presence of the attribute is `true. ``false` otherwise. 
- `controls`: Determines if the video should have controls. Presence of the attribute is `true. ``false` otherwise.
- `preload`: Determines if the video should preload as soon as it is on the page. Presence of the attribute is `true. ``false` otherwise.
- `poster`: Path to an image in the `/assets/` directory to use as a poster image.
- `muted`: Should the video start muted. Presence of the attribute is `true. ``false` otherwise.
- `wallpaper`: Sets the video to `sizing: cover, autoplay: true, controls: false, loop: true`.
- `loop`: Determines if the video should restart once complete. Presence of the attribute is `true. ``false` otherwise.

- `aspect`: Notes the aspect ratio of video so it can resize proportionately. Example: `16x9`
- `audio-hover`: Video will always be muted unless the mouse is hovered over the video. Presence of the attribute is `true. ``false` otherwise.

- `simple-controls`: Enables simplified controls. Presence of the attribute is `true. ``false` otherwise.

- `view-toggle-off`: At default, the video pauses whenever the ad goes out of view. This toggles that feature off. Presence of the attribute is `true. ``false` otherwise.

##### Example Usage

```
// Basic Example
<ad-video id="playerId" name="My Awesome Video" src="/assets/video.mp4" simple-controls poster="/assets/poster.jpg"></ad-video>
```
##### Example Usage with custom endframe
```
<ad-video id="playerId" name="My Awesome Video" src="/assets/video.mp4" simple-controls poster="/assets/poster.jpg">
	<ad-video-endframe>Custom Content to show at the end of the video can go here</ad-video-endframe>
</ad-video>

```

##### Video.JS Methods

All video.js methods are available using the below syntax. Video.js full list of API methods/events [here](http://docs.videojs.com/docs/api/index.html). 
```
var myVideo = ad.plugins.Video.get("playerId");
myVideo.play();
myVideo.pause();
```

##### Cascade Specific Methods
```
var myVideo = ad.plugins.Video.get("playerId");

// Load a new video to an existing video Player Note: Not enabled yet. 
myVideo.loadNewVideo("/assets/video2.mp4", "New Video Name", "/assets/new-poster-image.jpg");
```

### ad-slider

##### Attributes
Any of the parameters that are used in the Swiper API [here](http://idangero.us/swiper/api/#.VwLQzxIrLWY).

Note: MUST contain a unique ID.
##### Example Usage
```
<ad-slider id="mySlider">
	<ad-slider-slide>Slide 1</ad-slider-slide>
	<ad-slider-slide>Slide 2</ad-slider-slide>
	<ad-slider-slide>Slide 3</ad-slider-slide>
	<ad-slider-slide>Slide 4</ad-slider-slide>
</ad-slider>
```

##### Example Usage with optional Pagination, Prev/Next Buttons and Scrollbar
```
<ad-slider id="mySlider">
	<ad-slider-slide>Slide 1</ad-slider-slide>
	<ad-slider-slide>Slide 2</ad-slider-slide>
	<ad-slider-slide>Slide 3</ad-slider-slide>
	<ad-slider-slide>Slide 4</ad-slider-slide>
	<ad-slider-pagination></ad-slider-pagination>
	<ad-slider-prev></ad-slider-prev>
	<ad-slider-next></ad-slider-next>
	<ad-slider-scrollbar></ad-slider-scrollbar>
</ad-slider>
```


### ad-close-button 
Creates a close button with default styles
##### Example:
```
<ad-close-button></ad-close-button>
```


### ad-loading-icon
Creates a loading spinner with default styles
##### Attributes
- `type`: The animation type (`spin`, `flip`, or `pulse`)

##### Example:
```
<ad-loading-icon type="flip"></ad-loading-icon>
```

## Ad Attributes

Can be applied to any element. Example

### exit
```
<div exit="My Exit"></div>
```

### collapse
```
<div collapse></div>
```

### expand
```
<div expand></div>
```

### timer-start
```
<div timer-start="My Timer"></div>
```

### timer-stop
```
<div timer-stop="My Timer"></div>
```

### timer-toggle
```
<div timer-toggle="My Timer"></div>
```

### count
```
<div count="My Counter"></div>
```

### count
```
<div third-party-track="My 1x1 Name"></div>
```

### lazy-content

All interior contents if the specific element will not be loaded and added to the DOM, until the API call to load such content is called. 
```
<div lazy-content="My Content">
	<!-- All Content in here will be removed when the ad is requested -- >
</div>
```

API call to load the content: 
```
ad.plugins.LazyContent("My Content").load()
```








