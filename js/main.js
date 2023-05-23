$(document).ready(function () {
	'use strict';

	//********* page loader js

	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);

	//********** menu background color change while scroll

	$(window).on('scroll', function () {
		var menu_area = $('.nav-area');
		if ($(window).scrollTop() > 300) {
			menu_area.addClass('sticky_navigation');
		} else {
			menu_area.removeClass('sticky_navigation');
		}
	});

	//********** menu hides after click (mobile menu)

	$(document).on('click', '.navbar-collapse.in', function (e) {
		if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
			$(this).collapse('hide');
		}
	});


	//*********** scrollspy js

	$('body').scrollspy({
		target: '.navbar-collapse',
		offset: 195
	});


	//************ smooth scroll js

	$('a.smooth-menu,a.dadada,a.skill-btn').on("click", function (e) {
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 50
		}, 1000);
	});

	//*********** Animated headline js

	$('.animate-scale').animatedHeadline({
		animationType: 'clip'
	});

	//***** Skill bar js

	var skillbar = $(".skillbar");

	skillbar.waypoint(function () {
		skillbar.each(function () {
			$(this).find(".skillbar-child").animate({
				width: $(this).data("percent")
			}, 1000);
		});
	}, {
		offset: "80%"
	});




	//************ Contact me form


	//*************** Isotope filter

	var $Container = $('#img-filter');
	if( $Container.length>0 ) {
		$Container.isotope({
			itemSelector: '.single-port',
			transitionDuration: '0.8s'
		});
		$(".img-filter").on("click", function (e){
			$(".img-filter.active").removeClass("active");
			$(this).addClass("active");
			var selector = $(this).attr('data-filter');
			$Container.isotope({
				filter: selector
			});
			return false;
		});

		$(window).resize(function(){
			setTimeout(function(){
				$Container.isotope();
			},1000);
		}).trigger('resize');
	}



	//*************counter-up js

	$('.counter').counterUp({
		delay: 50,
		time: 8000
	});




	$(".testimonial-slider").owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		dots:true,
		autoplay:true,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});






});

//* Scroll-up btn */
const scrollUp = document.querySelector("#scrollUp");

window.addEventListener("scroll", scrollFunction);

function scrollFunction () {
	if (window.scrollY > 300) {
		scrollUp.style.display= "block";
	}
	else 
		scrollUp.style.display= "none";
}

scrollUp.addEventListener("click", backToTop);

function backToTop(){
	window.scrollTo(0, 0);
}

//*Scroll-up btn ends*/
