function updateTaskCounter() {
    let totalTasks = document.querySelectorAll("#taskList li").length; 
    let completedTasks = document.querySelectorAll("#taskList input[type='checkbox']:checked").length;
    let pendingTasks = totalTasks - completedTasks; 
}


function addTask() {
    let taskInput = document.getElementById("taskInput"); 
    let taskText = taskInput.value.trim(); 

    if (taskText === "") return; 

    let taskList = document.getElementById("taskList"); 
    let li = document.createElement("li"); 

    
    let taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

   
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = function() {

    };

    let span = document.createElement("span");
    span.textContent = taskText; 

    
    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(span);

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remover"; 
    removeButton.style.background = "RED"; 
    removeButton.style.color = "rgba(255, 255, 255, 0.9)";
    removeButton.style.border = "none"; 
    removeButton.style.padding = "6px 12px"; 
    removeButton.style.borderRadius = "6px"; 
    removeButton.style.cursor = "pointer"; 
   


    removeButton.onclick = function () {
        taskList.removeChild(li); 
        updateTaskCounter(); 
    };


    li.appendChild(taskContainer);
    li.appendChild(removeButton); 
    taskList.appendChild(li);

    taskInput.value = ""; 
    updateTaskCounter();
}