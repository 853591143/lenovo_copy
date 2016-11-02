//下拉ul菜单框
$(".top_link").hover(function(){
	$(this).find("a").css({"background-position":"-196px -25px"});
	$(this).find("ul").stop().slideDown(200);
},function(){
	$(this).find("a").css({"background-position":"-211px -25px"});
	$(this).find("ul").stop().slideUp(200);
})

//第二个下拉ul菜单
$(".nav_text").parent().hover(function(){
	$(this).find("ul").stop().slideDown(200);
	
},function(){
	$(this).find("ul").stop().slideUp(200);
})




//出来就隐藏的大图
$(function(){
	setTimeout(function(){
		$(".content a").eq(0).css({"height":"100px","transition":"height 1s"})
	}
,500);
	setTimeout(function(){
			$(".content a").eq(0).css({"display":"none"});
			$(".content a").eq(1).css({"display":"block"});
		}
	,1500);
})


//隐藏
$(".closebtn").click(function(){
	$(".content a").eq(1).hide();
	
})
