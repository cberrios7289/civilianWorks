$(document).ready(function(){
/*

	BELOW IS LIST OF EVENTS THAT SURROUND MENU BAR WHEN IN MOBILE VIEW

*/	
	$('#menu').on('click',function(){
		$('#navbar-wrapper').addClass('open');
	});

	$('#close').on('click', function(){
		$('#navbar-wrapper').removeClass('open');
	});
	$(window).on('scroll', function(){
		$('#navbar-wrapper').removeClass('open');
	});

/*

	CLick events for social icons

*/
	$('#youtube').on('click',function(){
		window.open('https://www.youtube.com/', '_blank');
	});

	$('#facebook').on('click',function(){
		window.open('https://www.facebook.com/newyorkpinoy', '_blank');
	});

	$('#instagram').on('click',function(){
		window.open('https://www.instagram.com/civilianworks/', '_blank');
	});

	$(window).on('resize', function(){
		console.log($(window).width());
	});
/*

	

*/
	$('#chevron-down').on('click', function(){
		$('html, body').animate({
        scrollTop: ($('#about-section').offset().top)
      }, 500);
	});
	$('#contact').on('click', function(){
		$('html, body').animate({
        scrollTop: ($('#contact-wrapper').offset().top)
      }, 500);
	});

	function verticalAlign(a,b){
		var wrapperHeight = a.height();
		var contentHeight = b.height();
		var paddingTopFormula = ((wrapperHeight/2) - (contentHeight/2));
		$(b).css('padding-top', paddingTopFormula + 'px');


	};
	verticalAlign($('.landing-page-wrapper'), $('.text'));
	verticalAlign($('#about-section'), $('#about-section-quote'));
	verticalAlign($('#about-indepth'), $('#about-indepth-text'));
	verticalAlign($('#contact-img'), $('#contact-text'));
	verticalAlign($('#contact-info-wrapper'), $('.contact-info-text'));		
	verticalAlign($('.landing-faqs-page-wrapper'),$('#faqs-tagline'));
	verticalAlign($('#footer-section'),$('#copyright'));
	verticalAlign($('.page-section-wrapper'),$('.section-title'));
	verticalAlign($('.footer-wrapper'),$('.footer-content'));

});