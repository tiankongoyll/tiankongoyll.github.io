var main = new Vue({
	el: '#main',
	data: {
		loading:'',
		pagNamb:0,
		titles: ["待接单", "待服务", "已完成"],
		isActive: 1, //当前是那一项
		user:JSON.parse(localStorage.user_info||'{}'),
		response: [],
		response2: [],
		response3: [],
		pingjia_response:{},
		level:0,//等级
		tcshow:false,
		shownum:0,
		quxiaoid:""
	},
	methods: {
		listtoggle: function(n) {
			this.isActive = n;
			this.loading='';
			this.pagNamb=0;
			this.response.length=0;
			this.response2.length=0;
			this.response3.length=0;
			if(n ==1){
				ajax(0);
			}else if(n ==2){
				ajax(1);
			}else if(n ==3){
				ajax(4);
			}
			
		},
		pingjiadj:function(numb){
			this.level=numb;
		},
		cancelorder:function(cancelorder){
			cancel(this.quxiaoid);
			this.tcshow=false;
			this.shownum=0;
		},
		openurl:function(n,json){
			if(n == 1){
				json.ordertype=1;
				json.ordertypetext="待接单";
			}else if(n == 2){
				json.ordertype=2;
				json.ordertypetext="待服务";
			}else if(n == 3){
				if(json.pjdj||json.pjnr){
					json.ordertype=4;
					json.ordertypetext="已评价";
				}else{
					json.ordertype=3;
					json.ordertypetext="已完成";
				}
			}
			sessionStorage.service_order=JSON.stringify(json);
			window.location.href='details.html';
		},
		onScroll:function(ref){
//			console.log("滚动高度："+this.$refs[ref].scrollTop+"可视高度："+this.$refs[ref].clientHeight+"文档高度："+this.$refs[ref].scrollHeight)
			if(this.$refs[ref].scrollTop+this.$refs[ref].clientHeight >= this.$refs[ref].scrollHeight-2){
//				console.log("调用加载")
				if(this.isActive == 3){
					ajax(4,this.pagNamb)
				}else if(this.isActive == 1){
					ajax(0,this.pagNamb)
				}else if(this.isActive == 2){
					ajax(2,this.pagNamb)
				}
			}
		}
	}
})
function ajax(type,pageNo){
	if(!main.loading){
		main.loading="正在加载 . . .";
		ajaxPost(
			Url.FWORDER_LIST, 
			{
				"pageNo":pageNo||'0',
				"pageSize":"10",
				"type":type
			},
			function(data) {
				console.log(data)
				if(data.status==1){
					main.pagNamb+=1;
					if(data.response.length == 0 || data.response.length<10){
						main.loading="没有更多了。。。"
					}else{
						main.loading='';
					}
					if(type == 0){
						for(var i=0;i<data.response.length;i++){
							main.response.push(data.response[i])
						}
						document.getElementById("main").setAttribute("style","display: block;")
					}else if(type == 1){
						for(var i=0;i<data.response.length;i++){
							main.response2.push(data.response[i])
						}
					}else if(type == 4){
						for(var i=0;i<data.response.length;i++){
							main.response3.push(data.response[i])
						}
					}
				}else{
					main.loading="";
				}
			},
			function(){
				main.loading="";
			}
		)
	}
}
ajax("0")

function cancel(orderId){
	ajaxPost(
		Url.FWORDER_CANCEL, 
		{
			"orderId":orderId,
		},
		function(data) {
			console.log(data)
			window.location.reload(true);
			alert("订单取消成功")
	//		main.response=data.response
		}
	)
}
