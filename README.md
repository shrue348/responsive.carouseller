# Lite Responsive Carousel Plugin For jQuery - Carouseller
Responsive 1-step jQuery Carousel with touch-swipe scroll
carouseller.js
==============
<a href="http://codepen.io/shure348/pen/dYaNGp" target="_blank">DEMO on CodePen</a>


Simple and easy to use carousel script.

![Demo Page screenshot](https://github.com/shrue348/responsive.carouseller/blob/master/screen.jpg)

## Features

* Responsive 12-columns GRID 
* Easy to use
* Touch-swipe scroll support




## Manually installation

1. Download `carouseller.css` and `carouseller.min.js` files from `dist` folder.
2. Include them somewhere in your document:

  ```html
<link rel="stylesheet" href="css/carouseller.css">
<script src="js/carouseller.min.js"></script>
  ```

## Usage

### Initialization

Initialize a new carousel by running:
```js
$(function() {
	$('.carouseller').carouseller({
		//options
		easing: 'linear'
	});
});
```

### Options

* scrollSpeed: 150 (default) - scrollspeed in ms,
* sens: 100 (defaul) - touch scroll sensitivity in px,
* autoScrollDelay: 0 (default) - autoscroll delay in ms,
* hoverStopScroll: true (default) stop carousel scroll on mouse over,
* easing: 'linear' (default) animation name (jquery.easing.js required)


###The HTML code may look like this:
```html

	<div class="carouseller"> 
		<a href="javascript:void(0)" class="carouseller__left">‹</a> 
		<div class="carouseller__wrap"> 
			<div class="carouseller__list"> 
				<div class="car__3">
					data
				</div>
				...
			</div>
		</div>
		<a href="javascript:void(0)" class="carouseller__right">›</a> 
	</div>

```



## Compatibility

* IE 9+
* Chrome
* Firefox 3.6+
* Opera 12+
* Safari 5+

## Notes
Special thnx to Safronov V. aka TwilightCat
Feel free to report any bugs!


## License

Copyright (c) 2015-2017 [shure348](https://github.com/shrue348/)

This content is released under the [MIT License](http://opensource.org/licenses/MIT).
