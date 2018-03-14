function qqq() {
	(function($) {
		$.init();
		var btns = $('.btn');
		btns.each(function(i, btn) {
			//				btn.removeEventListener('tap');
			//				console.log($(this).Event("tap"))
			if(btn.getAttribute("data-test") == "1") {
				//		            continue;
			} else {

				btn.setAttribute("data-test", "1");
				btn.addEventListener('tap', function() {
					var optionsJson = this.getAttribute('data-options') || '{}';
					var options = JSON.parse(optionsJson);
					var id = this.getAttribute('id');
					/*
					 * 首次显示时实例化组件
					 * 示例为了简洁，将 options 放在了按钮的 dom 上
					 * 也可以直接通过代码声明 optinos 用于实例化 DtPicker
					 */
					var picker = new $.DtPicker(options);
					result = $(".ui-alert")[i];
					picker.show(function(rs) {
						/*
						 * rs.value 拼合后的 value
						 * rs.text 拼合后的 text
						 * rs.y 年，可以通过 rs.y.vaue 和 rs.y.text 获取值和文本
						 * rs.m 月，用法同年
						 * rs.d 日，用法同年
						 * rs.h 时，用法同年
						 * rs.i 分（minutes 的第二个字母），用法同年
						 */
						result.innerText = rs.text;
						/* 
						 * 返回 false 可以阻止选择框的关闭
						 * return false;
						 */
						/*
						 * 释放组件资源，释放后将将不能再操作组件
						 * 通常情况下，不需要示放组件，new DtPicker(options) 后，可以一直使用。
						 * 当前示例，因为内容较多，如不进行资原释放，在某些设备上会较慢。
						 * 所以每次用完便立即调用 dispose 进行释放，下次用时再创建新实例。
						 */
						picker.dispose();
					});
				}, false);
			}
		});

	})(mui);
}
//=======增加下面时间列表============

$(function() {
//	$(".address").click(function() {
//		window.location.href = "address.html"
//	})

	if($("#test").val() == "1") {
		$("#remove").attr("disabled", "disabled")
	};
	var allList = $("#allList");
	var add = $("#add");
	var remove = $("#remove");
	var x = allList.length;
	var num = 1;
	add.click(function(e) {
		num++;
		allList.append('<li class="mui-table-view-cell btn " id="list_' + num + '"  data-options="{}" ><a class="mui-navigate-right">预约服务时间<div id="result_' + num + '" class="ui-alert">未选择</div></a></li>')

		qqq();
	})
	remove.click(function() {
		allList.find("li").last().remove();
		console.log($("#test").val())
		if($("#test").val() == "1") {
			$("#remove").attr("disabled", "disabled")
		}
	})
	qqq()

	//===判断时间是否填写===
	$(".submit").click(function() {
		var nexturl = true;
		var arrtime="";
		for(var i = 0; i < $(".ui-alert").length; i++) {
			console.log($(".ui-alert").eq(i).html())
			if(i == 0){
				arrtime = $(".ui-alert").eq(i).html();
			}else{
				arrtime += ","+$(".ui-alert").eq(i).html()
			}
			
			if($(".ui-alert").eq(i).html() == "未选择") {
				$(".bg").css("display", "block");
				$(".model").css("display", "block");
				nexturl = false;
				break;
			}
		}
		if(nexturl) {
			console.log(arrtime)
			place_order(arrtime)
//			window.location.href = 'fuwu_index.html'
		}
	})
	$(".model").click(function() {
		$(".model").css("display", "none");
		$(".bg").css("display", "none");
	})

	$("header img").click(function() {
		window.location.href = "javascript:history.back(-1)"
	})

})

//
var user=JSON.parse(localStorage.user_info||"{}");
$(".name").html(user.name);
$(".sex").html(user.gender+"士");
$(".tel").html(user.phone);
$("useraddress").html(user.address);
var buy=JSON.parse(sessionStorage.zhushe||"{}");
$(".tname").html(buy.serviceGeneral||"【暂无内容】");
$("#price").html(buy.serviceMypay||"00.00");
$("#priceyibao").html(buy.serviceYbpay||"00.00");
function place_order(arrtime){
	ajaxPost(
		Url.FWAPPLY_SERVICE, 
		{
			"serviceId":buy.serviceId,
			"orderTime":arrtime
		},
		function(data) {
			console.log(data)
			if(data.status == "1"){
//				window.location.href = 'fuwu_index.html';
				log_message(data.message)
			}else{
				log_message(data.message)
			}
		}
	)
}
//place_order()