
function taskCardDisplay(event) {
    let taskCard = document.getElementById("task-cards-section");
    if (taskCard.style.display !== 'block') {
        taskCard.style.display = 'block';
    } else {
        taskCard.style.display = 'none';
    }
}

function taskActivityDisplay(event) {
    let taskActiv = document.getElementById("task-activity-div");
    if (taskActiv.style.display !== 'flex') {
        taskActiv.style.display = 'flex';
    } else {
        taskActiv.style.display = 'none';
    }
}

function taskRelevanceDisplay(event) {
    let taskRelev = document.getElementById("task-importance-div");
    if (taskRelev.style.display !== 'flex') {
        taskRelev.style.display = 'flex';
    } else {
        taskRelev.style.display = 'none';
    }
}

document.getElementById('add-task-btn').addEventListener('click', taskCardDisplay);
document.getElementById('add-activity-btn').addEventListener('click', taskActivityDisplay);
document.getElementById('add-relevance-btn').addEventListener('click', taskRelevanceDisplay);




document.getElementById('add-task-ok-btn').addEventListener('click', addTaskToSet);
function addTaskToSet(event) {

    let taskName = document.getElementById("task-name-field").value;
    let taskDescription = document.getElementById("task-description-field").value;
    let taskList = document.getElementById("text-container");

    let newTask = document.createElement("div");
    newTask.id = Date.now();

    let newTaskType = document.createElement("div");

    newTask.innerHTML = `<div>
                            <h2>${taskName}</h2>
                            <h3>${taskDescription}</h3>
                        </div>`;
    newTaskType.innerHTML = `<div>
                                <span>${'Category'}</span>
                                <span>${'Relevance'}</span>
                            </div>`;
    newTaskType.style.color = "red";

    newTask.appendChild(newTaskType);
    taskList.appendChild(newTask);

    // close settings:
    document.getElementById('add-task-btn').click();

    // reset default text entry:
    document.getElementById("task-name-field").value = '';
    document.getElementById("task-description-field").value = '';
    document.getElementById('add-task-btn').addEventListener('click', taskList);
}

/*document.getElementsByClassName('remove-task-btn').addEventListener('click', removeTasks);
function removeTasks(event){

}
*/

function taskList(event) {
    let taskListContainer = document.getElementById("text-container");
    taskListContainer.style.display = (taskListContainer.style.display !== 'flex' ? 'flex' : 'none');
}

