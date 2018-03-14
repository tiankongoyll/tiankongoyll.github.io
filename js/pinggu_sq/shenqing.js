var main = new Vue({
	el: '#main',
	data: {
		idCard: "oorder20171226",
		adress: "上海徐汇",
		yizhi: false,
		user:JSON.parse(localStorage.user_info||'{}'),
	},
	methods: {
		yuedu: function() {
			this.yizhi = !this.yizhi
		},
		tijiao: function() {
			if(this.yizhi){
				qingqiu()
			}else{
				log_message("请勾选申请须知")
			}
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
			log_message(data.message)
			setTimeout("window.history.go(-1)",1000)
		}
	)
}

