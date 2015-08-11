# Basic Responsive Carousel Plugin For jQuery - Carouseller
Responsive 1-step jQuery Carousel
carouseller.js
==============
<a href="http://codepen.io/shure348/pen/xGPgwo">DEMO on CodePen</a>


Simple and easy to use carousel script.

![Demo Page screenshot](http://i.imgur.com/fABgcwF.jpg)

## Features

* Responsive GRID (like Bootstrap2 '.span3 .span4 etc')
* Easy to use




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
	carouseller = new carousel('.carouseller', 2000);
});
```
2000 - autoscroll delay in ms

The HTML code may look like this:
```html
<div class="carouseller row-fluid for-car"> 
	<div class="carousel-wrapper"> 
		<div class="carousel-items"> 
			<div class="span3 carousel-block">
				<h2>1 item</h2>
			</div>
			...
		</div>
	</div>
	<div class="carousel-control-block">
		<div class="carousel-button-left"><a href="javascript:void(0)">‹</a></div> 
		<div class="carousel-button-right"><a href="javascript:void(0)">›</a></div> 
	</div>
</div>
```



## Compatibility

* IE 9+
* Chrome
* Firefox 3.6+
* Opera 12+
* Safari 5+

## Notes

Feel free to report any bugs!


## License

Copyright (c) 2015 [shure348](https://github.com/shrue348/)

This content is released under the [MIT License](http://opensource.org/licenses/MIT).
