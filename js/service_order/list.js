var main = new Vue({
	el: '#main',
	data: {
		titles: ["待接单", "待服务", "已完成"],
		isActive: 1, //当前是那一项
		response: [
			{
				orderId : "",
				orderTime : "",
				serviceId : "1",
				serviceName : "服务名称",
				serviceGeneral : "",
				peopleAddress : "",
				peoplePhone : "",
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
		],
		response2: [
			{
				orderId : "",
				orderTime : "",
				serviceId : "1",
				serviceName : "服务名称",
				serviceGeneral : "",
				peopleAddress : "",
				peoplePhone : "联系电话",
				peopleName : "",
				nurseId : "",
				nurseIcon : "../../img/pinggu_sq/06.png",
				nurseNo : "服务人员工号",
				nursePrice : "服务价格",
				nurseName : "",
				nurseGender : "女",
				nurseGoodAt : "",
				checkInTime : "",
				checkOutTime : "",
			},
		],
		response3: [
			{
				orderId : "",
				orderTime : "",
				serviceId : "1",
				serviceName : "服务名称",
				serviceGeneral : "",
				peopleAddress : "",
				peoplePhone : "联系电话",
				peopleName : "",
				nurseId : "",
				nurseIcon : "../../img/pinggu_sq/06.png",
				nurseNo : "服务人员工号",
				nursePrice : "服务价格",
				nurseName : "",
				nurseGender : "女",
				nurseGoodAt : "",
				checkInTime : "",
				checkOutTime : "",
			},
		],
		level:0,//等级
		tcshow:false,
		shownum:0,
	},
	methods: {
		listtoggle: function(n) {
			this.isActive = n;
		},
		pingjiadj:function(numb){
			this.level=numb;
		},
		cancelorder:function(){
			this.tcshow=false;
			this.shownum=0;
		}
	}
})