var main = new Vue({
	el: '#main',
	data: {
		user:JSON.parse(localStorage.user_info||'{}'),
		items:[
			 {
			 	status:"评估申请"
			 },
			 {
			 	status:"评估受理"
			 },
			 {
			 	status:"评估派单"
			 },
			 {
			 	status:"评估确认"
			 },
			 {
			 	status:"结果确认"
			 },
		],
		level:0,
		tcshow:false,
		shownum:null,
		response:{}
	},
	methods:{
		qiangqing:function(num){
			this.tcshow=true;
			if(num==0){
				this.shownum=0;
			}else if(num==1){
				this.shownum=1;
			}else if(num==2){
				this.shownum=2;
			}else if(num==3){
				this.shownum=3;
			}else if(num==4){
				this.shownum=4;
			}
		},
		pingjiadj:function(numb){
			this.level=numb;
		}
	}
	
})

ajaxPost(
	Url.PGAPPLY_LISTDETAIL,
	{
		"workId": sessionStorage.pinggu_sq,
	},
	function(data) {
		console.log(data)
		if(data.status == "1"){
			if(data.response[0]){
				if(data.response[0].workStatus == "1-1"){data.response[0].workStatus=1;}
			}
			main.response=data.response[0]||{};
		}
	}
)
document.getElementById("main").setAttribute("style","display: block;")