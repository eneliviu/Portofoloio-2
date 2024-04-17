
// 'DOMContentLoaded'

function taskCardDisplay(event) {
    document.getElementById('list-title').innerText = "Today's task list:'";
    let taskCard = document.getElementById("task-cards-section");
    taskCard.style.display = (taskCard.style.display !== 'block' ? 'block' : 'none');
    document.getElementById("task-description-field").focus();
}

function taskActivityDisplay(event) {
    let taskActiv = document.getElementById("task-activity-div");
    taskActiv.style.display = (taskActiv.style.display !== 'flex' ? 'flex' : 'none');
}

function taskRelevanceDisplay(event) {
    let taskRelevance = document.getElementById("task-importance-div");
    taskRelevance.style.display = (taskRelevance.style.display !== 'flex' ? 'flex' : 'none');
}


function displayElement(elemIdString) {
    let taskRelevance = document.getElementById(elemIdString);
    taskRelevance.style.display = (taskRelevance.style.display !== 'flex' ? 'flex' : 'none');
}

function addTaskToTaskList(event) {

    document.getElementById("task-description-field").focus();

    let taskDescription = document.getElementById("task-description-field").value;
    let taskObject = structuredClone(taskObjectTemplate);

    let taskList = document.getElementById("text-container");

    let newTask = document.createElement("div");
    newTask.id = Date.now();
    taskObject.taskId = newTask.id.slice();
    newTask.className = 'task-item';

    let newTaskType = document.createElement("div");
    newTaskType.id = newTask.id;
    newTaskType.className = 'innerHTML-task-category';

    let newTaskActivity = document.createElement("span");
    newTaskActivity.className = 'activity-span';
    let newTaskTypeSeparator = document.createElement("span");
    let newTaskRelevance = document.createElement("span");
    newTaskRelevance.className = 'relevance-span';

    //--------------------------------------------------------


    //----- At OK click: ------------ 

    // Close settings and collapse fields:
    document.getElementById('add-task-btn').click();
    document.getElementById('add-activity-btn').click();
    document.getElementById('add-relevance-btn').click();

    // Reset default text entry::
    document.getElementById("task-description-field").value = '';

    // Reset background colors for the category buttons:
    let activityBtns = document.getElementById("task-activity-div").children;
    for (let i = 0; i < activityBtns.length; i++) {
        activityBtns[i].style.backgroundColor = '';
    }
    let relevanceBtns = document.getElementById("task-importance-div").children;
    for (let i = 0; i < relevanceBtns.length; i++) {
        relevanceBtns[i].style.backgroundColor = '';
    }

    // Add the task description to DOM:
    if (taskDescription.length >= 3) {
        taskObject.taskDescription = taskDescription.slice();
        newTask.innerHTML = `<h3>
                                ${taskDescription}
                                    <span class="edit-span">
                                        <i class="fa-solid fa-pen-to-square"></i>
                                    </span>
                                    <span class="remove-span">
                                        <i class="fa-regular fa-trash-can"></i>
                                    </span>
                            </h3>
                            `;

    } else {
        alert(`Please enter a task using at least three characters:`);
        // Reset:
        document.getElementById('add-task-btn').click();
        document.getElementById('add-activity-btn').click();
        document.getElementById('add-relevance-btn').click();
        document.getElementById("task-description-field").focus();
        throw 'Unknown task - Aborting!';
    }

    // Add the task activity:
    if (namesActivities.length > 0) {
        taskObject.taskCategories.namesActivities = namesActivities.slice(); // copy by value
        newTaskActivity.innerText = namesActivities.shift(); // return the first elem and remove it (empty the array) -> undefined 
        newTaskActivity.style.backgroundColor = colorActivities.shift();
    } else {
        alert('Please enter the activity category:');
        // Reset:
        document.getElementById('add-task-btn').click();
        document.getElementById('add-activity-btn').click();
        document.getElementById('add-relevance-btn').click();
        console.log(taskObjectsArray);
        throw 'Unknown activity - Aborting!';
        
    }

    // Add the task relevance:
    if (namesRelevance.length > 0) {
        taskObject.taskCategories.namesRelevance = namesRelevance.slice(); // copy by value
        newTaskRelevance.innerText = namesRelevance.shift();
        newTaskRelevance.style.backgroundColor = colorRelevance.shift();
    } else {
        alert('Please enter the task relevance:');
        // Reset:
        document.getElementById('add-task-btn').click();
        document.getElementById('add-activity-btn').click();
        document.getElementById('add-relevance-btn').click();
        console.log(taskObjectsArray);
        throw 'Unknown activity - Aborting!';
    }

    // Update (increment) scores with the new added task 
    incrementActivityScores(taskObject.taskCategories.namesActivities[0]);
    incrementRelevanceScores(taskObject.taskCategories.namesRelevance[0]);

    // Write the new task to DOM: 
    newTaskTypeSeparator.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>'
    newTaskType.appendChild(newTaskActivity);
    newTaskType.appendChild(newTaskTypeSeparator);
    newTaskType.appendChild(newTaskRelevance);
    newTask.appendChild(newTaskType);
    taskList.appendChild(newTask);
    taskObjectsArray = [...taskObjectsArray, taskObject];

    for (let elem of document.getElementsByClassName('remove-span')) {
        elem.addEventListener('click', removeTasks);
    }
    for (let elem of document.getElementsByClassName('edit-span')) {
        elem.addEventListener('click', editTasks);
    }


}

