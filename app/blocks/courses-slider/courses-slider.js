/* global $ */

import 'slick-carousel';
import {isTabletSmall, isMobileSmall}from '../page/test-dispaly';

const slider = () => {
	if (isMobileSmall()) {
		if (!$('.js-courses-slider').is('.slick-slider')) {
			$('.js-courses-slider').slick({
				dots: true
			});
		}
	}else if ($('.js-courses-slider').is('.slick-slider')){
		$('.js-courses-slider').slick('unslick');
	}
};

// const slider = () => {
// 	if (isMobileSmall() && !$('.js-courses-slider').is('.slick-slider')) {
// 		$('.js-courses-slider').slick();
// 	}else if ($('.js-courses-slider').is('.slick-slider')){
// 		$('.js-courses-slider').slick('unslick');
// 	}
// };

const $courseItem = $('.js-course-item');
const $coursesSlider = $('.js-courses-slider');

// console.log($coursesSlider.css('display'));

const maxHeightCourseSlide = () => {
	if ((isTabletSmall() || isMobileSmall()) && $coursesSlider.css('display') === 'flex'){
		if (!$courseItem.is('.is-const-height')){
			const maxHeight = Math.max.apply(null, Array.from($courseItem.map((ind, el) => $(el).outerHeight())));
			$courseItem.css('height', maxHeight + 'px').addClass('is-const-height');
		}
	}else if ($courseItem.is('.is-const-height')){
		$courseItem.css('height', '100%').removeClass('is-const-height');
	}
};

slider();
maxHeightCourseSlide();

$(window).on('resize', () => {
	slider();
	maxHeightCourseSlide();
});


