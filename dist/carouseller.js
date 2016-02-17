//carouseller.js 0.31b https://github.com/shrue348/responsive.carouseller Open source under the MIT License. Copyright © 2015 Aleksander Alekseev All rights reserved.
(function($) {
	$.fn.carouseller = function(options) {
		var options = $.extend({
			scrollSpeed: 200,
			sens: 100,
			autoScrollDelay: 0,
			hoverStopScroll: true,
			easing: 'linear'
		}, options),
		
		obj = $(this),
		left_btn = obj.find('.carousel-button-left'),
		right_btn = obj.find('.carousel-button-right'),
		list = obj.find('.carousel-items'),
		wrapper = obj.find('.carousel-wrapper'),
		count = obj.find('.carousel-block').length,
		sens = options.sens,
		touch, startX, endX, result, wrap, t, count, can_view,
		
		init = function() {
			this.interval = null;
			this.stop = !1;
			
			left_btn.on('click', left);
			right_btn.on('click', right);
			list.on('touchstart', touchstart);
			list.on('touchmove', touchmove);
			list.on('touchend', touchend);
			
			if (options.hoverStopScroll) {
				obj.on('mouseenter', mousein);
				obj.on('mouseleave', mouseout);
			}
			
			if (options.autoScrollDelay > 0) this.interval = window.setInterval(function(){ right('click')}, options.autoScrollDelay);
			if (options.autoScrollDelay < 0) this.interval = window.setInterval(function(){ left('click')}, -options.autoScrollDelay);
		},
		
		mousein = function(){
			window.clearInterval(this.interval);
		},
		mouseout = function(){
			if (options.autoScrollDelay > 0) this.interval = window.setInterval(function(){ right('click')}, options.autoScrollDelay);
			if (options.autoScrollDelay < 0) this.interval = window.setInterval(function(){ left('click')}, -options.autoScrollDelay);
		},

		left = function(e, result){
			t = obj.find('.carousel-block').eq(-1).outerWidth(true);
			can_view = Math.round( wrapper.width() / t)

			if ( count > can_view) {
				if (e.type == 'touchend') {
					list.animate({
						left: '0px'
					}, options.scrollSpeed, options.easing, function() {
						this.stop = !1;
					});
				} else {
					obj.find('.carousel-items .carousel-block').eq(-1).prependTo(list);
					list.css({ left: '-'+t+'px' });
					list.stop().animate({
						left: '0px'
					}, options.scrollSpeed, options.easing, function() {
						this.stop = !1;
					});
				}
			} else {
				list.stop().animate({left: '10px'},100),
				list.animate({left: '0'},100)
			}
		},

		right = function(e, result){
			t = obj.find('.carousel-block').eq(-1).outerWidth(true);
			can_view = Math.round( wrapper.width() / t)

			if ( count > can_view) {
				if (e.type == 'touchend') {
					//console.log(-2*t+'px')
					list.animate({
						left: -2*t+'px'
						
					}, options.scrollSpeed, options.easing, function() {
						obj.find('.carousel-items .carousel-block').eq(0).appendTo(list);
						obj.find('.carousel-items .carousel-block').eq(0).appendTo(list);
						list.css({ left: '0px' });

						this.stop = !1;
					});
				} else {
					list.stop().animate({
						left: '-' + t + 'px'
					}, options.scrollSpeed, options.easing, function() {
						obj.find('.carousel-items .carousel-block').eq(0).appendTo(list);
						list.css({ left: '0px' });
						this.stop = !1;
					});
				}
				console.log('moveRight moved')
			} else {
				list.stop().animate({left: '-10px'},100),
				list.animate({left: '0'},100)
			}
		},
		
		back = function(result){
			t = obj.find('.carousel-block').eq(-1).outerWidth(true);
			can_view = Math.round( wrapper.width() / t)
			
			if( result = 0) {
				list.animate({
					left: '-' + t + 'px'
				}, options.scrollSpeed, options.easing, function() {
					obj.find('.carousel-items .carousel-block').eq(0).appendTo(list);
					list.css({ left: '0px' });
					this.stop = !1;
				});
			}
		},

		touchstart = function(e) {
			t = obj.find('.carousel-block').eq(-1).outerWidth(true);
			can_view = Math.round( wrapper.width() / t);
			result=0;
			
			if ( count > can_view ) {
				obj.find('.carousel-items .carousel-block').eq(-1).prependTo(list);
				list.css({ left: '-'+t+'px' });
				touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
				startX = touch.clientX
			}
		},

		touchmove = function(e) {
			t = obj.find('.carousel-block').eq(-1).outerWidth(true);
			can_view = Math.round( wrapper.width() / t)
			touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
			
			if ( count > can_view) {
				endX = touch.clientX
				result = startX - endX;
			} else {
				result = 0;
			}
			
			if (Math.abs(result) > 30 && Math.abs(result) < t){
				e.preventDefault();
				list.css({ left: '-'+t-result+'px' });
			}
		},

		touchend = function(e) {
			(result > sens) ? right(e,result) :  (result < -sens) ? left(e,result) : back(result);
		};
		return this.each(init);
	}
})(jQuery);