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
//  - parseInt($(el).css('margin-top'), 10)
//  || isMobileSmall()
const maxHeightCourseSlide = () => {
	if ((isTabletSmall()) && $coursesSlider.css('display') === 'flex'){
		if (!$courseItem.is('.is-const-height')){
			const maxHeight = Math.max.apply(null, Array.from($courseItem.map((ind, el) => {
				// console.log('height ', $(el).outerHeight());
				// console.log('height true ', $(el).outerHeight(true));
				// console.log('offsetHeight ', $(el)[0].offsetHeight);
				// console.log('clientHeight ', $(el)[0].clientHeight);
				return $(el).outerHeight();
			})));
			$courseItem.css('height', maxHeight + 'px').addClass('is-const-height');
		}
	}else if ($courseItem.is('.is-const-height')){
		$courseItem.css('height', '100%').removeClass('is-const-height');
	}
};

slider();
maxHeightCourseSlide();
// setTimeout(maxHeightCourseSlide(), 100);

$(window).on('resize', () => {
	slider();
	maxHeightCourseSlide();
});

// Проверить что со слайдером на мобильной версии

$('.js-curses-open-popup').each((ind, element) => {
	$(element).find('a').on('click', e => {
		const textCourseTitle = $(e.currentTarget).parents('.course-item').find('.course-item__speciality').text();
		const inst = $('[data-remodal-id=submit-order]').remodal();
		inst.open();
		inst.$modal.find('.js-course-name').text(textCourseTitle);
		inst.$modal.find('.js-course-context span').text(`"${textCourseTitle}"`);
	});
});
