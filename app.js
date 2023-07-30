const taskForm = document.getElementById("task");
const taskList = document.getElementById("tasklist");

//counter variable

let taskIndex = 1;

// console.log(taskForm, taskList);

taskForm.addEventListener("submit",function(event){
    event.preventDefault();

    const taskInput = document.getElementById("taskin");
    const taskText = taskInput.value.trim();

    if(taskText !==""){
        //create new task
        const taskItem = document.createElement("li");
        taskItem.classList.add("taskitem");
        taskItem.textContent = `${taskIndex} ${taskText}`;

        taskItem.addEventListener("click",function(){
            console.log("Completed");
            this.classList.toggle("completed");
        });

        taskList.appendChild(taskItem);

        taskIndex++;

        taskInput.value = "";
    }
});
