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


	// Jquery form validation
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


	// Scroll Animation
	$(window).scroll(function(){
		$('.animate').each(function(i, el){
			if($(window).width() > 1199){
				if ($(window).scrollTop() > $(el).offset().top - $(window).height() + 100) {
					$(el).addClass('animated');
				};
			};
		});
	});




	// tariffs page tabs
	$(".purchase__content-block").not(":first").hide();

	$(".purchase__tab").click(function() {
		$(".purchase__tab").removeClass("purchase__tab--active").eq($(this).index()).addClass("purchase__tab--active");
		$(".purchase__content-block").hide().eq($(this).index()).fadeIn("normal");
	}).eq(0).addClass("purchase__tab--active");

	// tariffs choose
	$('.purchase__table-tariff').click(function() {
		if( !$('.purchase__tables').hasClass('tariff-choosen') ) {
			$('.purchase__table-tariff').removeClass('purchase__table-tariff--active');
			$(this).addClass('purchase__table-tariff--active');
		}
		if( ($(window).width() < 1200 ) && (!$('.purchase__tables').hasClass('tariff-choosen')) ) {
			$('.purchase__table-tariff').removeClass('purchase__table-tariff--active');
			$(this).addClass('purchase__table-tariff--active');
			$('body,html').animate({scrollTop: $('.purchase__order').offset().top}, 1000);
		}
	});

	$('.purchase__order-back').click(function() {
		$('.purchase__order').addClass('settings');
		$('.purchase__tables').removeClass('tariff-choosen');
	});

	$('.purchase__btn-settings').click(function(e) {
		if ( $('.purchase__table-tariff').hasClass('purchase__table-tariff--active') ) {
			$('.purchase__order').removeClass('settings');
			$('.purchase__tables').addClass('tariff-choosen');
		}
		e.preventDefault;
	});


	// tariffs page jquery form validation
	$(".purchase__order form").validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			name: "required",
			phone: "required",
			inn: "required"
		},
		messages: {
			email: {
				required: "Пожалуйста введите email",
				email: "Неккоректный email"
			},
			name: "Пожалуйста введите имя",
			phone: "Пожалуйста введите контактный номер",
			inn: "Пожалуйста введите ИНН организации"
		}
	});
	$('.purchase__order-form input').change(function() {
		if($(".purchase__order form").valid()) {
			$('.purchase__order').addClass('formValid');
		}
	})







	// Custom select
	$(".my-select").each(function() {
		var classes = $(this).attr("class"),
				id      = $(this).attr("id"),
				name    = $(this).attr("name");
		var template =  '<div class="' + classes + '">';
				template += '<span class="my-select-trigger">' + $(this).attr("placeholder") + '</span>';
				template += '<div class="my-options">';
				$(this).find("option").each(function() {
					template += '<span class="my-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
				});
		template += '</div></div>';
		
		$(this).wrap('<div class="my-select-wrapper"></div>');
		$(this).after(template);
	});
	$(".my-option:first-of-type").hover(function() {
		$(this).parents(".my-options").addClass("option-hover");
	}, function() {
		$(this).parents(".my-options").removeClass("option-hover");
	});
	$(".my-select-trigger").on("click", function() {
		$(".my-select").removeClass("opened");
		$('html').one('click',function() {
			$(".my-select").removeClass("opened");
		});
		$(this).parents(".my-select").toggleClass("opened");
		event.stopPropagation();
	});
	$(".my-option").on("click", function() {
		$(this).parents(".my-select-wrapper").find("select").val($(this).data("value"));
		$(this).parents(".my-options").find(".my-option").removeClass("selection");
		$(this).addClass("selection");
		$(this).parents(".my-select").removeClass("opened");
		$(this).parents(".my-select").find(".my-select-trigger").text($(this).text());
	});




});