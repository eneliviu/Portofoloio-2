
function taskCardDisplay(event) {
    let taskCard = document.getElementById("task-cards-section");
    taskCard.style.display = (taskCard.style.display !== 'block' ? 'block' : 'none');
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
    let taskList = document.getElementById("text-container");

    let newTask = document.createElement("div");
    newTask.id = Date.now();
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

  
    //---------------------------------------------------------
    //newTask.innerHTML = `<div><h2>${taskName}</h2><h3>${taskDescription}</h3></div>`;
    taskDescriptionText.push(taskDescription);
    if (taskDescription.length >= 3) {
        //sessionStorage.setItem("last_task_entered", taskDescriptionText);
        newTask.innerHTML = `<div><h3>${taskDescriptionText.shift()}</h3></div>`;
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
        //sessionStorage.getItemItem("last_task_entered");
        updateActivityScores()
        newTaskActivity.innerText = namesActivities.shift();// return the firstelem and remove it - empty the array
        newTaskActivity.style.backgroundColor = colorActivities.shift();
    } else {
        alert(`Please enter the activity category:`);
        // Reset:
        document.getElementById('add-task-btn').click();
        document.getElementById('add-activity-btn').click();
        document.getElementById('add-relevance-btn').click();
        throw 'Unknown activity - Aborting!';
    }

    if (namesRelevance.length > 0) {
        updateRelevanceScores()
        newTaskRelevance.innerText = namesRelevance.shift();
        newTaskRelevance.style.backgroundColor = colorRelevance.shift();
    } else {
        alert(`Please enter the task relevance:`);
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



    // Reset colors arrays for task categories:

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


let taskDescriptionText = [];
const colorActivitiesList = ['rgba(184, 70, 29, .63)', 'rgba(35, 145, 188, .63)',
    'rgba(140, 53, 211, .63)', 'rgba(37, 106, 29, .63)']

let colorActivities = [];
let namesActivities = [];
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

const colorRelevanceList = ['rgba(227, 19, 19, .63)', 'rgba(215, 131, 20, .63)',
    'rgba(156, 129, 223, 0.993)']
let colorRelevance = [];
let namesRelevance = [];
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

function incrementScores(event) {

    /*l
    et oldScoreWork = parseInt(document.getElementById('work-score').innerText);
    let oldScoreHome = parseInt(document.getElementById('home-score').innerText);
    let oldScoreChores = parseInt(document.getElementById('chores-score').innerText);
    let oldScoreErrands = parseInt(document.getElementById('errands-score').innerText);
    */
    console.log(namesActivities)

    if (namesActivities[0] === 'work') {
        document.getElementById('work-score').innerText++;//oldScoreWork;
    } else if (namesActivities[0] === 'home') {
        document.getElementById('home-score').innerText++;//oldScoreHome;
    } else if (namesActivities[0] === 'chores') {
        document.getElementById('chores-score').innerText++;//oldScoreChores;
    } else {
        document.getElementById('errands-score').innerText++;//oldScoreErrands;
    }

}
//document.getElementById('add-task-ok-btn').addEventListener('click', incrementScores);


function updateActivityScores() {
    if (namesActivities[0] === 'Work') {
        document.getElementById('work-score').innerText++;
    } else if (namesActivities[0] === 'Home') {
        document.getElementById('home-score').innerText++;//oldScoreHome;
    } else if (namesActivities[0] === 'Chores') {
        document.getElementById('chores-score').innerText++;//oldScoreChores;
    } else {
        document.getElementById('errands-score').innerText++;//oldScoreErrands;
    }
}


function updateRelevanceScores() {
    if (namesRelevance[0] === 'Urgent') {
        document.getElementById('urgent-score').innerText++;//oldScoreUrgent;
    } else if (namesRelevance[0] === 'Important') {
        document.getElementById('important-score').innerText++;//oldScoreImportant;
    } else {
        document.getElementById('normal-score').innerText++;//oldScoreNormal;
    }
}

//===================================================================================================//
// --------- REMOVE SELECTED TASKS:
/*
document.getElementsByClassName('remove-task-btn').addEventListener('click', removeTasks);
function removeTasks(event){

}
*/



