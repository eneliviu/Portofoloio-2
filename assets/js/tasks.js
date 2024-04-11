
let addTaskBtn = document.getElementById('add-task-btn');
addTaskBtn.addEventListener('click', taskCardDisplay)

function taskCardDisplay(event) {
    let taskCard = document.getElementById("task-cards-section");
    console.log(taskCard)
    if(taskCard.style.display === 'none'){
        taskCard.style.display = 'flex';
    } else{
        taskCard.style.display = 'none';
    }
}

