
function taskCardDisplay(event) {
    let taskCard = document.getElementById("task-cards-section");
    if(taskCard.style.display !== 'block'){
        taskCard.style.display = 'block';
    } else{
        taskCard.style.display = 'none';
    }
}

function taskActivityDisplay(event) {
    let taskActiv = document.getElementById("task-activity-div");
    if(taskActiv.style.display !== 'flex'){
        taskActiv.style.display = 'flex';
    } else{
        taskActiv.style.display = 'none';
    }
}

function taskRelevanceDisplay(event) {
    let taskRelev = document.getElementById("task-importance-div");
    if(taskRelev.style.display !== 'flex'){
        taskRelev.style.display = 'flex';
    } else{
        taskRelev.style.display = 'none';
    }
}

document.getElementById('add-task-btn').addEventListener('click', taskCardDisplay);
document.getElementById('add-activity-btn').addEventListener('click', taskActivityDisplay);
document.getElementById('add-relevance-btn').addEventListener('click', taskRelevanceDisplay);


document.getElementById('add-task-ok-btn').addEventListener('click', addTaskToSet);
function addTaskToSet(event){
    
    let taskName = document.getElementById("task-name-field").value;
    let taskDescription = document.getElementById("task-description-field").value;
    

    let taskList = document.getElementById("text-container");
    let newTask = document.createElement("div");
    newTask.className = 'task-list';
    newTask.id = Date.now();
    newTask.innerHTML = `<p>${taskDescription}</p>`;
    taskList.appendChild(newTask);
    

    document.getElementById('add-task-btn').click();
    
}

document.getElementsByClassName('remove-task-btn').addEventListener('click', removeTasks);
function removeTasks(event){

}