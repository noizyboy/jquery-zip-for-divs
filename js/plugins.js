// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License. 
 * Copyright 2008 George McGinley Smith
 * All rights reserved.
*/
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}});


/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);


/*
 * touchSwipe - jQuery Plugin
 * https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * http://labs.skinkers.com/touchSwipe/
 * http://plugins.jquery.com/project/touchSwipe
 *
 * Copyright (c) 2010 Matt Bryson (www.skinkers.com)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * $version: 1.3.1
 *
 * Changelog
 * $Date: 2010-12-12 (Wed, 12 Dec 2010) $
 * $version: 1.0.0 
 * $version: 1.0.1 - removed multibyte comments
 *
 * $Date: 2011-21-02 (Mon, 21 Feb 2011) $
 * $version: 1.1.0 	- added allowPageScroll property to allow swiping and scrolling of page
 *					- changed handler signatures so one handler can be used for multiple events
 * $Date: 2011-23-02 (Wed, 23 Feb 2011) $
 * $version: 1.2.0 	- added click handler. This is fired if the user simply clicks and does not swipe. The event object and click target are passed to handler.
 *					- If you use the http://code.google.com/p/jquery-ui-for-ipad-and-iphone/ plugin, you can also assign jQuery mouse events to children of a touchSwipe object.
 * $version: 1.2.1 	- removed console log!
 *
 * $version: 1.2.2 	- Fixed bug where scope was not preserved in callback methods. 
 *
 * $Date: 2011-28-04 (Thurs, 28 April 2011) $
 * $version: 1.2.4 	- Changed licence terms to be MIT or GPL inline with jQuery. Added check for support of touch events to stop non compatible browsers erroring.
 *
 * $Date: 2011-27-09 (Tues, 27 September 2011) $
 * $version: 1.2.5 	- Added support for testing swipes with mouse on desktop browser (thanks to https://github.com/joelhy)
 *
 * $Date: 2012-14-05 (Mon, 14 May 2012) $
 * $version: 1.2.6 	- Added timeThreshold between start and end touch, so user can ignore slow swipes (thanks to Mark Chase). Default is null, all swipes are detected
 * 
 * $Date: 2012-05-06 (Tues, 05 June 2012) $
 * $version: 1.2.7 	- Changed time threshold to have null default for backwards compatibility. Added duration param passed back in events, and refactored how time is handled.
 *
 * $Date: 2012-05-06 (Tues, 05 June 2012) $
 * $version: 1.2.8 	- Added the possibility to return a value like null or false in the trigger callback. In that way we can control when the touch start/move should take effect or not (simply by returning in some cases return null; or return false;) This effects the ontouchstart/ontouchmove event.
 *
 * $Date: 2012-06-06 (Wed, 06 June 2012) $
 * $version: 1.3.0 	- Refactored whole plugin to allow for methods to be executed, as well as exposed defaults for user override. Added 'enable', 'disable', and 'destroy' methods
 *
 * $Date: 2012-05-06 (Fri, 05 June 2012) $
 * $version: 1.3.1 	- Bug fixes  - bind() with false as last argument is no longer supported in jQuery 1.6, also, if you just click, the duration is now returned correctly.


 * A jQuery plugin to capture left, right, up and down swipes on touch devices.
 * You can capture 2 finger or 1 finger swipes, set the threshold and define either a catch all handler, or individual direction handlers.
 * Options: The defaults can be overridden by setting them in $.fn.swipe.defaults
 * 		swipe 			Function 	A catch all handler that is triggered for all swipe directions. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" , the distance of the swipe and the duration of the swipe.
 * 		swipeLeft		Function 	A handler that is triggered for "left" swipes. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down"  , the distance of the swipe and the duration of the swipe.
 * 		swipeRight		Function 	A handler that is triggered for "right" swipes. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down"  , the distance of the swipe and the duration of the swipe.
 * 		swipeUp			Function 	A handler that is triggered for "up" swipes. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" , the distance of the swipe and the duration of the swipe.
 * 		swipeDown		Function 	A handler that is triggered for "down" swipes. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down"  , the distance of the swipe and the duration of the swipe.
 *		swipeStatus 	Function 	A handler triggered for every phase of the swipe. Handler is passed 4 arguments: event : The original event object, phase:The current swipe face, either "start?, "move?, "end? or "cancel?. direction : The swipe direction, either "up?, "down?, "left " or "right?.distance : The distance of the swipe.Duration : The duration of the swipe
 *		click			Function	A handler triggered when a user just clicks on the item, rather than swipes it. If they do not move, click is triggered, if they do move, it is not.
 *
 * 		fingers 		int 		Default 1. 	The number of fingers to trigger the swipe, 1 or 2.
 * 		threshold 		int  		Default 75.	The number of pixels that the user must move their finger by before it is considered a swipe.
* 		maxTimeThreshold 	int  		Default null. Time, in milliseconds, between touchStart and touchEnd must NOT exceed in order to be considered a swipe.
 *		triggerOnTouchEnd Boolean Default true If true, the swipe events are triggered when the touch end event is received (user releases finger).  If false, it will be triggered on reaching the threshold, and then cancel the touch event automatically.
 *		allowPageScroll String Default "auto". How the browser handles page scrolls when the user is swiping on a touchSwipe object. 
 *										"auto" : all undefined swipes will cause the page to scroll in that direction.
 *										"none" : the page will not scroll when user swipes.
 *										"horizontal" : will force page to scroll on horizontal swipes.
 *										"vertical" : will force page to scroll on vertical swipes.
 *
 * Methods: To be executed as strings, $el.swipe('disable');
 *		disable		Will disable all touch events until enabled again
 *		enable		Will re-enable the touch events
 *		destroy		Will kill the plugin, and it must be re-instantiated if it needs to be used again
 *
 * This jQuery plugin will only run on devices running Mobile Webkit based browsers (iOS 2.0+, android 2.2+)
 */
