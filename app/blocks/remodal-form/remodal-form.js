/* global $ */

import 'jquery-validation';

$.extend($.validator.messages, {
	required: 'Это поле необходимо заполнить',
	remote: 'Пожалуйста, введите правильное значение',
	email: 'Обязательно использовать @ в адресе',
	url: 'Пожалуйста, введите корректный URL',
	date: 'Пожалуйста, введите корректную дату',
	dateISO: 'Пожалуйста, введите корректную дату в формате ISO',
	number: 'Пожалуйста, введите число',
	digits: 'Пожалуйста, вводите только цифры',
	creditcard: 'Пожалуйста, введите правильный номер кредитной карты',
	equalTo: 'Пожалуйста, введите такое же значение ещё раз',
	extension: 'Пожалуйста, выберите файл с правильным расширением',
	maxlength: $.validator.format('Пожалуйста, введите не больше {0} символов'),
	minlength: $.validator.format('Пожалуйста, введите не меньше {0} символов.'),
	rangelength: $.validator.format('Пожалуйста, введите значение длиной от {0} до {1} символов'),
	range: $.validator.format('Пожалуйста, введите число от {0} до {1}'),
	max: $.validator.format('Пожалуйста, введите число, меньшее или равное {0}'),
	min: $.validator.format('Пожалуйста, введите число, большее или равное {0}')
});

const x = String;
x.prototype.byteLength = function (){
	const str = this;
	const length = str.length;
	let count = 0;
	let i = 0;
	let ch = 0;
	for (i; i < length; i++){
		ch = str.charCodeAt(i);
		if (ch <= 127){
			count++;
		}else if (ch <= 2047){
			count += 2;
		}else if (ch <= 65535){
			count += 3;
		}else if (ch <= 2097151){
			count += 4;
		}else if (ch <= 67108863){
			count += 5;
		}else {
			count += 6;
		}
	}
	return count;
};

/* EMAIL */
$.validator.addMethod('js-email-validation', function (value, element){
	return (this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) && (value.byteLength() <= 254);
}, 'Пожалуйста, введите корректный адрес электронной почты');

/* PHONE */
$.validator.addMethod('js-phone-validation', function (value){
	const phoneNumberPattern = /^((\+?7|8)[ \-] ?)?((\(\d{3}\))|(\d{3}))?([ \-])?(\d{3}[\- ]?\d{2}[\- ]?\d{2})$/;
	return phoneNumberPattern.test(value);
}, 'Введите корректный номер телефона');

$('.js-form[data-validate=Y]').each((ind, el) => {
	$(el).validate({
		highlight(element){
			$(element).removeClass('success').addClass('error');
		},
		unhighlight(element){
			$(element).removeClass('error');
		}
	});
});
