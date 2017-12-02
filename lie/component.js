
var alerts ={
				template:'<button @click="on_click">弹弹弹</button>',
				methods:{
					on_click:function(){
						alert("Yo.")
					}
				}
			}

var app = new Vue({
	el:"#app",
	components:{
		alert:alerts
	}
});

var add = new Vue({
	el:"#add",
	components:{
		alertss:alerts
	}
})
