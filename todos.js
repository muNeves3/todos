var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
	listElement.innerHTML = '';

	for(todo of todos){
		var todoElement = document.createElement('li');
		var todoText = document.createTextNode(todo);

		var linkElement = document.createElement('a');
		linkElement.setAttribute('href', '#	');
		var linkText = document.createTextNode('Excluir');
		linkElement.appendChild(linkText);

		var position = todos.indexOf(todo);
		linkElement.setAttribute('onclick', 'deleteTodo('+ position +')');

		todoElement.appendChild(todoText);
		listElement.appendChild(todoElement);
		listElement.appendChild(linkElement);
	}
}

renderTodos();

function addTodo(){
	var todoText = inputElement.value;

	todos.push(todoText);
	inputElement.value = '';
	renderTodos();
	saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(position){
	todos.splice(position, 1);
	renderTodos();
	saveToStorage();
}

function saveToStorage(){
	localStorage.setItem('list_todos', JSON.stringify(todos));
}

document.body.onload = adicionarElemento;

function adicionarElemento(){
	var divNova = document.createElement('div');
	var conteudoNovo = document.createTextNode("Hello, World!");
	divNova.appendChild(conteudoNovo);

	var divAtual = document.getElementById('div1');
	document.body.insertBefore(divNova, divAtual);
}
