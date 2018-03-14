var _base = "http://172.16.24.160:8090";
var _baseUrl = _base + '/WebDemo'; //服务
var Url = {
	PGAPPLY_PGAPPLY: _baseUrl + "/rest/customerApp/pgApply/pgApply",//评估申请
	PGAPPLY_LIST:_baseUrl + "/rest/customerApp/pgApply/pgApplyList",//评估申请列表
	PGAPPLY_LISTDETAIL:_baseUrl + "/rest/customerApp/pgApply/pgApplyListDetail",//评估申请列表详情
	PGAPPLY_EVALUATE:_baseUrl + "/rest/customerApp/pgApply/pgDetailEvaluate",//评估详情评价
	FWAPPLY_LIST:_baseUrl + "/rest/customerApp/pgApply/pgDetailEvaluate",//服务申请列表
}

function ajaxPost(url, data, successCallback, errorCallback) {
	
	$.ajax({
		type: "post",
		url: url,
		headers: {
			"userId": "20171226002",
			"token": "1"
		},
		data: data,
		timeout: '30000',
		success:successCallback,
		error:errorCallback
	});
}