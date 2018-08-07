/* global $ */

import {isMobileSmall}from '../page/test-dispaly';


$('.nav__item').on('click', e => {
	if ($(e.currentTarget).children('.nav__submenu').length){
		$(e.currentTarget).toggleClass('is-active');
	}
});

// клик по крестику
const $burger = $('.js-burger-menu');
const $navList = $('.js-nav-list');
$burger.on('click', e => {
	$(e.currentTarget).toggleClass('is-active');
	$(e.currentTarget).next().slideToggle();
});

const mobileMenu = () => {
	if (!isMobileSmall()){
		$navList.css('display', 'flex');
	}else if ($burger.hasClass('is-active')){
		$navList.css('display', 'block');
	}else {
		$navList.css('display', 'none');
	}
};

$(window).on('resize', () => {
	mobileMenu();
});
