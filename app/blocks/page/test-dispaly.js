/* global $ */

function visibilityControl(){
	$('body').append('<div class="g-visibility-control"><div class="g-xl-visible js-xl-test"></div><div class="g-lg-visible js-lg-test"></div><div class="g-md-visible js-md-test"></div><div class="g-sm-visible js-sm-test"></div><div class="g-xs-visible js-xs-test"></div></div>');
}
visibilityControl();

const isDesktop = () => $('.js-xl-test').is(':visible');

const isTablet = () => $('.js-lg-test').is(':visible') || $('.js-md-test').is(':visible');

const isTabletLarge = () => $('.js-lg-test').is(':visible');

const isTabletSmall = () => $('.js-md-test').is(':visible');

const isMobile = () => $('.js-sm-test').is(':visible') || $('.js-xs-test').is(':visible');

const isMobileLarge = () => $('.js-sm-test').is(':visible');

const isMobileSmall = () => $('.js-xs-test').is(':visible');

export {isDesktop, isTablet, isTabletLarge, isTabletSmall, isMobile, isMobileLarge, isMobileSmall};

// 	var result = $('.result');
// 	result.text('Измени размер окна и посмотри что будет');
// $(window).on('resize', function (){

// 	result.text('');
// 	if (isDesktop()){
// 		result.text('desctop');

// 	}else if (isTablet() && isTabletLarge()){
// 		result.text('isTablet ------- isTabletLarge');

// 	}else if (isTablet() && isTabletSmall()){
// 		result.text('isTablet ------- isTabletSmall');

// 	}else if (isMobile() && isMobileLarge()){
// 		result.text('isMobile ------- isMobileLarge');

// 	}else if (isMobile() && isMobileSmall()){
// 		result.text('isMobile ------- isMobileSmall');

// 	}else {
// 		result.text('Что то не то');
// 	}
// });
