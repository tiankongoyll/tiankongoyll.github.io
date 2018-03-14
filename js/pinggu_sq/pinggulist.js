var main = new Vue({
	el: '#main',
	data: {
		loading:'',
		pagNamb:0,
		user:JSON.parse(localStorage.user_info||'{}'),
		response: [],
		appraise:{},
		level:0,
		tcshow:false,
		shownum:3,
		workId:"",
		pingjia_message:""
	},
	methods:{
		goping:function(workId){
			details(workId)
			this.tcshow=true
			this.workId=workId;
		},
		pingjiadj:function(numb){
			this.level=numb;
		},
		pingjia:function(){
			this.tcshow=false;
			pingjia_ajax(this.workId,this.level,this.pingjia_message)
		},
		onScroll:function(ref){
//			console.log("滚动高度："+this.$refs[ref].scrollTop+"可视高度："+this.$refs[ref].clientHeight+"文档高度："+this.$refs[ref].scrollHeight)
			if(this.$refs[ref].scrollTop+this.$refs[ref].clientHeight >= this.$refs[ref].scrollHeight-2){
//				console.log("调用加载")
				jiazai(this.pagNamb)
			}
		}
	}
})
function jiazai(pageNo){
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
				document.getElementById("main").setAttribute("style","display: block;height: 93%")
				if(data.status == "1"){
					main.pagNamb+=1;
					if(data.response.length == 0 || data.response.length<10){
						main.loading="没有更多了。。。"
					}else{
						main.loading='';
					}
					for (var i=0;i<data.response.length;i++) {
						if(data.response[i].workStatus==4&&data.response[i].isComment==0){
							main.response.push(data.response[i])
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
};
jiazai();
//详情
function details(workId){
	ajaxPost(
	Url.PGAPPLY_LISTDETAIL,
	{
		"workId": workId,
	},
	function(data) {
		console.log(data)
		if(data.status == "1"){
			main.appraise=data.response[0]
		}
	}
)
}
//评价
function pingjia_ajax(a,b,c){
	ajaxPost(
		Url.PGAPPLY_EVALUATE, 
		{
			"workId":a,
			"level":b,
			"discuss":c
		},
		function(data) {
			console.log(data)
			log_message(data.message)
			window.location.reload(); 
//			jiazai();
		}
	)
}
