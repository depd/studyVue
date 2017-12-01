var app = new Vue({
	el:"#app",
	data:{
		foodList:[
			{
				name:"葱",
				price: 25,
				discount:0.8
			},
			{
				name:"姜",
				price: 20,
				discount:0.8
			},
			{
				name:"蒜",
				price: 18
			}
		],
		isactive:false,
	},
	methods:{
		onClick:function(){
			console.log("clicked:点击了");
		},
		enter:function(){
			console.log("enter");
		},
		outer:function(){
			console.log("outer");
		},
		onsubmit:function(){
			console.log("aaa");
		},
		keyup:function(){
			console.log("foodList");
		},
		keyups:function(){
			console.log("foodLists");
		}
	}
})
