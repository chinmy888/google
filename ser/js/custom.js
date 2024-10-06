$(document).ready(function(){
	/*
	  ==============================================================
		   Courses By资质
	  ==============================================================
	*/
	if($('.courses_subject_yyzz').length){
		$('.courses_subject_yyzz').owlCarousel({
			loop:true,
			autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:true,
			nav:true,
			responsive:{
				0:{items:2},
				450:{items:2},
				640:{items:3},
				760:{items:3},
				1080:{items:4},
				1200:{items:5},
				1600:{items:5}
			}
		})
	}
	
	/*
	  ==============================================================
		   Courses By Subject Script
	  ==============================================================
	*/
	if($('.courses_subject_carousel').length){
		$('.courses_subject_carousel').owlCarousel({
			loop:false,
			autoplay:false,
			autoplayTimeout:5000,
			autoplayHoverPause:true,
			nav:true,
			responsive:{
				0:{items:1},
				450:{items:1},
				640:{items:3},
				760:{items:3},
				1080:{items:4},
				1200:{items:5},
				1600:{items:5}
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
			loop:false,
			autoplay:false,
			autoplayTimeout:5000,
			autoplayHoverPause:true,
			nav:true,
			responsive:{
				0:{items:1},
				650:{items:2},
				750:{items:3},
				1200:{items:4},
				1300:{items:5},
				1600:{items:6}
			}
		})
	}
	
	/*
	  ==============================================================
		   历程
	  ==============================================================
	*/
	if($('.most_popular_lc').length){
		$('.most_popular_lc').owlCarousel({
			loop:true,
			autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:true,
			nav:true,
			responsive:{
				0:{items:1},
				650:{items:2},
				750:{items:3},
				1200:{items:4},
				1300:{items:5},
				1600:{items:6}
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
			loop:false,
			autoplay:false,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
			nav:true,
			responsive:{
				0:{items:4},
				480:{items:5},
				600:{items:6},
				800:{items:8},
				1200:{items:10},
				1600:{items:10}
			}
		})
	}
	

	/*
	  ==============================================================
		 testimonial_sub
	  ==============================================================
	*/
	if($('.testimonial_sub').length){
		$('.testimonial_sub').owlCarousel({
			loop:false,
			autoplay:false,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
			nav:true,
			responsive:{
				0:{items:3},
				360:{items:4},
				650:{items:5},
				1000:{items:6},
				1380:{items:8},
				1600:{items:8}
			}
		})
	}
	
	/*
	  ==============================================================
		 testimonial_sub_al
	  ==============================================================
	*/
	if($('.testimonial_sub_al').length){
		$('.testimonial_sub_al').owlCarousel({
			loop:false,
			autoplay:false,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
			nav:true,
			responsive:{
				0:{items:3},
				360:{items:4},
				650:{items:6},
				1000:{items:8},
				1350:{items:11},
				1600:{items:11}
			}
		})
	}
	

	
	
	



});