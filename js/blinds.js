var tempScrollTop, currentScrollTop = 0;


$(document).ready( function() {

	
	
	jQuery.easing.def = "easeInOutSine";
	
	$('#trigger').click( function() {
		$('#blinds-wrapper').blinds({
			blindWidth: 100,
			slideSpeed: 500,
			slidePause: 100
		});
	});
	
	$('body').scroll( function() {
		currentScrollTop = $('body').scrollTop();
		if (tempScrollTop < currentScrollTop ) {
			log('down');
		} else if (tempScrollTop > currentScrollTop ) {
			log('down');
			tempScrollTop = currentScrollTop;		
		}
	});
	
		
});

(function($){
    $.fn.extend({ 
        //plugin name - animatemenu
        blinds: function(options) {
 
            //Settings list and the default values
            var defaults = {
				blindWidth: 100,
				slideSpeed: 500,
				slidePause: 100,
				intDirection: 1
            };
             
            var options = $.extend(defaults, options);         	
			var objThis = $(this);
			
			if (objThis.hasClass('animating') ) return;
			objThis.addClass('animating');
			
			var intTotal = objThis.children('div').size() - 1;	// total blinds
			var objTopDiv = objThis.find('.blind.top');			// active div
			var intIndex = objTopDiv.index();					// index of active div	
			
			// what's our next div?
			var intNext = intIndex + options.intDirection;
			intNext = ( intIndex == intTotal ) ? 0 : ( ( intIndex < 0 ) ? intTotal : intNext );
			var objNextDiv = objThis.children('div:eq('+intNext+')');
			objNextDiv.addClass('next');
			
			// how wide and high?
			var intWidth = objThis.width();
			var intHeight = objThis.height();
			
			// need to make sure our blinds width is a factor of the total width
			if ( options.blindWidth > intWidth ) options.blindWidth = intWidth/3;
			while ( parseInt(intWidth / options.blindWidth) != (intWidth / options.blindWidth) ) { options.blindWidth++; }
			var intSlices = parseInt( intWidth / options.blindWidth );
			
			// create our new div to hold the slices
			var wrapper = $('<div/>', {
				id: 'slices-wrapper'
			}).appendTo(objThis);
				
			// container for our clones
			var arrCutUpSlices = [];
			
			// create our slices
			for ( var i = 0; i < intSlices; i++ ) {
				var objClone = objTopDiv.clone();
				var left = (i*options.blindWidth);
				objClone.css({left: -left});
				var sliceWrapper = $('<div/>', {
					"class": "blind-wrapper",
					css: {
						width: options.blindWidth,
						left: left
					}
				});
				sliceWrapper.append(objClone);
				sliceWrapper.appendTo('#slices-wrapper');
				arrCutUpSlices.push(sliceWrapper);
			}
			
			// remove the top blind now we've got the slices in place
			$('.blind.top').removeClass('top');
			
			// do the animation
			var booUporDown = true;
			var intArrLength = arrCutUpSlices.length - 1;
			$.each(arrCutUpSlices, function( i, slice) {
				var intMove = ( booUporDown ) ? -intHeight : intHeight;
				booUporDown = ( booUporDown ) ? false : true;
				setTimeout( function() {
					slice.animate(
						{'top': intMove},
						options.slideSpeed,
						function() {
							$(this).remove();
							// check to see if we're at the end
							if ( i == intArrLength ) {
								$('#slices-wrapper').remove();
								$('.blind.next').addClass('top').removeClass('next');
								objThis.removeClass('animating');
							}
						}
					);
				}, i * options.slidePause );			
			});
        }
    });
})(jQuery);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License. 
 * Copyright 2008 George McGinley Smith
 * All rights reserved.
*/
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}});
