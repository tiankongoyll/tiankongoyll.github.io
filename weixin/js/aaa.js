var pageHeight = window.innerHeight;
mui("#bodym").on('swipeup', '.mmain', function() {
//				alert("changans上画")
			$(".mmain").animate({ 
			   marginTop:parseInt($(".mmain").css("marginTop"))-pageHeight
//				marginTop:"-300"
			  }, 1000 )
//alert("ss")

alert($(".mmain").css("marginTop")
			})