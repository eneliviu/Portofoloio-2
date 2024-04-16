
function taskCardDisplay(event) {
    let taskCard = document.getElementById("task-cards-section");
    taskCard.style.display = (taskCard.style.display !== 'block' ? 'block' : 'none');
    document.getElementById("task-description-field").focus();
}

function taskActivityDisplay(event) {
    let taskActiv = document.getElementById("task-activity-div");
    taskActiv.style.display = (taskActiv.style.display !== 'flex' ? 'flex' : 'none');

    /*
    // if defined, :
    if (document.getElementsByClassName('activity-span')!==undefined) { // 

        let childrenSpansActivity = document.getElementsByClassName('activity-span');
        if(childrenSpansActivity.length > 0){
            console.log(childrenSpansActivity)
            childrenSpansActivity[childrenSpansActivity.length-1].remove();
            console.log(childrenSpansActivity)
        }
        //childrenSpansActivity.style.backgroundColor = '';
        //let childrenSpansRelevance = document.getElementsByClassName('relevance-span')[0];
        //console.log(childrenSpansRelevance)
    };

    //<span class="activity-span" style="background-color: rgba(184, 70, 29, 0.63);">Work</span>
    */
}

function taskRelevanceDisplay(event) {
    let taskRelevance = document.getElementById("task-importance-div");
    taskRelevance.style.display = (taskRelevance.style.display !== 'flex' ? 'flex' : 'none');
}

let tempStorage = function () {
    localStorage.setItem("last_id_remember_hack", errorid_element.value);
};


