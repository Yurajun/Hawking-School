/* global $ */

import {isMobileSmall, isDesktop}from '../page/test-dispaly';


$('.nav__item').on('click', e => {
	if ($(e.currentTarget).children('.nav__submenu').length){
		$(e.currentTarget).toggleClass('is-active');
		$(e.currentTarget).children('.nav__submenu').slideToggle();
	}
});

// клик по крестику
const $burger = $('.js-burger-menu');
const $navList = $('.js-nav-list');

$burger.on('click', e => {
	$(e.currentTarget).toggleClass('is-active');
	$(e.currentTarget).next().slideToggle();
});

const $subMenu = $('.nav__submenu');

const mobileMenu = () => {
	if (!isMobileSmall()){
		$navList.css('display', 'flex');
	}else if ($burger.hasClass('is-active')){
		$navList.css('display', 'block');
	}else {
		$navList.css('display', 'none');
	}
	if (isDesktop()){
		$subMenu.css('display', 'block');
	}else if ($('.nav__item').filter((ind, el) => $(el).hasClass('is-active')).length){
		$subMenu.css('display', 'block');
	}else {
		$subMenu.css('display', 'none');
	}
};

$(window).on('resize', () => {
	mobileMenu();
});
