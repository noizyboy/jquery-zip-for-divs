var tempScrollTop, currentScrollTop = 0;

$(document).ready( function() {

	$('#blinds-wrapper').blinds({
		init: true,
		scrollable: true
	});

	
	// requires the jquery easing plugin
	
	jQuery.easing.def = "easeInOutSine";
	
	$('.trigger').click(
		function() {
			var intDirection = ( $(this).attr('id') == 'left' ) ? -1 : 1;
			var strStartFrom = ( $(this).attr('id') == 'left' ) ? 'right' : 'left';
			$('#blinds-wrapper').blinds({
				blindWidth: 100,
				slideSpeed: 400,
				slidePause: 75,
				strStartFrom: strStartFrom,
				intDirection: intDirection
			});
		}
	);
	
	$('#blinds-wrapper').scroll( function() {
		currentScrollTop = $('#blinds-wrapper').scrollTop();
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
        //plugin name - blinds
        blinds: function(options) {
		 
            //Settings list and the default values
            var defaults = {
				blindWidth: 100,		// how wide are the blinds (pixels)
				slideSpeed: 500,		// how fast to move the blinds off screen (ms)
				slidePause: 100,		// how long to wait before triggering each blind's animation (ms)
				intDirection: 1,		// 1 = next in DOM, -1 = previous in DOM
				strStartFrom: 'left',	// 'left' or 'right'
				strTransition: 'zip',	// one of 'zip', 'zipUp', 'zipDown' 
				init: false,
				scrollable: false
            };
             
            var options = $.extend(defaults, options);         	
			var objThis = $(this);
			
			if ( options.init && options.scrollable ) {
				return true;
			}
			
			var intTotal = objThis.children('div').size() - 1;	// total blinds
			var objTopDiv = objThis.find('.blind.top');			// active div
			var intIndex = objTopDiv.index();					// index of active div	
			
			// what's our next div?
			var intNext = intIndex + options.intDirection;
			intNext = ( intNext > intTotal ) ? 0 : (( intNext < 0 ) ? intTotal : intNext);
			var objNextDiv = objThis.children('div:eq('+intNext+')');
			objNextDiv.addClass('next');
			
			// how wide and high?
			var intWidth = objThis.children('.blind:eq(0)').width();
			var intHeight = objThis.height();
			
			// need to make sure our blinds width is a factor of the total width
			if ( options.blindWidth > intWidth ) options.blindWidth = intWidth/3;
			while ( parseInt(intWidth / options.blindWidth) != (intWidth / options.blindWidth) ) { options.blindWidth++; }
			var intSlices = parseInt( intWidth / options.blindWidth );
			
			// add a class to stop multilp
			if (objThis.hasClass('animating') ) return;
			objThis.addClass('animating');			
			
			// create our new div to hold the slices
			var wrapper = $('<div/>', {
				id: 'slices-wrapper'
			}).appendTo(objThis);
				
			// container for our clones
			var arrCutUpSlices = [];
			
			//
			var start = 0;
			var loop_cond = function(){return i < intSlices};
			var inc = 1;
			if( options.strStartFrom == 'right') { 
				start = intSlices; 
				loop_cond = function(){return i >= 0};
				inc = -1;
			} 				
			// create our slices
			for ( var i = start; loop_cond(); i+=inc ) {
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
				var intMove = ( ( booUporDown  || options.strTransition == 'zipUp') && options.strTransition != 'zipDown' ) ? -intHeight : intHeight;
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
