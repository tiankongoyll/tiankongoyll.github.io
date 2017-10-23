//window.onload = window.onresize = function() {
	
	//alert(document.getElementById("mmain").clientHeight * document.documentElement.clientWidth / 750)
	mui("#bodym").on('swipeup', '.mmain', function() {
		var pageHeight = window.innerHeight;
		var nam=document.getElementById("mmain").clientHeight * document.documentElement.clientWidth / 750
		var nam1 = parseInt(nam / pageHeight);
		console.log(nam1)
		
		if(parseInt($(".mmain").css("marginTop"))<(nam1-1)*pageHeight-50) {
			console.log("上移")
			$(".mmain").animate({
				marginTop: parseInt($(".mmain").css("marginTop")) - pageHeight
			}, 1000)
		}else{
			console.log("上移置顶")
			$(".mmain").animate({
				marginTop: nam-nam1*pageHeight
			}, 1000)
		}
	})
	mui("#bodym").on('swipedown', '.mmain', function() {
		var pageHeight = window.innerHeight;
		var nam=document.getElementById("mmain").clientHeight * document.documentElement.clientWidth / 750
		var nam1 = parseInt(nam / pageHeight);
		console.log(nam1)
		
		if(parseInt($(".mmain").css("marginTop"))>pageHeight) {
			console.log("下滑")
			$(".mmain").animate({
				marginTop: $(".mmain").css("marginTop") + pageHeight
			}, 1000)
		}else{
			console.log("下滑置顶")
			$(".mmain").animate({
				marginTop: 0
			}, 1000)
		}
	})
//}