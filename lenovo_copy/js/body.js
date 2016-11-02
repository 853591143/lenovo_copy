
//最后一楼，划过阴影效果；
$(".six_box").find("ul li").hover(function(){
	$(this).addClass("boxshadow").siblings().removeClass("boxshadow");	
},function(){
	$(this).removeClass("boxshadow");
})

$(function(){
	//火遁 大风车 透明度轮播图
	var i=0;
	var timer = setInterval(Count,2000);
	
	function Count(){		
		i++;
		if(i==$(".nav_p>ul>li").length){
			i=0
		}
		Yc(i)
	}
				
	function Yc(i){
		$(".nav_p>ul>li").eq(i).stop().fadeIn().siblings().stop().fadeOut();		
		$(".icon_p li").eq(i).css("background","yellow").siblings().css("background","#fff")
	}
	
	
	$(".icon_p>li").hover(function(){
		clearInterval(timer);
		$(this).css("background","yellow").siblings().css("background","#fff")
		i=$(this).index();
		Yc(i);
	},function(){
		
	})
	
	//划入清除定时器；
	$(".nav_p").hover(function(){
		clearInterval(timer);
		$(this).find(".jiantou").stop().fadeIn(1000);
	},function(){
		timer=setInterval(Count,2000);
		$(this).find(".jiantou").stop().fadeOut(1000);
	})
	
	
	//点击左键
	$(".left_icon").click(function(){
		i--;
		if(i<0){
			i=$(".icon_p>li").length-1;
		}
		Yc(i);	
	})
	//点击右键
	$(".right_icon").click(Count);
	//轮播图结束
	

})

$(function(){
	//划过显示侧边栏
	$(".xuanxiangka>ul>li:not('.bith')").hover(function(){
		$(this).find(".list_cont").show();
	
	},function(){
		$(this).find(".list_cont").hide();
	})
	
	
	//选项卡开始
	var obj;
	$.get("mockjson/xuanxiangka.json",function(str){
		obj = str;
		addContent(obj);
	})
	
	function addContent(obj1){
		var $li = $(".xuanxiangka>ul>li");
		//加入各种标签  
		  for(var key in obj1){  	
		  	var n = key.substring(3)-1;//获取对应的下标
		  	var $div_list= $("<div class = list_name />");
		  	var $a = $("<a href='#' class='tobebe'>");
			var $div_cont = $("<div class=list_cont>");
			var $span = $("<span></span>");
			var $list_lt =$("<div class=list_lt >");
			var $list_rt =$("<div class=list_rt >");		  
		  	$li.eq(n).append($div_list);
		  	$div_list.append($a);		  	
	  		$div_list.append($div_cont);
	  		$list_lt.appendTo($div_cont);
	  		$list_rt.appendTo($div_cont);
	  		
		  	$li.eq(n).find(".tobebe").html(obj1[key].title)
		    $a.append($span);//不能写在写入内容前面，否则会被清空；
		  //	console.log(obj1[key].catalog);
		  	var navli = $li.eq(n);
		  	if(obj1[key].catalog){
		  		creatType(obj1[key].catalog,$list_lt,$list_rt,$div_cont);
		  	}
			
		  }	
	}
	//循环取出type
	function creatType(obj2,$list_lt,$list_rt,$div_cont){
		var arr1 = obj2.type.split(",");
		//console.dir(arr1)
		//console.log(arr1.length);		
		for(var j=0;j<arr1.length;j++){
			var $list_lta = $("<div class = list_lta >");
			$list_lt.append($list_lta);
			var $p = $("<p>");
			$p.append("<a href='#'>"+arr1[j]+"</a>");
			$list_lta.append($p);
			var $ul_c =$("<ul class=clearfix></ul>")
			$list_lta.append($ul_c);
			if(obj2.list["sub"+Number(j+1)]){
				creatSub(obj2.list["sub"+Number(j+1)],$ul_c,$list_lta)
			}
			//console.log(obj2.list["sub"+Number(j+1)]);
		}	
			if(obj2.list.src){
				creatSrc(obj2.list.src,$div_cont);
			}
	}


	//循环出type.sub	
		function creatSub(str,$ul_c,$list_lta){
			  var arr2= str.split(",");
			  for(var j=0;j<arr2.length;j++){
			  	var $li_low = $("<li>");				  	
				var $a_low = $("<a href='#'>").appendTo($li_low);
			  	$a_low.html(arr2[j]);
			  	$ul_c.append($li_low);
			  }				  
		}
		
		
		function creatSrc(str,$div_cont){
			var $list_rt = $("<div class='list_rt'></div>");
			var arr1 = str.split(",");
			for(var i=0;i<arr1.length;i++){
				var $a_a = $("<a href='#'></a>")
				var $img = $("<img src="+arr1[i]+"/>")
				$img.appendTo($a_a);
				$a_a.appendTo($list_rt);
				$list_rt.appendTo($div_cont)
				
			}					
		}
		
		
	//选项卡结束
	
	
	
})

	//小型无缝轮播
	$(function(){
		var timer = null;
		timer = setInterval(fn1,2500);
		function fn1(){
			$(".horn_cont ul").stop().animate({top:"-57px"},1000,function(){				
				$(".horn_cont ul").find("li").eq(0).appendTo($(this));
				$(".horn_cont ul").css({"top":"3px"})});		
		}
		$(".horn_cont").hover(function(){
			clearInterval(timer);	
		},function(){
			timer = setInterval(fn1,2500);
		})
		$(".horn_cont ul li a").hover(function(){
			$(this).css({"color":"orangered"})	
			
		},function(){
			$(this).css({"color":"#000"})	
		})
				
				
				
	})
	
	//小型滚动图
	
	
	$(function(){		
		$(".photo_huadong").hover(function(){			
			$(this).find("div").stop().fadeIn(1000);
		},function(){
			$(this).find("div").stop().fadeOut(1000);
		})
		
		
		$(".left_btn").click(function(){
//			$(".p_xuhuan").css({"left":"-252px"});
//			$(".p_xuhuan li").last().prependTo($(".p_xuhuan"));			
			$(".p_xuhuan").stop().animate({"left":"0"},800,function(){				
				$(".p_xuhuan li").last().prependTo($(".p_xuhuan"));
				$(".p_xuhuan").css({"left":"-252px"});				
			});
		})
		
		$(".right_btn").click(function(){			
			$(".p_xuhuan").stop().animate({"left":"-504px"},800,function(){				
				$(".p_xuhuan li").first().appendTo($(".p_xuhuan"));
				$(".p_xuhuan").css({"left":"-252px"});		
			});
		})		
})

//第一个滚动图动态json添加；
$(function(){
	var obj;
	$.get("mockjson/zhuandongtu01.json",function(str){
		obj = str;
		//console.log(obj);
		addContent(obj);
		
	})	

	function addContent(obj){
		var $ul = $("<ul >");
		var i=0;
		for(var key in obj){
			//console.log(obj[key].src)	
				i++;			
				var $img = $("<img src="+obj[key].src+">");
				var $a = $("<a href='#'>")
				var $li = $("<li>")
				$img.appendTo($a);
				$a.appendTo($li)
				$li.appendTo($ul);
//				$p_name = $("<p class='star_name'>").appendTo($li);
//				$a_p_n = $("<a href='#'>").appendTo($p_name);
				addP_a1(obj[key]);
				//console.log(obj[key])
		}
		$ul.appendTo($(".star_main"));	
		$(".star_main ul").css({"width":Math.ceil($li.width()*i)+"px"})		
	}
		
	function addP_a1(obj){
		console.log(obj)
		
		
	}
	
	
})

	
	


