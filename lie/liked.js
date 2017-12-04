Vue.component("liked",{
	template:
		`
			<button @click="likeds" :class="{liked:like,pointer:trues}">
				点赞 {{likedCount}}
			</button>
		`,
	data:function(){
		return {
			likedCount:10,
			like:false,
			trues:true
		}
	},
	methods:{
		likeds:function(){
			if(!this.like){
				this.likedCount++;
			}
			else{
				this.likedCount--;
			}
			this.like = !this.like
		}
	}
});


new Vue({
	el:"#app"
})
