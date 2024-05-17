const inputBox = document.getElementById('todoInput');
const todoList = document.getElementById('todo-list');
const removeCheckedButton = document.getElementById('removeChecked');

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        todoList.appendChild(li);
        inputBox.value = '';
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
}

const addTodo = document.getElementById('addTodo');
addTodo.addEventListener('click', addTask);

todoList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);

removeCheckedButton.addEventListener('click', function() {
    const checkedItems = document.querySelectorAll('#todo-list li.checked');
    checkedItems.forEach(item => item.remove());
});
