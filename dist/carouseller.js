(function(l){ 
	var M=Math,ce,cx,cy,dx,dy,b,f,i,m,s,t=function(e,i){m=i; i=e.touches; return{x:i[0].pageX,y:i[0].pageY,z:i.length}};
	for(i in s={touchcancel:function(e){m=0},touchstart:function(e){b=t(e,0)},touchmove:function(e){f=t(e,1)},touchend:function(e){if(b.z>1)return; ce=l.createEvent('CustomEvent');  
	ce.initCustomEvent(m?(M.max(dx=M.abs(cx=f.x-b.x),dy=M.abs(cy=f.y-b.y))>120?dx>dy?cx<0?'l':'r':cy<0?'u':'d':'fc'):'fc',true,true,b); e.target.dispatchEvent(ce);}
}) l.addEventListener(i,s[i],false)})(document);

var carousel = function(i, t) {
    'undefined' == typeof t && (t = 0),
	this.obj = $(i), 
	this.autoscrolldelay = t, 
	$(this.obj).find('.carousel-button-left').on('click, r', this.left.bind(this)), 
	$(this.obj).find('.carousel-button-right').on('click, l', this.right.bind(this)),
	$(this.obj).on('l', this.right.bind(this)),
	$(this.obj).on('r', this.left.bind(this)),
	$(this.obj).on('mouseenter', this.mousein.bind(this)), 
	$(this.obj).on('mouseleave', this.mouseout.bind(this)), t && (this.interval = window.setInterval(this.right.bind(this), t)),
	$(this.obj).find('.carousel-items').css('height', function(){
		var max = 0;
		$(this).children().each(function() {
			max = Math.max( max, $(this).outerHeight() );
		});
		return max;
	});
};
carousel.prototype = {
    obj: null,
    interval: null,
    scrollSpeed: 200,
    stop: !1,
    mousein: function() {
        window.clearTimeout(this.interval)
    },
    mouseout: function() {
        this.autoscrolldelay && (this.interval = window.setInterval(this.right.bind(this), this.autoscrolldelay))
    },
    left: function() {
        if (!this.stop) {
            this.stop = !0;
            var t = $(this.obj).find('.carousel-block').outerWidth();
            $(this.obj).find('.carousel-items .carousel-block').eq(-1).prependTo($(this.obj).find('.carousel-items')), $(this.obj).find('.carousel-items').css({
                left: '-' + t + 'px'
            }), $(this.obj).find('.carousel-items').animate({
                left: '0px'
            }, this.scrollSpeed, function() {
                this.stop = !1
            }.bind(this))
        }
    },
    right: function() {
        if (!this.stop) {
            this.stop = !0;
            var t = $(this.obj).find('.carousel-block').outerWidth();
            $(this.obj).find('.carousel-items').animate({
                left: '-' + t + 'px'
            }, this.scrollSpeed, function() {
                $(this.obj).find('.carousel-items .carousel-block').eq(0).appendTo($(this.obj).find('.carousel-items')), 
                $(this.obj).find('.carousel-items').css({
                    left: '0px'
                }), 
                this.stop = !1
            }.bind(this))
        }
    }
};