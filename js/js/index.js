$(".owl-demo5").owlCarousel({
        items :6,
        lazyLoad : true,
		autoPlay:false,
		itemsDesktop : [1199, 6],
        itemsDesktopSmall : [979, 4],
        itemsTablet : [768, 4],
        itemsTabletSmall : false,
        itemsMobile : [479, 3],
		//rewindNav:false,
         navigation : true
      });

$(".i_title .owl-item").click(function(){
	var linum = $(this).index();
	var CaseList = $(this).parents(".i_title").next(".i_con").find(".divhidden");
	$(this).parents(".i_title").find(".owl-item").find("a").removeClass('isel');
	$(this).find("a").addClass('isel');
	CaseList.eq(linum).show().siblings().hide();
	var carousel= $(".owl-demo5");
	if(linum>=2)
	{
	carousel.trigger('owl.jumpTo',2);
	}
	if($(this).parents(".i_title").attr("id")=="i_title1")
	{
		var CaseList2 = $(".index_l_b").find(".divhidden");
		CaseList2.eq(linum).show().siblings().hide();
	}
	
}) 


function AutoScroll(obj){
  $(obj).find("ul:first").animate({
	marginTop:"-53px"
  },500,function(){
	$(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
  });
}

setInterval('AutoScroll(".scrollDiv")',2000);

