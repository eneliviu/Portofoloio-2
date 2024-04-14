
function taskCardDisplay(event) {
    let taskCard = document.getElementById("task-cards-section");
    taskCard.style.display = (taskCard.style.display !== 'block' ? 'block' : 'none');
}

function taskActivityDisplay(event) {
    let taskActiv = document.getElementById("task-activity-div");
    taskActiv.style.display = (taskActiv.style.display !== 'flex' ? 'flex' : 'none');
}

function taskRelevanceDisplay(event) {
    let taskRelevance = document.getElementById("task-importance-div");
    taskRelevance.style.display = (taskRelevance.style.display !== 'flex' ? 'flex' : 'none');
}

function addTaskToTaskList(event) {

    let taskName = document.getElementById("task-name-field").value;
    let taskDescription = document.getElementById("task-description-field").value;
    let taskList = document.getElementById("text-container");

    let newTask = document.createElement("div");
    newTask.id = Date.now();

    let newTaskType = document.createElement("div");
    newTaskType.id = newTask.id;

    let newTCkb = document.createElement("checkbox");
    newTCkb.innerHTML

    /*
    newTask.innerHTML = `<div>
                            <h2>${taskName}</h2>
                            <h3>${taskDescription}</h3>
                        </div>
                        `;
    newTaskType.innerHTML = `<span id="activity-span">${'Category'}</span>
                            <span> | </span>
                            <span id="relevance-span">${'Relevance'}</span>
                            `;
    newTaskType.className = 'innerHTML-task-category';

    newTask.appendChild(newTaskType);
    taskList.appendChild(newTask);
    */

    //----- AT EXIT: ------------ 
    // Close settings and collapse fields:
    document.getElementById('add-task-btn').click();
    document.getElementById('add-activity-btn').click();
    document.getElementById('add-relevance-btn').click();

    // Reset default text entry::
    document.getElementById("task-name-field").value = '';
    document.getElementById("task-description-field").value = '';
    document.getElementById("task-description-field").value = '';

    // Reset background colors for the category buttons:
    let activityBtns = document.getElementById("task-activity-div").children;
    for (let i = 0; i < activityBtns.length; i++) {
        activityBtns[i].style.backgroundColor = '#fafafa';
    }
    let relevanceBtns = document.getElementById("task-importance-div").children;
    for (let i = 0; i < relevanceBtns.length; i++) {
        relevanceBtns[i].style.backgroundColor = '#fafafa';
    }

    //---------------------------------------------------------
    const colorActivitiesList = ['rgba(184, 70, 29, .63)', 'rgba(35, 145, 188, .63)',
        'rgba(140, 53, 211, .63)', 'rgba(37, 106, 29, .63)']
    let colorActivities = [];
    for (let i = 0; i < relevanceBtns.length; i++) {
        relevanceBtns[i].addEventListener('click', function (event) {
            for (let j = 0; j < relevanceBtns.length; j++) {
                relevanceBtns[j].classList.remove('selected');
                relevanceBtns[j].style.backgroundColor = '';
            }
            this.style.backgroundColor = colorRelevanceList[i];
            colorRelevance[0] = this.value;
        });

    }

    const colorRelevanceList = ['rgba(227, 19, 19, .63)', 'rgba(215, 131, 20, .63)',
        'rgba(156, 129, 223, 0.993)']
    let colorRelevance = [];
    for (let i = 0; i < activityBtns.length; i++) {
        activityBtns[i].addEventListener('click', function (event) {
            for (let j = 0; j < activityBtns.length; j++) {
                activityBtns[j].classList.remove('selected');
                activityBtns[j].style.backgroundColor = '';
            }
            this.style.backgroundColor = colorActivitiesList[i];
            colorActivities[0] = this.value;
        });
    }

    newTask.innerHTML = `<div>
                            <h2>${taskName}</h2>
                            <h3>${taskDescription}</h3>
                        </div>
                        `;
    newTaskType.innerHTML = `<span id="activity-span">${colorActivities[0]}</span>
                                <span> | </span>
                            <span id="relevance-span">${colorRelevance[0]}</span>
                            `;
    newTaskType.className = 'innerHTML-task-category';

    newTask.appendChild(newTaskType);
    taskList.appendChild(newTask);


}

//=================================================================================

document.getElementById('add-task-btn').addEventListener('click', taskCardDisplay);
document.getElementById('add-activity-btn').addEventListener('click', taskActivityDisplay);
document.getElementById('add-relevance-btn').addEventListener('click', taskRelevanceDisplay);
document.getElementById('add-task-ok-btn').addEventListener('click', addTaskToTaskList);

/*document.getElementsByClassName('remove-task-btn').addEventListener('click', removeTasks);
function removeTasks(event){

}
*/

//===================================================================================================//
//--------------- Handle events for Task Category buttons:
//https://stackoverflow.com/questions/71346490/how-do-i-make-only-one-button-can-be-selected-at-time
/*
const colorActivitiesList = ['rgba(184, 70, 29, .63)', 'rgba(35, 145, 188, .63)',
    'rgba(140, 53, 211, .63)', 'rgba(37, 106, 29, .63)']
var colorActivities = [];
let relevanceBtns = document.getElementById('task-importance-div').children;
for (let i = 0; i < relevanceBtns.length; i++) {
    relevanceBtns[i].addEventListener('click', function (event) {
        for (let j = 0; j < relevanceBtns.length; j++) {
            relevanceBtns[j].classList.remove('selected');
            relevanceBtns[j].style.backgroundColor = '';
        }
        this.style.backgroundColor = colorRelevanceList[i];
        colorRelevance[0] = this.style.backgroundColor;
    });

}

const colorRelevanceList = ['rgba(227, 19, 19, .63)', 'rgba(215, 131, 20, .63)',
    'rgba(156, 129, 223, 0.993)']
var colorRelevance = [];
let activityBtns = document.getElementById('task-activity-div').children;
for (let i = 0; i < activityBtns.length; i++) {
    activityBtns[i].addEventListener('click', function (event) {
        for (let j = 0; j < activityBtns.length; j++) {
            activityBtns[j].classList.remove('selected');
            activityBtns[j].style.backgroundColor = '';
        }
        this.style.backgroundColor = colorActivitiesList[i];
        colorActivities[0] = this.style.backgroundColor;
    });
}

*/
////document.getElementById("activity-span").style.color = colorActivities[0];
//document.getElementById("relevance-span").style.color = colorRelevance[0];

//===================================================================================================//




