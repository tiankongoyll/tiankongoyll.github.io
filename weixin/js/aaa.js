	mui("#bodym").on('swipeup', '.mmain', function() {
		var pageHeight = window.innerHeight * 750 / document.documentElement.clientWidth;
		var nam=document.getElementById("mmain").clientHeight;
		var nam1 = parseInt(nam / pageHeight);
//		var nam2 =pageHeight*750/document.documentElement.clientWidth
		console.log(nam1)
		console.log(pageHeight)
		console.log($(".mmain").css("marginTop"))
		if(parseInt($(".mmain").css("marginTop")) > -(nam1-1)*pageHeight+50) {
			console.log("上移")
			$(".mmain").animate({
				marginTop: parseInt($(".mmain").css("marginTop")) - pageHeight
			}, 1000)
		}else{
			console.log("上移置顶")
			$(".mmain").animate({
				marginTop: -nam+pageHeight
			}, 1000)
		}
	})
	mui("#bodym").on('swipedown', '.mmain', function() {
		var pageHeight = window.innerHeight * 750 / document.documentElement.clientWidth;
		var nam=document.getElementById("mmain").clientHeight;
		var nam1 = parseInt(nam / pageHeight);
		console.log(nam1)
		
		if(parseInt($(".mmain").css("marginTop"))<-(pageHeight)) {
			console.log("下滑")
			$(".mmain").animate({
				marginTop: parseInt($(".mmain").css("marginTop")) + pageHeight
			}, 1000)
		}else{
			console.log("下滑置顶")
			$(".mmain").animate({
				marginTop: 0
			}, 1000)
		}
	})
//}