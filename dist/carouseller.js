//carouseller.js 0.3b https://github.com/shrue348/responsive.carouseller Open source under the MIT License. Copyright © 2015 Aleksander Alekseev All rights reserved.
(function($) {
	$.fn.carouseller = function(options) {
		var options = $.extend({
			scrollSpeed: 150,
			autoScrollDelay: 0,
			hoverStopScroll: true,
			easing: 'linear'
		}, options);
		
		var init = function() {
			this.interval = null;
			this.stop = !1;
			
			$(this).find('.carousel-button-left').on('click', left.bind(this)),
			$(this).find('.carousel-button-right').on('click', right.bind(this)),
			$(this).on('l', right.bind(this));
			$(this).on('r', left.bind(this));
			if (options.hoverStopScroll) {
				$(this).on('mouseenter', mousein.bind(this));
				$(this).on('mouseleave', mouseout.bind(this));
			}
			if (options.autoScrollDelay > 0) this.interval = window.setInterval(right.bind(this), options.autoScrollDelay);
			if (options.autoScrollDelay < 0) this.interval = window.setInterval(left.bind(this), -options.autoScrollDelay);
		}
		var mousein = function() {
			window.clearInterval(this.interval);
		};
		var mouseout = function() {
			if (options.autoScrollDelay > 0) {
				this.interval = window.setInterval(right.bind(this), options.autoScrollDelay);
			}
			if (options.autoScrollDelay < 0) {
				this.interval = window.setInterval(left.bind(this), -options.autoScrollDelay);
			}
		};
		
		var left = function() {
			if (!this.stop) {
				this.stop = !0;
				var t = $(this).find('.carousel-block').eq(-1).outerWidth(true);
				$(this).find('.carousel-items .carousel-block').eq(-1).prependTo($(this).find('.carousel-items'));
				$(this).find('.carousel-items').css({ left: '-'+t+'px' });
				$(this).find('.carousel-items').animate({
					left: '0px'
				}, options.scrollSpeed, options.easing, function() {
					this.stop = !1;
				}.bind(this));
			}
		}
		
		var right = function() {
			if (!this.stop) {
				this.stop = !0;
				var t = $(this).find('.carousel-block').eq(-1).outerWidth(true);
				$(this).find('.carousel-items').animate({
					left: '-' + t + 'px'
				}, options.scrollSpeed, options.easing, function() {
					$(this).find('.carousel-items .carousel-block').eq(0).appendTo($(this).find('.carousel-items'));
					$(this).find('.carousel-items').css({ left: '0px' });
					this.stop = !1;
				}.bind(this));
			}
		}
		return this.each(init);
	}
})(jQuery);