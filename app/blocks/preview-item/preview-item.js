/* global $ */

import {maxWidth}from '../functions-js/function';
// import {isDesktop, isMobileSmall, isTabletSmall}from '../test-dispaly';

const $img = $('.js-picture-img');

$img.css('width', maxWidth($img) + 'px');

$(window).on('resize', () => {
	$img.css('width', maxWidth($img) + 'px');
});
