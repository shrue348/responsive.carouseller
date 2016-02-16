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
			console.log('mouseIn');
		},
		mouseout = function(){
			if (options.autoScrollDelay > 0) this.interval = window.setInterval(function(){ right('click')}, options.autoScrollDelay);
			if (options.autoScrollDelay < 0) this.interval = window.setInterval(function(){ left('click')}, -options.autoScrollDelay);
			console.log('mouseOut');
		},

		left = function(e){
			t = obj.find('.carousel-block').eq(-1).outerWidth(true);

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
			console.log('moveLeft')
		},

		right = function(e){
			t = obj.find('.carousel-block').eq(-1).outerWidth(true);

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
			
			console.log('moveRight')
		},
		
		back = function(){
			list.animate({
				left: '-' + t + 'px'
			}, options.scrollSpeed, options.easing, function() {
				obj.find('.carousel-items .carousel-block').eq(0).appendTo(list);
				list.css({ left: '0px' });
				this.stop = !1;
			});
		},

		touchstart = function(e) {
			t = obj.find('.carousel-block').eq(-1).outerWidth(true),

			obj.find('.carousel-items .carousel-block').eq(-1).prependTo(list);
			list.css({ left: '-'+t+'px' });

			touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
			startX = touch.clientX
		},

		touchmove = function(e) {
			e.preventDefault();

			touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
			endX = touch.clientX
			result = startX - endX;
			
			if (Math.abs(result) > 30 && Math.abs(result) < t){
				list.css({ left: '-'+t-result+'px' });
			}
		},

		touchend = function(e) {
			(result > sens) ? right(e) :  (result < -sens) ? left(e) : back();
		};
		
		return this.each(init);
	}
})(jQuery);