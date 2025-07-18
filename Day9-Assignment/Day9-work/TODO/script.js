const input = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const button = document.getElementById("button");

function addTodo() {
    if (input.value === "") {
        alert("Please enter a task");
        return;
    }
    else {
        const li = document.createElement("li");
        const div = document.createElement("div");

        div.textContent = input.value;
        input.value = "";
        const clearButton = document.createElement("button");
        clearButton.textContent = "Clear";
        clearButton.addEventListener("click", () => {
            todoList.removeChild(li);
        });
        div.appendChild(clearButton);
        li.appendChild(div);
        todoList.appendChild(li);
    }
}