// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
// events
todoButton.addEventListener('click', addTodo);
// functions
function addTodo(event){

    // prevent Default form setting
    event.preventDefault();

    // add todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-Item');
    todoDiv.appendChild(newTodo);

    // tickmark bbutton
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check" ></i>';
    completeButton.classList.add('complete-button');
    todoDiv.appendChild(completeButton);

    // delete bbutton
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash" ></i>';
    deleteButton.classList.add('delete-button');
    todoDiv.appendChild(deleteButton);

    // append to li
    todoList.appendChild(todoDiv);

}