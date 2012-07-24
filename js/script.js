var activeSection = '#splash';
var intSection = 0;
var intCaseStudy = 0;
var intCaseStudyCount;
var intDuration = 400; // for all slide events

window.addEventListener("load",function() {
  // Set a timeout...
  setTimeout(function(){
    // Hide the address bar!
    window.scrollTo(0, 1);
  }, 0);
});

$(document).ready( function() {


	setDimensions();
	
	$('article').fadeTo(0,.1);
	$('article:eq(0)').fadeTo(0,1);
	$(window).resize( function() {
		clearTimeout(this.id);
		this.id = setTimeout(function() {
			setDimensions();
		}, 500);
	});	

	$('nav a').click( function(e) {
		e.preventDefault();
		objBtn = $(this);
		if ( objBtn.hasClass('active') ) return;
		$('nav a').removeClass('active');
		objBtn.addClass('active');
		activeSection = $(this).attr('href');
		$('section').removeClass('active');
		$(activeSection).addClass('active');
		$('#section-wrapper').scrollTo( activeSection, intDuration);
	});
	
	$('#case-study-nav a').click( function(e) {
		e.preventDefault();
		objBtn = $(this);
		if ( objBtn.hasClass('active') ) return;
		slideCaseStudies( objBtn );
	});	
		
	$('#case-study-wrapper').swipe({ swipe: caseStudySwipe, threshold: 100});
	//$('section').swipe({ swipe: sectionSwipe, threshold: 100});
});

function sectionSwipe() {
	var upOrDown = false;
	var intSectionCount = $('section').length - 1;
	if ( direction == 'up' ) {
		intSection++;
		if ( intSection >= intSectionCount ) {
			intSection = intSectionCount; 
		} else {
			upOrDown = true;

		}
	} else if (  direction == 'down' ) {
		
		intSection--;
		if ( intSection == -1 ) {
			intSection = 0; 
		}  else {
			upOrDown = true;
		}
	}
	if ( upOrDown ) {
		$('section').removeClass('active');
		$('section:eq('+intSection+')').addClass('active');
		$('#section-wrapper').scrollTo( $('section:eq('+intSection+')'), intDuration);
	}
}

function caseStudySwipe() {
	if ( direction == 'left' ) {
		if ( direction == 'left' && intCaseStudyCount-1 <= intCaseStudy ) return;
		intCaseStudy = intCaseStudy + 1;
	} else if (  direction == 'right' ) {
		if ( $('#case-study-wrapper article:eq(0)').hasClass('active') ) return;
		intCaseStudy = intCaseStudy - 1;
	}
	slideCaseStudies( $('ul a:eq('+ intCaseStudy +')') );
}

function slideCaseStudies( objBtn ) {
	var strID = objBtn.attr('href');
	intCaseStudy = objBtn.parent().index('li');
	if ( !$('#case-study-wrapper article:eq('+ intCaseStudy +')').hasClass('active') ) {
		$('article.active').removeClass('active').fadeTo(intDuration,.1);
		$(strID).addClass('active').fadeTo(intDuration, 1);
		$('#case-study-nav a').removeClass('active');
		objBtn.addClass('active');
	}
	$('#case-study-wrapper').scrollTo( strID, intDuration );
	
}

function setDimensions() {

	// get our dimensions
	var intHeight = $(window).height();
	var intNavHeight = $('nav').outerHeight();
	var intWidth = $(document).width();

	// how big's our viewing space?
	var portalHeight = intHeight - intNavHeight;	
	$('#section-wrapper, section').height( portalHeight );
	
	// set case study article heights and widths
	intCaseStudyCount = $('article').length;
	$('#case-study-scroller').width( intWidth*intCaseStudyCount);
	var intCSnav = $('#case-study-header').outerHeight();
	var intArticleHeight = portalHeight - intCSnav;
	$('article').css({'width': intWidth, 'height': intArticleHeight}) ;
	
	// scroll to active tab
	$('#section-wrapper').scrollTo(activeSection);
	
	// tidy up case study positioning
	slideCaseStudies( $('ul a:eq('+ intCaseStudy +')') );
	
}