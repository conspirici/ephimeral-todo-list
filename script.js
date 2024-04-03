var add_button = document.getElementById("add");
var container = document.getElementById("tasks");
var count = 1;
var del;
var checkbox;
add_button.addEventListener("click",createTask);


function createTask(){
    const div = document.createElement("div");
    div.className = "task-item";
    div.id = "div"+count;

    checkbox = document.createElement("input");
    checkbox.className = "check"
    checkbox.type = "checkbox";
    checkbox.addEventListener("click",(event)=>{
        const check = event.target;
        const parent = check.parentElement;
        parent.classList.toggle("task-item--completed");
    })

    del = document.createElement("button");
    del.className = "delete";
    del.innerHTML = "delete";
    del.addEventListener("click",(event)=>{
        const button = event.target;
        const parent = button.parentElement;
        container.removeChild(parent);
       });

    const div2= document.createElement("div")
    div2.className = "task";
    div2.contentEditable = "true";
    div.appendChild(div2);
    div.appendChild(checkbox);
    div.appendChild(del);
    container.appendChild(div)
    count++;
}

