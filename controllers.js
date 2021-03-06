/**
 * Angular.module retorna un modulo al que se le da .controller.
 * No más $scope como dependencia.
 */
angular.module('todoapp',[])
	.controller('todoController', function(){
		var todo = this;
			todo.list =[
				{text: 'Aprender angularJS.', done: true},
				{text: 'Dar de comer a mis perros.', done: false},
				{text: 'No usar más $scope.', done: false}
		];

		todo.add = function(){
			todo.list.push({text: todo.todoText, done: false});
			todo.todoText='';
		};

		todo.delete = function(){
			var oldTodos = todo.list;
			todo.list = [];
			angular.forEach(oldTodos, function (oldTodo){
				if(!oldTodo.done){
					todo.list.push(oldTodo);
				};
			});
		};
	});