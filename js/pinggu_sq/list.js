var main = new Vue({
	el: '#main',
	data: {
		loading:'',
		pagNamb:0,
		response: []
	},
	methods:{
		openurl:function(workerid){
			sessionStorage.pinggu_sq = workerid;
			window.location.href='chakan.html';
		},
		onScroll:function(ref){
//			console.log("滚动高度："+this.$refs[ref].scrollTop+"可视高度："+this.$refs[ref].clientHeight+"文档高度："+this.$refs[ref].scrollHeight)
			if(this.$refs[ref].scrollTop+this.$refs[ref].clientHeight >= this.$refs[ref].scrollHeight-2){
//				console.log("调用加载")
				callload(this.pagNamb)
			}
		}
	}

})

function callload(pageNo){
	if(!main.loading){
		main.loading="正在加载 . . .";
		ajaxPost(
			Url.PGAPPLY_LIST, 
			{
				"pageNo":pageNo||'0',
				"pageSize":"10"
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
					for(var i=0;i<data.response.length;i++){
						main.response.push(data.response[i])
					}
					document.getElementById("main").setAttribute("style","display: block;")
//					main.response=data.response
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
callload();
//document.getElementById("main").setAttribute("style","display: block;")