var Event = new Vue();

Vue.component("huahua",{
	template:
		`
			<div>
				我说:
				<input type="text" v-model="iside" @keyup="huahua_side"/>
			</div>
		`,
	data:function(){
		return {
			iside:""
		}
	},
	methods:{
		huahua_side:function(){
			Event.$emit("huahua-side-something",this.iside)
		}
	}
});

Vue.component("shuandan",{
	template:
	`
		<div>
			花花说:
			<input type="text" v-model="huahuaside"/>
		</div>
	`,
	data:function(){
		return {
			huahuaside:''
		}
	},
	mounted:function(){
		var that = this;
		Event.$on("huahua-side-something",function(data){
			that.huahuaside = data;
		});
	}
})

new Vue({
	el:"#app"
})
