/* global $ */

const $img = $('.js-picture-img');
$('.js-picture-img').each((le, i) => {
	console.log($(i).width());
}
);
const maxWidth = Math.max.apply(null, Array.from($img.map((ind, el) => $(el).width())));
console.log('mw ', maxWidth);
$img.css('width', maxWidth + 'px');