function addTaskToTaskList(event) {

    document.getElementById("task-description-field").focus();
    let taskDescription = document.getElementById("task-description-field").value;
    console.log(taskDescription)

    let taskList = document.getElementById("text-container");

    let newTask = document.createElement("div");
    newTask.id = Date.now();
    taskObject.taskId = [...newTask.id];
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
    //document.getElementById("task-name-field").value = '';
    document.getElementById("task-description-field").value = '';
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

    //---------------------------------------------------------
    //newTask.innerHTML = `<div><h2>${taskName}</h2><h3>${taskDescription}</h3></div>`;
    
    /*
    taskObject = {taskDescription:[],
        taskCategories: {namesActivities:[],  namesRelevance:[]},
        taskScores:{Personal:[], Professional:[], Errands:[], Urgent:[], Chore:[]},
        taskId:[]
    };
    */


    if (taskDescription.length >= 3) {
        taskObject.taskDescription = [...taskDescription];
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

    if (namesActivities.length > 0) {
        taskObject.taskCategories.namesActivities = [...namesActivities]; // copy by value
        incrementActivityScores()
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

    if (namesRelevance.length > 0) {
        taskObject.taskCategories.namesRelevance = [...namesRelevance]; // copy by value
        incrementRelevanceScores()
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

    newTaskTypeSeparator.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>'
    newTaskType.appendChild(newTaskActivity);
    newTaskType.appendChild(newTaskTypeSeparator);
    newTaskType.appendChild(newTaskRelevance);
    newTask.appendChild(newTaskType);
    taskList.appendChild(newTask);
    
    taskObjectsArray.push(taskObject); // add the the new object to container 
    console.log(taskObjectsArray)

    let removeTaskSpan = document.getElementsByClassName('remove-span');
    for (let i = 0; i < removeTaskSpan.length; i++) {
        removeTaskSpan[i].addEventListener('click', removeTasks);
    }
    let editTaskSpan = document.getElementsByClassName('edit-span');
    for (let i = 0; i < editTaskSpan.length; i++) {
        editTaskSpan[i].addEventListener('click', editTasks);
    }

}

//=================================================================================
// Add callbacks to the task entry form buttons events:
document.getElementById('add-task-btn').addEventListener('click', taskCardDisplay); //Add Task + button
document.getElementById('add-activity-btn').addEventListener('click', taskActivityDisplay); // Add Activity + button
document.getElementById('add-relevance-btn').addEventListener('click', taskRelevanceDisplay); // Add relevance + button
document.getElementById('add-task-ok-btn').addEventListener('click', addTaskToTaskList); // OK button

//===================================================================================================//
//--------------- Callbacks to Handle events for Task Category buttons:
//https://stackoverflow.com/questions/71346490/how-do-i-make-only-one-button-can-be-selected-at-time


const colorActivitiesList = ['rgba(43, 204, 199, 0.69)', 'rgba(92, 33, 206, 0.69)', 'rgba(204, 140, 80, 0.69)']

let colorActivities = [];
let namesActivities = [];
//let namesActivitiesTmp = [];
let activityBtns = document.getElementById('task-activity-div').children;

for (let i = 0; i < activityBtns.length; i++) {
    activityBtns[i].addEventListener('click', function (event) {
        for (let j = 0; j < activityBtns.length; j++) {
            activityBtns[j].classList.remove('selected');
            activityBtns[j].style.backgroundColor = '';
        }
        this.style.backgroundColor = colorActivitiesList[i];
        colorActivities[0] = this.style.backgroundColor;
        namesActivities[0] = this.innerText;
    });
}

const colorRelevanceList = ['rgba(235, 16, 16, 0.81)','rgba(61, 175, 60, 0.81)']
let colorRelevance = [];
let namesRelevance = [];
//let namesRelevanceTmp = [];
let relevanceBtns = document.getElementById('task-importance-div').children;
for (let i = 0; i < relevanceBtns.length; i++) {
    relevanceBtns[i].addEventListener('click', function (event) {
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
//---------------------------------------------------------
// UPDATED SCORES ON OK-CLICK:
let taskObjectsArray = []
let taskObject = {taskDescription:[],
                    taskCategories: {namesActivities:[],  namesRelevance:[]},
                    taskScores:{Personal:[], Professional:[], Errands:[], Urgent:[], Chore:[]},
                    taskId:[]
                };

function extractTaskObjToRemove(event){
    console.log(taskObject)
    let idx = 0;
    for(let i = 0; i < taskObject.taskId.length; i++ ){
        if (this.id === taskObject.taskId[i]){
            idx = i; 
        }
    }

    let newScore = taskObject.taskScores[namesActivitiesTmp[0]][idx];
    taskObject.taskScores[namesActivitiesTmp[0]][idx] = 
    console.log(taskObject)

    return
}
                    

function incrementActivityScores() {

    if (taskObject.taskCategories.namesActivities[0] === 'Personal') {
        document.getElementById('personal-score').innerText++;
    } else if (taskObject.taskCategories.namesActivities[0] === 'Professional') {
        document.getElementById('professional-score').innerText++;//oldScoreHome;
    } else if (taskObject.taskCategories.namesActivities[0] === 'Errands') {
        document.getElementById('errands-score').innerText++;//oldScoreChores;
    } else {
        alert('Unknown category 1');
    }
/*
    if (namesActivities[0] === 'Personal') {
        document.getElementById('personal-score').innerText++;
    } else if (namesActivities[0] === 'Professional') {
        document.getElementById('professional-score').innerText++;//oldScoreHome;
    } else if (namesActivities[0] === 'Errands') {
        document.getElementById('errands-score').innerText++;//oldScoreChores;
    } else {
        alert('Unknown category 1');
    }
    */
}

function decrementActivityScores() {

    if (taskObject.taskCategories.namesActivities[0] === 'Personal') {
        document.getElementById('personal-score').innerText--;
    } else if (taskObject.taskCategories.namesActivities[0] === 'Professional') {
        document.getElementById('professional-score').innerText--;
    } else if (taskObject.taskCategories.namesActivities[0] === 'Errands') {
        document.getElementById('errands-score').innerText--;
    } else {
        alert('Unknown category 2');
    }
}

function incrementRelevanceScores() {
    if (taskObject.taskCategories.namesRelevance[0] === 'Urgent') {
        document.getElementById('urgent-score').innerText++;
    } else if (taskObject.taskCategories.namesRelevance[0] === 'Chore') {
        document.getElementById('chores-score').innerText++;
    } else {
        alert('Unknown category 3');
    }
}

function decrementRelevanceScores() {
    if (taskObject.taskCategories.namesRelevance[0] === 'Urgent') {
        document.getElementById('urgent-score').innerText--;
    } else if (taskObject.taskCategories.namesRelevance[0] === 'Chore') {
        document.getElementById('chores-score').innerText--;
    } else {
        alert('Unknown category 4');
    }    
}

//===================================================================================================//
// --------- REMOVE SELECTED TASKS AND DECREMENT SCORES:
// USE TASK ID TO DECREMENT THE SCORES 
function removeTasks(event) {
    if(confirm('Remove task?')===true){
        this.parentNode.parentNode.remove();
        decrementActivityScores();
        decrementRelevanceScores();    
    }
}

//===================================================================================================//
// --------- EDIT SELECTED TASKS: TODO-----------:
function editTasks(event){
    //this.parentNode.parentNode.addEventListener('click', taskCardDisplay);
    alert(this.parentNode.parentNode.id)
    //this.parentNode.parentNode.remove(); 
    let taskElem = document.getElementById(this.parentNode.parentNode.id);
    console.log(taskElem)



}


