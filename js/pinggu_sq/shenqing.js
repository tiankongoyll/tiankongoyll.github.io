var main = new Vue({
	el: '#main',
	data: {
		idCard: "oorder20171226",
		adress: "上海徐汇",
		yizhi: false
	},
	methods: {
		yuedu: function() {
			this.yizhi = !this.yizhi
		},
		tijiao: function() {
			qingqiu()
		}
	}
})

function qingqiu() {
	ajaxPost(
		Url.PGAPPLY_PGAPPLY, 
		{
			"idCard": main.idCard,
			"address": main.adress
		},
		function(data) {
			console.log(data)
			alert("提交完成")
			window.history.go(-1)
		}
	)
//	alert("提交完成")
//	window.history.go(-1)
}

