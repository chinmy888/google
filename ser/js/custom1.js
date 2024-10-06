$(document).ready(function(){

	/*
	  ==============================================================
		   Courses By Subject Script
	  ==============================================================
	*/
	if($('.courses_subject_carousel').length){
		$('.courses_subject_carousel').owlCarousel({
			loop:true,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			nav:true,
			responsive:{
				0:{items:1},
				480:{items:2},
				640:{items:3},
				760:{items:4},
				1000:{items:4},
				1200:{items:6},
				1600:{items:6}
			}
		})
	}
	

	/*
	  ==============================================================
		   Click to Scroll Top Script
	  ==============================================================
	*/
		$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('.back_to_top').css('display','block');
			} else {
				$('.back_to_top').css('display','none');
			}
		});
		
		//Click event to scroll to top
		$('.back_to_top').on('click',function(){
			$('html, body').animate({scrollTop : 0},800);
			
		});
	
	/*
	  ==============================================================
		   Most Popular Courses Script
	  ==============================================================
	*/
	if($('.most_popular_courses').length){
		$('.most_popular_courses').owlCarousel({
			loop:true,
			autoplay:true,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
			nav:true,
			responsive:{
				0:{items:1},
				480:{items:1},
				600:{items:2},
				1000:{items:2},
				1200:{items:3},
				1600:{items:3}
			}
		})
	}
	/*
	  ==============================================================
		   Testimonial Courses Script
	  ==============================================================
	*/
	if($('.testimonial_carousel').length){
		$('.testimonial_carousel').owlCarousel({
			loop:true,
			autoplay:true,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
			nav:true,
			responsive:{
				0:{items:1},
				480:{items:1},
				600:{items:2},
				1000:{items:2},
				1200:{items:2},
				1600:{items:2}
			}
		})
	}
	




});