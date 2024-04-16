
function taskCardDisplay(event) {
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


function addTaskToTaskList(event) {

    document.getElementById("task-description-field").focus();

    let taskDescription = document.getElementById("task-description-field").value;
    let taskObject = { ...taskObjectTemplate };

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
        incrementActivityScores(taskObject.taskCategories.namesActivities[0])
        newTaskActivity.innerText = namesActivities.shift(); // return the first elem and remove it (empty the array) -> undefined 
        newTaskActivity.style.backgroundColor = colorActivities.shift();
    } else {
        alert('Please enter the activity category:');
        // Reset:
        document.getElementById('add-task-btn').click();
        document.getElementById('add-activity-btn').click();
        document.getElementById('add-relevance-btn').click();
        throw 'Unknown activity - Aborting!';
    }

    // Add the task relevance:
    if (namesRelevance.length > 0) {
        taskObject.taskCategories.namesRelevance = namesRelevance.slice(); // copy by value
        incrementRelevanceScores(taskObject.taskCategories.namesRelevance[0]);
        newTaskRelevance.innerText = namesRelevance.shift();
        newTaskRelevance.style.backgroundColor = colorRelevance.shift();
    } else {
        alert('Please enter the task relevance:');
        // Reset:
        document.getElementById('add-task-btn').click();
        document.getElementById('add-activity-btn').click();
        document.getElementById('add-relevance-btn').click();
        throw 'Unknown activity - Aborting!';
    }

    // Write the new task to DOM: 
    newTaskTypeSeparator.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>'
    newTaskType.appendChild(newTaskActivity);
    newTaskType.appendChild(newTaskTypeSeparator);
    newTaskType.appendChild(newTaskRelevance);
    newTask.appendChild(newTaskType);
    taskList.appendChild(newTask);

    //taskObjectsArray = [...taskObjectsArray, taskObject];
    taskObjectsArray.push(taskObject);
    
    //console.log(taskObject)
    console.log(taskObjectsArray)
    
    for(let elem of document.getElementsByClassName('remove-span')){
        elem.addEventListener('click', removeTasks);
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
function decrementActivityScores(activity) {
    if (activity === 'Personal') {
        document.getElementById('personal-score').innerText--;
    } else if (activity === 'Professional') {
        document.getElementById('professional-score').innerText--;
    } else if (activity === 'Errands') {
        document.getElementById('errands-score').innerText--;
    } else {
        alert('Unknown category 2');
    }
}
function decrementRelevanceScores(relevance) {
    if (relevance === 'Urgent') {
        document.getElementById('urgent-score').innerText--;
    } else if (relevance === 'Chore') {
        document.getElementById('chores-score').innerText--;
    } else {
        alert('Unknown category 4');
    }
}

//=================================================================================
//=================================================================================
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

let removeTaskSpan;
function removeTasks() {
    if (confirm('Remove task?') === true) {
        //console.log(taskObjectsArray)
        let idx; //undefined
        for (let i = 0; i < taskObjectsArray.length; i++) {
            if (this.parentNode.parentNode.id === taskObjectsArray[i].taskId) {
                idx = i;
            }
        }

        if (idx === -1) {
            throw new Error('Task cannot be retrieved - Aborting!');
        } else {
            objToRemove = taskObjectsArray.splice(idx, 1);
            this.parentNode.parentNode.remove();
        }
        //console.log(objToRemove)
        console.log(taskObjectsArray)

        //let newScore = taskObject.taskScores[namesActivitiesTmp[0]][idx];

        // Remove task from DOM: 


        // Update scores:
        //decrementActivityScores(objToRemove.taskCategories.namesActivities[0]);
        //decrementRelevanceScores(objToRemove.taskCategories.namesRelevance[0]);
    }
}



let editTaskSpan = document.getElementsByClassName('edit-span');
for (let i = 0; i < editTaskSpan.length; i++) {
    editTaskSpan[i].addEventListener('click', editTasks);
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


