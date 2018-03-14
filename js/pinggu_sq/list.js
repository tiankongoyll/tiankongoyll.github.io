var main = new Vue({
	el: '#main',
	data: {
		response: [
			{
				applicationTime: "评估申请时间",
				acceptTime: "评估受理时间",
				acceptTime: "评估派单时间",
				assessConfirmTime: "评估确认时间",
				resultConfirmTime: "评估结果确认时间",
				workId: "工单id",
				workerid: "服务人员id",
				workerIcon: "头像",
				workerName: "姓名",
				workerGender: "女",
				workerPhone: "电话号码",
				workStatus: "1"
			},
			{
				applicationTime: "评估申请时间",
				acceptTime: "评估受理时间",
				acceptTime: "评估派单时间",
				assessConfirmTime: "评估确认时间",
				resultConfirmTime: "评估结果确认时间",
				workId: "工单id",
				workerid: "服务人员id",
				workerIcon: "../../img/pinggu_sq/06.png",
				workerName: "姓名",
				workerGender: "男",
				workerPhone: "电话号码",
				workStatus: "2"
			}

		]
	}
})

ajaxPost(
	Url.PGAPPLY_LIST, 
	{
		"pageNo":"0",
		"pageSize":"10"
	},
	function(data) {
		console.log(data)
		main.response=data.response
	}
)