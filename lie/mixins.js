
var common = {
	data:function(){
		return {
			visible:false
		}
	},
	methods:{
		show:function(){
			this.visible=true;
		},
		hide:function(){
			this.visible=false;
		},
		toggle:function(){
			this.visible = !this.visible
		}
	}
}

Vue.component("tooltip",{
	template:
	`
		<div>
			<p @mouseenter="show" @mouseleave="hide">ttry</p>
			<div v-if="visible">stext</div>
		</div>
	`,
	mixins:[common]
});


Vue.component("popup",{
	template:
	`
		<div>
			<button @click="toggle"> popup </button>
			<div v-if="visible">
				<p @click="hide">X</p>
				<h4>
					title 
				</h4>
				<p>
					一大串文字啊是的垃圾死了的卡洛斯肯德基阿历克斯看啦可视对讲卢卡斯领导看见啦开始角度来看啦这些,没出门下次再买新车啦啦科技时代 
					一大串文字啊是的垃圾死了的卡洛斯肯德基阿历克斯看啦可视对讲卢卡斯领导看见啦开始角度来看啦这些,没出门下次再买新车啦啦科技时代 
					一大串文字啊是的垃圾死了的卡洛斯肯德基阿历克斯看啦可视对讲卢卡斯领导看见啦开始角度来看啦这些,没出门下次再买新车啦啦科技时代 
					一大串文字啊是的垃圾死了的卡洛斯肯德基阿历克斯看啦可视对讲卢卡斯领导看见啦开始角度来看啦这些,没出门下次再买新车啦啦科技时代 
					一大串文字啊是的垃圾死了的卡洛斯肯德基阿历克斯看啦可视对讲卢卡斯领导看见啦开始角度来看啦这些,没出门下次再买新车啦啦科技时代 
					一大串文字啊是的垃圾死了的卡洛斯肯德基阿历克斯看啦可视对讲卢卡斯领导看见啦开始角度来看啦这些,没出门下次再买新车啦啦科技时代 
					一大串文字啊是的垃圾死了的卡洛斯肯德基阿历克斯看啦可视对讲卢卡斯领导看见啦开始角度来看啦这些,没出门下次再买新车啦啦科技时代
				</p>
			</div>
			
		</div>
	`,
	mixins:[common],
	data:function(){
		return {
			visible:true
		}
	}
})

new Vue({
	el:"#app"
})
