;(function($){
	
	$(".main").swipeDown(function(){
		var index=$(".slide> .active").index();
		index=index<=0?0:index-1;
		gotoPage(index);

	})
	$(".main").swipeUp(function(){
		var index=$(".slide>.active").index();
		var len=$(".slide>section").length;
		index=index>=len-1?len-1:index+1;
		gotoPage(index);
		
	})
	function gotoPage(index){
		$(".main .slide").animate({
			translateY:-index*100+"%"
		},500,"ease",function(){
			$(this).children("section").eq(index).addClass("active").siblings().removeClass("active");
		})
	}

	
})(Zepto)