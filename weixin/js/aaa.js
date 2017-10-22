var pageHeight = window.innerHeight;
mui("#bodym").on('swipeup', '.mmain', function() {
//				alert("changans上画")
alert($(".mmain").css("marginTop"))
			$(".mmain").animate({ 
			   marginTop:"-"+pageHeight
//				marginTop:"-300"
			  }, 1000 )
alert($(".mmain").css("marginTop"))
			})