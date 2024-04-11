
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
        taskActiv.style.display = 'flex';
    } else{
        taskActiv.style.display = 'none';
    }
}

function taskRelevanceDisplay(event) {
    let taskRelev = document.getElementById("task-importance-div");
    if(taskRelev.style.display === 'none'){
        taskRelev.style.display = 'flex';
    } else{
        taskRelev.style.display = 'none';
    }
}

document.getElementById('add-task-btn').addEventListener('click', taskCardDisplay);
document.getElementById('add-activity-btn').addEventListener('click', taskActivityDisplay);
document.getElementById('add-relevance-btn').addEventListener('click', taskRelevanceDisplay);


