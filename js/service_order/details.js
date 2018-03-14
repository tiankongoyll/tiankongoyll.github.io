var main = new Vue({
	el: '#main',
	data: {
		user:JSON.parse(localStorage.user_info||'{}'),
		order:JSON.parse(sessionStorage.service_order||'{}'),
		tcshow:false,
		ios:iosipone,
	},
	methods: {
		pingjiadj:function(numb){
			if(this.order.ordertype == 3){
				this.order.pjdj=numb;
			}
		},
		cancelorder:function(){
			this.tcshow=false;
		},
		evaluation:function(){
			pingjia(this.order.pjdj,this.order.pjnr)
			this.tcshow=false;
		},
		telipon:function(ipon){
			console.log("调用iOS方法"+ipon)
			secondClick(ipon)
		}
	}
})

function pingjia(level,discuss){
	ajaxPost(
		Url.FWORDER_EVALUATE, 
		{
			"orderId":main.order.orderId,
			"level":level,
			"discuss":discuss
		},
		function(data) {
			console.log(data)
			log_message("评价成功")
			window.history.go(-1);
		}
	)
}
if(iosipone){
	document.getElementById("iosbox").setAttribute("style","top: 18px;")
	document.getElementById("iosbox2").setAttribute("style","position: fixed;top: 0px;left: 0px;height: 18px;width:100%;background: #698af3;")
}
document.getElementById("main").setAttribute("style","display: block;")