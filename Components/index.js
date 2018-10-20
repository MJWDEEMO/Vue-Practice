Vue.component('todo-item',{
	// todo-item 组件现在接受一个"prop"，类似于一个自定义特性,这个 prop 名为 todo
	props:['todo'],
	template:'<li>{{todo.text}}</li>'
})

var app=new Vue({
	el:'#app',
	data:{
		groceryList:[
		{id:0,text:'蔬菜'},
		{id:1,text:'水果'},
		{id:2,text:'米饭'}
		]
	}
})