(function($) 
{

	//Constants
	var LEFT = "left",
		RIGHT = "right",
		UP = "up",
		DOWN = "down",
		NONE = "none",
		HORIZONTAL = "horizontal",
		VERTICAL = "vertical",
		AUTO = "auto",
			
		PHASE_START="start",
		PHASE_MOVE="move",
		PHASE_END="end",
		PHASE_CANCEL="cancel",
	
		SUPPORTS_TOUCH = 'ontouchstart' in window,
		START_EV = SUPPORTS_TOUCH ? 'touchstart' : 'mousedown',
		MOVE_EV = SUPPORTS_TOUCH ? 'touchmove' : 'mousemove',
		END_EV = SUPPORTS_TOUCH ? 'touchend' : 'mouseup',
		CANCEL_EV = 'touchcancel',
		
		PLUGIN_NS = 'TouchSwipe';
	
	
	
	// Default thresholds & swipe functions
	var defaults = {
				
		fingers 		: 1,		// int - The number of fingers to trigger the swipe, 1 or 2. Default is 1.
		threshold 		: 75,		// int - The number of pixels that the user must move their finger by before it is considered a swipe. Default is 75.
		
		
		maxTimeThreshold  : null,      // int - Time, in milliseconds, between touchStart and touchEnd must NOT exceed in order to be considered a swipe.
		
		
		swipe 			: null,		// Function - A catch all handler that is triggered for all swipe directions. Accepts 2 arguments, the original event object and the direction of the swipe : "left", "right", "up", "down".
		swipeLeft		: null,		// Function - A handler that is triggered for "left" swipes. Accepts 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
		swipeRight		: null,		// Function - A handler that is triggered for "right" swipes. Accepts 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
		swipeUp			: null,		// Function - A handler that is triggered for "up" swipes. Accepts 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
		swipeDown		: null,		// Function - A handler that is triggered for "down" swipes. Accepts 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
		swipeStatus		: null,		// Function - A handler triggered for every phase of the swipe. Handler is passed 4 arguments: event : The original event object, phase:The current swipe face, either "start?, "move?, "end? or "cancel?. direction : The swipe direction, either "up?, "down?, "left " or "right?.distance : The distance of the swipe.
		click			: null,		// Function	- A handler triggered when a user just clicks on the item, rather than swipes it. If they do not move, click is triggered, if they do move, it is not.
		
		triggerOnTouchEnd : true,	// Boolean, if true, the swipe events are triggered when the touch end event is received (user releases finger).  If false, it will be triggered on reaching the threshold, and then cancel the touch event automatically.
		allowPageScroll : "auto" 	/* How the browser handles page scrolls when the user is swiping on a touchSwipe object. 
										"auto" : all undefined swipes will cause the page to scroll in that direction.
										"none" : the page will not scroll when user swipes.
										"horizontal" : will force page to scroll on horizontal swipes.
										"vertical" : will force page to scroll on vertical swipes.
									*/
	};
	
	
		
	/**
	 * Main plugin entry point for jQuery
	 * This allows us to pass options object for instantiation,
	 * as well as execute methods by name as per jQuery plugin architecture
	 */	
	$.fn.swipe = function(method) 
	{
		$this = $(this);
		var plugin = $this.data(PLUGIN_NS);
	
		
	
		//Check if we are already instantiated and trying to execute a method	
		if(plugin && typeof method === 'string')
		{	
			if (plugin[method]) 
				return plugin[method].apply(this, Array.prototype.slice.call(arguments, 1));
			else 
				$.error('Method ' + method + ' does not exist on jQuery.swipe');
		}
		//Else not instantiated and trying to pass init object (or nothing)
		else if (!plugin && (typeof method === 'object' || !method))
		{
			return init.apply(this, arguments);
		}
		
	}
	
	
	//Expose our defaults so a user could override the plugin defaults
	$.fn.swipe.defaults = defaults;
		
			
	//Expose our phase constants - READ ONLY
	$.fn.swipe.phases = {
		PHASE_START:PHASE_START,
		PHASE_MOVE:PHASE_MOVE,
		PHASE_END:PHASE_END,
		PHASE_CANCEL:PHASE_CANCEL	
	}
	
	//Expose our direction constants - READ ONLY
	$.fn.swipe.directions = {
		LEFT:LEFT,
		RIGHT:RIGHT,
		UP:UP,
		DOWN:DOWN
	}
	
	//Expose our page scroll directions - READ ONLY
	$.fn.swipe.pageScroll = {	
		NONE:NONE,
		HORIZONTAL:HORIZONTAL,
		VERTICAL:VERTICAL,
		AUTO:AUTO
	}
	
	
	/**
	 * Initialise the plugin for each DOM element matched
	 * This creates a new instance of the main TouchSwipe class for each DOM element, and then 
	 * saves a reference to that instance in the elements data property.
	 */			
	function init(options)
	{
		//Prep and extend the options
		if (options && (options.allowPageScroll==undefined && (options.swipe!=undefined || options.swipeStatus!=undefined)))
			options.allowPageScroll=NONE;
		
		if (!options)
			options={};
		
		//pass empty object so we dont modify the defaults
		options = $.extend({}, $.fn.swipe.defaults, options);
		
		//For each element instantiate the plugin
		return this.each(function() 
		{
			var $this = $(this);
			
			//Check we havent already initialised the plugin
			var plugin = $this.data(PLUGIN_NS);
			
			if(!plugin)
			{
				plugin = new TouchSwipe(this, options);
				$this.data(PLUGIN_NS, plugin);	
			}
		});
	}
	
	
	
	/**
	  * Main TouchSwipe Plugin Class
	  */
	function TouchSwipe (element, options)
	{
		//jQuery wrapped element for this instance
		var $element = $(element);

		var phase="start";
		
		var triggerElementID = null; 	// this variable is used to identity the triggering element
		var fingerCount = 0;			// the current number of fingers being used.	
		
		//track mouse points / delta
		var start={x:0, y:0};
		var end={x:0, y:0};
		var delta={x:0, y:0};
		
		//track times
		var startTime = 0;
		var endTime = 0;
		
		//Keep track of the move event
		var moveEvent;	
		
		// Add gestures to all swipable areas if supported
		try
		{
			$element.bind(START_EV, touchStart);
			$element.bind(CANCEL_EV, touchCancel);
		}
		catch(e)
		{
			$.error( 'events not supported ' +  START_EV + ',' + CANCEL_EV +' on jQuery.swipe' );
		}
		
		
		//Public methods
		/**
		 * re-enables the swipe plugin with the previous configuration
		 */
		this.enable=function()
		{
			$element.bind(START_EV, touchStart);
			$element.bind(CANCEL_EV, touchCancel);
			
			return $element;
		}
	
		/**
		 * disables the swipe plugin
		 */
		this.disable=function()
		{
			removeListeners();
			return $element;
		}
	
	
		/**
		 * Destroy the swipe plugin completely. To use any swipe methods, you must re initialise the plugin.
		 */
		this.destroy=function()
		{
			removeListeners();
			$element.data(PLUGIN_NS, null);
			return $element;
		}
		
		
		//Private methods
		/**
		 * Event handler for a touch start event. 
		 * Stops the default click event from triggering and stores where we touched
		 */
		function touchStart(event) 
		{
			//As we use Jquery bind for events, we need to target the original event object
			event = event.originalEvent;
			
			var ret,
				evt = SUPPORTS_TOUCH ? event.touches[0] : event; 
			
			phase = PHASE_START;
	
			//If we support touches, get the finger count
			if (SUPPORTS_TOUCH) {
				// get the total number of fingers touching the screen
				fingerCount = event.touches.length;
			}
			//Else this is the desktop, so stop the browser from dragging the image
			else
			{
				event.preventDefault();
			}
			
			
			
			//clear vars..
			distance=0;
			direction=null;
			duration=0;
			
			// check the number of fingers is what we are looking for
			if (!SUPPORTS_TOUCH || fingerCount == options.fingers) 
			{
				// get the coordinates of the touch
				start.x = end.x = evt.pageX;
				start.y = end.y = evt.pageY;
				startTime = getTimeStamp();
				
				if (options.swipeStatus)
					ret = triggerHandler(event, phase);
			} 
			else 
			{
				//A touch with more or less than the fingers we are looking for, so cancel
				touchCancel(event);
			}
			
			
			
			//If we have a return value from the users handler, then return and cancel
			if (ret === false)
			{
				phase = PHASE_CANCEL;
				triggerHandler(event, phase); 
				
				
				return ret;
			}
			else
			{	
				//If this is a desktop, then assign to the move to the window
				$element.bind(MOVE_EV, touchMove);
				$element.bind(END_EV, touchEnd);
			}
		}

		/**
		 * Event handler for a touch move event. 
		 * If we change fingers during move, then cancel the event
		 */
		function touchMove(event) 
		{
			//As we use Jquery bind for events, we need to target the original event object
			event = event.originalEvent;
			
			
			if (phase == PHASE_END || phase == PHASE_CANCEL)
				return;
			
			var ret,
				evt = SUPPORTS_TOUCH ? event.touches[0] : event; 
			
			end.x = evt.pageX;
			end.y = evt.pageY;
			endTime = getTimeStamp();
				
			direction = calculateDirection();
			if (SUPPORTS_TOUCH)
				fingerCount = event.touches.length;
			
			
			phase = PHASE_MOVE;
			
			//Check if we need to prevent default evnet (page scroll) or not
			validateDefaultEvent(event, direction);
	
			if ( fingerCount == options.fingers || !SUPPORTS_TOUCH) 
			{
				distance = calculateDistance();
				duration = calculateDuration();
					
				if (options.swipeStatus)
					ret = triggerHandler(event, phase, direction, distance, duration);
				
				//If we trigger whilst dragging, not on touch end, then calculate now...
				if (!options.triggerOnTouchEnd)
				{
					var cancel = !validateSwipeTime();
					
					// if the user swiped more than the minimum length, perform the appropriate action
					if ( validateSwipeDistance()===true ) 
					{
						phase = PHASE_END;
						ret = triggerHandler(event, phase);
					}
					else if (cancel)
					{
						phase = PHASE_CANCEL;
						triggerHandler(event, phase); 
					}
				}
			} 
			else 
			{
				phase = PHASE_CANCEL;
				triggerHandler(event, phase); 
			}
			
			if (ret === false)
			{
				phase = PHASE_CANCEL;
				triggerHandler(event, phase);
			}

		}
		
		/**
		 * Event handler for a touch end event. 
		 * Calculate the direction and trigger events
		 */
		function touchEnd(event) 
		{
			//As we use Jquery bind for events, we need to target the original event object
			event = event.originalEvent;
			
			event.preventDefault();
			
			endTime = getTimeStamp();
			
			distance = calculateDistance();
			direction = calculateDirection();
			duration = calculateDuration();		
			
			
			
			//If we trigger handlers at end of swipe OR, we trigger during, but they didnt trigger and we are still in the move phase
			if (options.triggerOnTouchEnd || (options.triggerOnTouchEnd==false && phase == PHASE_MOVE))
			{
				phase = PHASE_END;
				
				// check to see if more than one finger was used and that there is an ending coordinate
				if ( (fingerCount == options.fingers  || !SUPPORTS_TOUCH) && end.x != 0 ) 
				{
					var cancel = !validateSwipeTime();
					
					// if the user swiped more than the minimum length, perform the appropriate action
					if ( (validateSwipeDistance()===true || validateSwipeDistance()===null) && !cancel ) //null is retuned when no distance is set
					{
						triggerHandler(event, phase);
					}
					else if(cancel || validateSwipeDistance()===false)
					{
						phase = PHASE_CANCEL;
						triggerHandler(event, phase); 
					}	
				} 
				else 
				{
					phase = PHASE_CANCEL;
					triggerHandler(event, phase); 
				}
			}
			else if (phase == PHASE_MOVE)
			{
				phase = PHASE_CANCEL;
				triggerHandler(event, phase); 
			}
			
			$element.unbind(MOVE_EV, touchMove, false);
			$element.unbind(END_EV, touchEnd, false);
		}
		
		/**
		 * Event handler for a touch cancel event. 
		 * Clears current vars
		 */
		function touchCancel(event) 
		{
			// reset the variables back to default values
			fingerCount = 0;
			
			start.x = 0;
			start.y = 0;
			end.x = 0;
			end.y = 0;
			delta.x = 0;
			delta.y = 0;
			
			endTime=0;
			startTime=0;
		}
		
		
		/**
		 * Trigger the relevant event handler
		 * The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
		 */
		function triggerHandler(event, phase) 
		{
			var ret;
			
			//update status
			if (options.swipeStatus)
				ret = options.swipeStatus.call($element,event, phase, direction || null, distance || 0, duration || 0);
			
			
			if (phase == PHASE_CANCEL)
			{
				if (options.click && (fingerCount==1 || !SUPPORTS_TOUCH) && (isNaN(distance) || distance==0))
					ret = options.click.call($element,event, event.target);
			}
			
			if (phase == PHASE_END)
			{
				//trigger catch all event handler
				if (options.swipe)
				{
					ret = options.swipe.call($element,event, direction, distance, duration);
				}
				//trigger direction specific event handlers	
				switch(direction)
				{
					case LEFT :
						if (options.swipeLeft)
							ret = options.swipeLeft.call($element,event, direction, distance, duration);
						break;
					
					case RIGHT :
						if (options.swipeRight)
							ret = options.swipeRight.call($element,event, direction, distance, duration);
						break;

					case UP :
						if (options.swipeUp)
							ret = options.swipeUp.call($element,event, direction, distance, duration);
						break;
					
					case DOWN :	
						if (options.swipeDown)
							ret = options.swipeDown.call($element,event, direction, distance, duration);
						break;
				}
			}
			
			
			if(phase==PHASE_CANCEL || phase==PHASE_END)
			{
			 	//Manually trigger the cancel handler to clean up data
			 	touchCancel(event);
			}
			
			if (ret !== undefined)
				return ret;
		}
		
		
		/**
		 * Checks the user has swipe far enough
		 */
		function validateSwipeDistance()
		{
			if(options.threshold!==null)
				return distance >= options.threshold;
			else
				return null;
		}
		
		
		
		/**
		 * Checks that the time taken to swipe meets the minimum / maximum requirements
		 */
		function validateSwipeTime()
		{
			var result;
			//If no time set, then return true
			
			if(options.maxTimeThreshold)
			{
				if(duration >= options.maxTimeThreshold) 
					result = false;
				else
					result = true;
			}
			else
			{
				result = true;
			}
			
			return result;	
		}
		
		
		/**
		 * Checks direction of the swipe and the value allowPageScroll to see if we should allow or prevent the default behaviour from occurring.
		 * This will essentially allow page scrolling or not when the user is swiping on a touchSwipe object.
		 */
		function validateDefaultEvent(event, direction)
		{
			if( options.allowPageScroll==NONE )
			{
				event.preventDefault();
			}
			else 
			{
				var auto = options.allowPageScroll==AUTO;
				
				switch(direction)
				{
					case LEFT :
						if ( (options.swipeLeft && auto) || (!auto && options.allowPageScroll!=HORIZONTAL))
							event.preventDefault();
						break;
					
					case RIGHT :
						if ( (options.swipeRight && auto) || (!auto && options.allowPageScroll!=HORIZONTAL))
							event.preventDefault();
						break;

					case UP :
						if ( (options.swipeUp && auto) || (!auto && options.allowPageScroll!=VERTICAL))
							event.preventDefault();
						break;
					
					case DOWN :	
						if ( (options.swipeDown && auto) || (!auto && options.allowPageScroll!=VERTICAL))
							event.preventDefault();
						break;
				}
			}
			
		}
		
		
		/**
		 * Calcualte the duration of the swipe
		 */
		function calculateDuration()
		{
			return endTime - startTime;
		}
		
		/**
		 * Calcualte the length / distance of the swipe
		 */
		function calculateDistance()
		{
			return Math.round(Math.sqrt(Math.pow(end.x - start.x,2) + Math.pow(end.y - start.y,2)));
		}
		
		/**
		 * Calcualte the angle of the swipe
		 */
		function caluculateAngle() 
		{
			var X = start.x-end.x;
			var Y = end.y-start.y;
			var r = Math.atan2(Y,X); //radians
			var angle = Math.round(r*180/Math.PI); //degrees
			
			//ensure value is positive
			if (angle < 0) 
				angle = 360 - Math.abs(angle);
				
			return angle;
		}
		
		/**
		 * Calcualte the direction of the swipe
		 * This will also call caluculateAngle to get the latest angle of swipe
		 */
		function calculateDirection() 
		{
			var angle = caluculateAngle();
			
			if ( (angle <= 45) && (angle >= 0) ) 
				return LEFT;
			
			else if ( (angle <= 360) && (angle >= 315) )
				return LEFT;
			
			else if ( (angle >= 135) && (angle <= 225) )
				return RIGHT;
			
			else if ( (angle > 45) && (angle < 135) )
				return DOWN;
			
			else
				return UP;
		}
		
		/**
		 * Returns a MS time stamp of the current time
		 */
		function getTimeStamp()
		{
			var now = new Date();
			return now.getTime();
		}
		
		
		
		/**
		 * Removes all listeners that were associated with the plugin
		 */
		function removeListeners()
		{
			$element.unbind(START_EV, touchStart);
			$element.unbind(CANCEL_EV, touchCancel);
			$element.unbind(MOVE_EV, touchMove);
			$element.unbind(END_EV, touchEnd);
		}
		
		
	}
		
})(jQuery);
