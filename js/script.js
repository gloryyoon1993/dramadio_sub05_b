//서브메뉴슬라이드



$(function(){
	$(".main_nav>ul>li").mouseenter(function(){
		$(this).children(".sub").stop().slideDown();
	});
	$(".main_nav>ul>li").mouseleave(function(){
		$(this).children(".sub").stop().slideUp();
	});
	
});