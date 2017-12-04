Vue.component("user",{
	template:
	`
		<a :href="username">@ {{username}}</a>
	`,
	props:["username"],
//	methods:{
//		clicked:function(){
//			alert(this.tt)
//		}
//	}
})






new Vue({
	el:"#app"
})
