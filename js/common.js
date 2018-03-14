//var _base = "http://172.16.21.91:8091";//焦雷
//var _base = "http://172.16.24.169:8090";//张阳
var _base = "http://demo.sqsh365.com:7001";
//var _base = "http://11.65.9.85:8084";
//var _baseUrl = _base + '/WebDemo'; //服务WebDemo
var _baseUrl = _base + '/ytyyjh'; //服务
//var userID=localStorage.userId ? localStorage.userId.split(","):[];
var user_info = JSON.parse(localStorage.user_info||'{}');
var Url = {
	PGAPPLY_CHECK: _baseUrl + "/rest/medical/account/check",//用户验证
	PGAPPLY_PGAPPLY: _baseUrl + "/rest/customerApp/pgApply/pgApply",//评估申请
	PGAPPLY_LIST:_baseUrl + "/rest/customerApp/pgApply/pgApplyList",//评估申请列表
	PGAPPLY_LISTDETAIL:_baseUrl + "/rest/customerApp/pgApply/pgApplyListDetail",//评估申请列表详情
	PGAPPLY_EVALUATE:_baseUrl + "/rest/customerApp/pgApply/pgDetailEvaluate",//评估详情评价
	FWAPPLY_LIST:_baseUrl + "/rest/customerApp/fwApply/fwApplyList",//服务申请列表
	FWAPPLY_SERVICE:_baseUrl + "/rest/customerApp/fwApply/orderService",//服务预约
	FWORDER_LIST:_baseUrl + "/rest/customerApp/fwOrder/fwOrderList",//服务订单列表
	FWORDER_CANCEL:_baseUrl + "/rest/customerApp/fwOrder/fwOrderCancel",//服务订单取消
	FWORDER_EVALUATE:_baseUrl + "/rest/customerApp/fwOrder/fwOrderEvaluate",//服务订单评价
}
//ios heard适配
var iosipone=false;
var ua = navigator.userAgent.toLowerCase();
if (ua.match(/iPhone\sOS/i) == "iphone os") {
	iosipone=true;
	$('body').prepend('<div id="iosbox2" style="height: 18px;background: #698af3;"></div>')
}
//loading
function showLoading() {
	if ($('body').find('.allcommomn_backdrop').length == 0) {
		$('body').append('<div class="allcommomn_backdrop textC radius10P"><img class="height3R" src="../../img/home/loading.gif" onerror="this.src=\'img/home/loading.gif\'"/></div>');
		delete index;
	} else{
		$('body').find('.allcommomn_backdrop').show();
	}
}
function hideLoading() {
	$('body').find('.allcommomn_backdrop').hide();
}
function ajaxPost(url, data, successCallback, errorCallback) {
	showLoading();
	$.ajax({
		type: "post",
		url: url,
		headers: {
			"userId":user_info.userId,
			"token":user_info.token
		},
		data: data,
		timeout: '30000',
		success:function(data){
			hideLoading()
			successCallback(data);
		},
		error:function(){
			hideLoading()
			console.log("请求失败")
			log_message("无数据")
			if(errorCallback){
				errorCallback()
			}
		}
	});
}
//消息弹框
var timeId;
function log_message(message){
	clearTimeout(timeId);
	if($('body').find('.log_message').length>0){
		$('body').find('.log_message').remove();
		$('body').append('<div class="log_message radius10P font1-2 LH2">'+message+'</div>');
		delete index;
	}else{
		$('body').append('<div class="log_message radius10P font1-2 LH2">'+message+'</div>');
		delete index;
	}
	timeId=setTimeout(function(){
		$('body').find('.log_message').remove();
	},3000)
}

//获取_basePath
var script = document.currentScript || dynamicLoading.eachReverse(document.getElementsByTagName('script'), function(_script) {
	var _src = _script.getAttribute('src');
	if(_src && (_src.lastIndexOf('main.js') != -1)) {
		script = _script;
		script._src = _src;
		return false;
	}
}) || {};
script._src = script.getAttribute('src');
var _basePath = script._src.substring(0, script._src.indexOf('js')) || '';
console.log( _basePath)
//添加打印控件
/*
function addcon () {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = _basePath +'js/vconsole.min.js';
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(script);
//	var script2 = document.createElement('script');
//	script2.innerHTML='var vConsole = new VConsole()';
//	head.appendChild(script2)
};
addcon ();
window.onload=function(){
	var vConsole = new VConsole();
}
*/
