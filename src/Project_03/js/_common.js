//= require ../_vendor/library.js

/*! _common.js */
(function () {
	'use strict';
	// console.log('_common.js');
	var i = 0;
	$('.header_main_nav').hover(
		function(){
			$('.header_main_nav_item ul').fadeIn('normal',function(){$(this).stop();});
			$('.header_main_nav').animate({height:'170px'},300).clearQueue();
		},
		function(){
			$('.header_main_nav_item ul').fadeOut('fast');
			$('.header_main_nav').animate({height:'35px'},300).clearQueue();
	});
}());
