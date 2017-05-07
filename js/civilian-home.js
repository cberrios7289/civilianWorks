$(document).ready(function(){
	$('#menu').on('click',function(){
		$('#navbar-wrapper').addClass('open');
	});

	$('#close').on('click', function(){
		$('#navbar-wrapper').removeClass('open');
	});

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

});