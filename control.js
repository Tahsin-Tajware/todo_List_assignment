const inputBox = document.getElementById('todoInput');
const todoList = document.getElementById('todo-list');
const removeCheckedButton = document.getElementById('removeChecked');

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;

        let deleteButton = document.createElement("span");
        deleteButton.innerHTML = "\u00D7"; // × symbol
        deleteButton.className = "delete";
        deleteButton.addEventListener('click', function() {
            li.remove();
        });
        li.appendChild(deleteButton);

        todoList.appendChild(li);
        inputBox.value = '';
    }
}

function addEditButton(li) {
    let editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.className = "edit";
    editButton.addEventListener('click', function() {
        let currentText = li.childNodes[0].nodeValue;
        let newText = prompt("Edit your task:", currentText);
        if (newText) {
            li.childNodes[0].nodeValue = newText;
        }
    });
    li.appendChild(editButton);
}

function removeEditButton(li) {
    let editButton = li.querySelector('button.edit');
    if (editButton) {
        editButton.remove();
    }
}

const addTodo = document.getElementById('addTodo');
addTodo.addEventListener('click', addTask);

inputBox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

todoList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        if (e.target.classList.contains("checked")) {
            e.target.classList.remove("checked");
            removeEditButton(e.target);
        } else {
            e.target.classList.add("checked");
            addEditButton(e.target);
        }
    }
}, false);

removeCheckedButton.addEventListener('click', function() {
    const checkedItems = document.querySelectorAll('#todo-list li.checked');
    checkedItems.forEach(item => item.remove());
});
