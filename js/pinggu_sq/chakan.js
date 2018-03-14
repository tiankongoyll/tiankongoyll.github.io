var main = new Vue({
	el: '#main',
	data: {
		name:"王自健",
		sex:"男",
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
		response:{
            acceptName: "",
			acceptIcon: "",
			acceptGender: "",
			acceptAddress: "",
			acceptAge: "", 
			acceptCard: "", 
			mechanismAddress: "",
			applicationTime: "评估申请时间",
			acceptTime: "评估受理时间", 
			assessTime:"评估派单时间",
			assessConfirmTime: "评估确认时间",
			resultConfirmTime: "评估结果确认时间",
            workId: "",
             workerid: " ",
             workerIcon: " ",
             workerName: " ",
             workerGender: " ",
             workerPhone: " ",
             workStatus: 5,
        }

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
		"workId": "oorder20171226",
	},
	function(data) {
		console.log(data)
		alert("提交完成")
	}
)
