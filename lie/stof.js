Vue.component('banlance',{
	template:
	`
		<div>
			<show @banlances="show_banlance">显示余额</show>
			<div v-if="show">你的余额为￥60</div>
		</div>
	`,
	data:function(){
		return {
			show:false
		}
	},
	methods:{
		show_banlance:function(data){
			this.show = true;
			console.log(data);
		}
	}
});

Vue.component("show",{
	template:
	`
		<button @click="clicked">显示余额</button>
	`,
	methods:{
		clicked:function(){
			this.$emit("banlances",{a:1,b:2})
		}
	}
	
});

new Vue({
	el:"#app"
});


