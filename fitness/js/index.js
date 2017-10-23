var jsonobj={
	kecong:'课程管理',
	kecong2:["课程管理1","课程管理2","课程管理3","4333","课程管理",],
	xunlian:'训练管理',
	xunlian2:['训练管理','训练管理','训练管理','训练管理','训练管理',],
	yuyue:"预约管理",
	yuyue2:["预约管理","预约管理","预约管理","预约管理","预约管理",],
	kec:"课程打分",
	kec2:["课程打分","课程打分","课程打分","课程打分","课程打分",],
	jifen:"积分商城",
	jifen2:["积分商城","积分商城","积分商城","积分商城","积分商城",]
}
//侧菜单隐藏收起
$(".record-head").toggle(
	function () {
	    $(".record ul").hide("fast")
	  },
	  function () {
	    $(".record ul").show("fast")
	  }
);
$(".mine-head").toggle(
	function () {
	    $(".mine ul").hide("fast")
	  },
	  function () {
	    $(".mine ul").show("fast")
	  }
);
//菜单左右移动
$(".theleft").click( function () { 

	console.log("sdd")
	$(".themiddle").scrollLeft($(".themiddle").scrollLeft()+170)
//	$(".themiddle ul").animate({ 
//  marginLeft:marginleft+"px"
//}, 500 );
});
$(".theright").click( function () {
	
	$(".themiddle").scrollLeft($(".themiddle").scrollLeft()-170)
//	marginleft+=170;
//	$(".themiddle ul").animate({ 
//  marginLeft:marginleft+"px"
//}, 500 );
});
$(".record li").click(function(){
	$(".record li").each(function(){
		$(this).removeClass("hover");
	})
	$(".mine li").each(function(){
		$(this).removeClass("hover");
	})
	$(this).addClass("hover")
})
$(".mine li").click(function(){
	$(".record li").each(function(){
		$(this).removeClass("hover");
	})
	$(".mine li").each(function(){
		$(this).removeClass("hover");
	})
	$(this).addClass("hover")
})
$(".m-heard li").click(function(){
	$(".m-heard li").each(function(){
		$(this).removeClass("hover");
	})
	$(".record li").each(function(){
		$(this).removeClass("hover");
	})
	$(".mine li").each(function(){
		$(this).removeClass("hover");
	})
	$(this).addClass("hover")
	$(".record ul li:first-child").addClass("hover")
	console.log($(this).index())
	if($(this).index()==0){
		$(".record-head").html(jsonobj.kecong)
		$(".record li").each(function(){
			$(this).html(jsonobj.kecong)
		})
		$(".mine li").each(function(n,i){
			$(this).html(jsonobj.kecong2[n])
		})
	}else if($(this).index()==1){
		$(".record-head").html(jsonobj.xunlian)
		$(".record li").each(function(){
			$(this).html(jsonobj.xunlian)
		})
		$(".mine li").each(function(n,i){
			$(this).html(jsonobj.xunlian2[n])
		})
	}else if($(this).index()==2){
		$(".record-head").html(jsonobj.yuyue)
		$(".record li").each(function(){
			$(this).html(jsonobj.yuyue)
		})
		$(".mine li").each(function(n,i){
			$(this).html(jsonobj.yuyue2[n])
		})
	}else if($(this).index()==3){
		$(".record-head").html(jsonobj.kec)
		$(".record li").each(function(){
			$(this).html(jsonobj.kec)
		})
		$(".mine li").each(function(n,i){
			$(this).html(jsonobj.kec2[n])
		})
	}else if($(this).index()==4){
		$(".record-head").html(jsonobj.jifen)
		$(".record li").each(function(){
			$(this).html(jsonobj.jifen)
		})
		$(".mine li").each(function(n,i){
			console.log(n)
			console.log(i)
			$(this).html(jsonobj.jifen2[n])
		})
	}
	
})
