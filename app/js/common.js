$(function() {

	"use strict";

	// openning modal login form
	$('#js-login-call').magnificPopup({
		type:'inline'
	});

	//  services slider initialization
	// $('.services__slider').slick({
	// 	dots: true,
	// 	infinite: true,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1
	// });


	// exapmles slider initialization
	$('.examples__slider').slick({
		dots: true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});


	// recommended tariff's plan
	$(".tariffs__plans .tariffs__plan").hover( function(){
		$(".tariffs__plans .tariffs__plan").eq(0).removeClass('tariffs__plan-rec');	
		$(this).addClass('tariffs__plan-rec');
	});

	$(".tariffs__plans .tariffs__plan").mouseleave(function(){
		$(".tariffs__plans .tariffs__plan").removeClass('tariffs__plan-rec');	
		$(".tariffs__plans .tariffs__plan").eq(0).addClass('tariffs__plan-rec');
	});


	// exapmles slider initialization
	$('.feedbacks__slider').slick({
		dots: false,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});


	$('.feedbacks__show-btn').click(function() {
		$(this).next('.feedbacks__text-hidden').slideToggle();
	});


	// footer slideup-slidedown
	var footerLinksToggle = function () {
		if($(window).width() <= 575) {
		$('.footer__lists-title').click(function(e){
			if($(this).next('.footer__list').hasClass('active')) {
				$(this).next('.footer__list').removeClass('active');
				$(this).next('.footer__list').slideUp();
			} else {
				$('.footer__list').removeClass('active'); 
				$('.footer__list').slideUp();
				$(this).next('.footer__list').addClass('active');
				$(this).next('.footer__list').slideDown();
			}
		});
		};
	};
	$(document).ready(function() {
			footerLinksToggle();
	});

	// placeholder hints in form input fields
	$('form input').on('change', function() {
		var input = $(this);
		if (input.val().length) {
			input.addClass('populated');
		} else {
			input.removeClass('populated');
		}
	});

	$(".login__form form").validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			password: "required",
		},
		messages: {
			email: {
				required: "Пожалуйста введите email",
				email: "Неккоректный email"
			},
			password: "Пожалуйста введите пароль",
		}
	});

	$('.login__form input').change(function() {
		if($(".login__form form").valid()) {
			$('.mfp-bg, .login').addClass('formValid');
		}
	})


});