var main = new Vue({
	el: '#main',
	data: {
		order:{
				ordertypetext:"待服务",
				ordertype:"4",//订单状态1、2、3、4
				orderId : "",
				orderTime : "",
				serviceId : "1",
				serviceName : "服务名称",
				serviceGeneral : "",
				peopleAddress : "",
				peoplePhone : "18003722634",
				peopleName : "",
				nurseId : "",
				nurseIcon : "../../img/pinggu_sq/06.png",
				nurseNo : "服务人员工号",
				nursePrice : "服务价格",
				nurseName : "",
				nurseGender : "",
				nurseGoodAt : "",
				checkInTime : "",
				checkOutTime : "",
			},
			level:0,//等级
			tcshow:false,
//			shownum:0,
	},
	methods: {
		pingjiadj:function(numb){
			if(this.order.ordertype == 3){
				this.level=numb;
			}
		},
		cancelorder:function(){
			this.tcshow=false;
//			this.shownum=0;
		}
	}
})