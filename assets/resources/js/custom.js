var $j = jQuery.noConflict();

$j(document).ready(function() {

	/* hero area thumbnails setup */  
	$j('ul.tabs li').click(function(){
	  var tab_id = $(this).attr('data-tab');

	  $j('ul.tabs li').removeClass('current');
	  $j('.tab-content').removeClass('current');

	  $j(this).addClass('current');
	  $j('#'+tab_id).addClass('current');
	});

	/* bxslider setup */  
	/* .show() is a hack use to show the slider 
	after the page is loaded */
	$j('.bxslider').show().bxSlider({
	  minSlides: 3,
	  maxSlides: 4,
	  slideWidth: 180,
	  slideMargin: 26,
	  auto: true,
	  preloadImages: 'all'
	});

});