function incrementActivityScores(activity) {
    if (activity === 'Personal') {
        document.getElementById('personal-score').innerText++;
    } else if (activity === 'Professional') {
        document.getElementById('professional-score').innerText++;
    } else if (activity === 'Errands') {
        document.getElementById('errands-score').innerText++;
    } else {
        alert('Unknown category 1');
    }
}
function incrementRelevanceScores(relevance) {
    if (relevance === 'Urgent') {
        document.getElementById('urgent-score').innerText++;
    } else if (relevance === 'Chore') {
        document.getElementById('chores-score').innerText++;
    } else {
        alert('Unknown category 3');
    }
}


//=================================================================================
//=================================================================================
// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

// Add callbacks to the task entry form buttons events:

document.getElementById('add-task-btn').addEventListener('click', taskCardDisplay); //Add Task + button
document.getElementById('add-activity-btn').addEventListener('click', taskActivityDisplay); // Add Activity + button
document.getElementById('add-relevance-btn').addEventListener('click', taskRelevanceDisplay); // Add relevance + button
document.getElementById('add-task-ok-btn').addEventListener('click', addTaskToTaskList); // OK button



//===================================================================================================//

let taskObjectsArray = [];
let taskObjectTemplate = {
    taskDescription: [],
    taskCategories: { namesActivities: [], namesRelevance: [] },
    taskScores: { Personal: [], Professional: [], Errands: [], Urgent: [], Chore: [] },
    taskId: []
};

//--------------- Callbacks to Handle events for Task Category buttons:
//https://stackoverflow.com/questions/71346490/how-do-i-make-only-one-button-can-be-selected-at-time
const colorActivitiesList = ['rgba(43, 204, 199, 0.69)', 'rgba(92, 33, 206, 0.69)', 'rgba(204, 140, 80, 0.69)']
let colorActivities = [];
let namesActivities = [];
let activityBtns = document.getElementById('task-activity-div').children;

for (let i = 0; i < activityBtns.length; i++) {
    activityBtns[i].addEventListener('click', function () {
        for (let j = 0; j < activityBtns.length; j++) {
            // on click, remove event from the previously selected button and reset
            activityBtns[j].classList.remove('selected');
            activityBtns[j].style.backgroundColor = '';
        }
        this.style.backgroundColor = colorActivitiesList[i];
        colorActivities[0] = this.style.backgroundColor;
        namesActivities[0] = this.innerText;
    });
}

const colorRelevanceList = ['rgba(235, 16, 16, 0.81)', 'rgba(61, 175, 60, 0.81)']
let colorRelevance = [];
let namesRelevance = [];
let relevanceBtns = document.getElementById('task-importance-div').children;
for (let i = 0; i < relevanceBtns.length; i++) {
    relevanceBtns[i].addEventListener('click', function () {
        for (let j = 0; j < relevanceBtns.length; j++) {
            relevanceBtns[j].classList.remove('selected');
            relevanceBtns[j].style.backgroundColor = '';
        }
        this.style.backgroundColor = colorRelevanceList[i];
        colorRelevance[0] = this.style.backgroundColor;
        namesRelevance[0] = this.innerText;
    });
}

//===================================================================================================//
// --------- REMOVE SELECTED TASKS AND DECREMENT SCORES:
// USE TASK ID TO DECREMENT THE SCORES 

function removeTasks() {
    if (confirm('Remove task?') === true) {
        //console.log(taskObjectsArray)
        let idx; //undefined
        for (let i = 0; i < taskObjectsArray.length; i++) {
            if (this.parentNode.parentNode.id === taskObjectsArray[i].taskId) {
                idx = i;
                break; // exit when the HTML task elem found
            }
        }

        if (idx === -1) {
            throw new Error('Task cannot be retrieved - Aborting!');
        } else {
            // extract and remove the task obj from array 
            let objToRemove = taskObjectsArray.splice(idx, 1)[0];
            // remove task from DOM
            this.parentNode.parentNode.remove();
            console.log(objToRemove)
            // Update scores
            decrementActivityScores(objToRemove);
            decrementRelevanceScores(objToRemove);
        }
    }
}



function decrementActivityScores(removedObj) {
    //console.log(removedObj)
   

    if (removedObj.taskCategories.namesActivities[0] === 'Personal') {
        document.getElementById('personal-score').innerText--;
    } else if (removedObj.taskCategories.namesActivities[0] === 'Professional') {
        document.getElementById('professional-score').innerText--;
    } else if (removedObj.taskCategories.namesActivities[0] === 'Errands') {
        document.getElementById('errands-score').innerText--;
    } else {
        alert('Unknown category 2');
    }

    let oldScores = [];
    let runningTotal = 0;
    let scoreItemList = document.getElementsByClassName('score-activity-span');
    for (let elem of scoreItemList){
        oldScores.push(parseInt(elem.innerText));
        runningTotal += parseInt(elem.innerText);
    }
    console.log(oldScores)
    console.log(runningTotal)
    if (runningTotal === 0){
        document.getElementById('list-title').innerText = 'All tasks completed!';
    }else{
        document.getElementById('list-title').innerText = 'Tasks left:';
    }
}
function decrementRelevanceScores(removedObj) {
    if (removedObj.taskCategories.namesRelevance[0] === 'Urgent') {
        document.getElementById('urgent-score').innerText--;
    } else if (removedObj.taskCategories.namesRelevance[0] === 'Chore') {
        document.getElementById('chores-score').innerText--;
    } else {
        alert('Unknown category 4');
    }
}


//===================================================================================================//



// --------- EDIT SELECTED TASKS: TODO-----------:
function editTasks(event) {
    //this.parentNode.parentNode.addEventListener('click', taskCardDisplay);
    alert(this.parentNode.parentNode.id)
    //this.parentNode.parentNode.remove(); 
    let taskElem = document.getElementById(this.parentNode.parentNode.id);
    console.log(taskElem)
}


