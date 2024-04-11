

let addTaskBtn = document.getElementById('add-task-btn');
addTaskBtn.addEventListener('click', taskCardDisplay)

let addActivityBtn = document.getElementById('add-activity-btn');
addActivityBtn.addEventListener('click', taskActivityDisplay)

let addRelevanceBtn = document.getElementById('add-relevance-btn');
addRelevanceBtn.addEventListener('click', taskRelevanceDisplay)

function taskCardDisplay(event) {
    let taskCard = document.getElementById("task-cards-section");
    if(taskCard.style.display === 'none'){
        taskCard.style.display = 'block';
    } else{
        taskCard.style.display = 'none';
    }
}

function taskActivityDisplay(event) {
    let taskActiv = document.getElementById("task-activity-div");
    if(taskActiv.style.display === 'none'){
        taskActiv.style.display = 'block';
    } else{
        taskActiv.style.display = 'none';
    }
}

function taskRelevanceDisplay(event) {
    let taskRelev = document.getElementById("task-importance-div");
    if(taskRelev.style.display === 'none'){
        taskRelev.style.display = 'block';
    } else{
        taskRelev.style.display = 'none';
    }
}


