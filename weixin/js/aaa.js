var pageHeight = window.innerHeight;
alert(document.getElementById("mmain").clientHeight * document.documentElement.clientWidth / 750;)
mui("#bodym").on('swipeup', '.mmain', function() {
//				alert("changans上画")
			$(".mmain").animate({ 
			   marginTop:parseInt($(".mmain").css("marginTop"))-pageHeight
//				marginTop:"-300"
			  }, 1000 )
//alert("ss")

alert(parseInt($(".mmain").css("marginTop")))
			})