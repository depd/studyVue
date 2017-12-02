var app = new Vue({
	el:"#app",
	
	data:{
		
		math:80,
		
		physics:90,
		
		english:60,
		
	},
	
	computed:{
		
		sum : function(){
			return parseFloat(this.math) + this.physics + this.english
		},
		
		average : function(){
			return Math.round(this.sum/3)
		}
	}
})
