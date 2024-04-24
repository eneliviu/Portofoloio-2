

/**
 * Display task card on click on 'Add Task +" button" 
 */
function taskCardDisplay(event) {

    let taskCard = document.getElementById("task-cards-section");
    taskCard.style.display = (taskCard.style.display !== 'block' ? 'block' : 'none');
    document.getElementById("task-description-field").focus();
    document.getElementById("task-description-field").addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.getElementById("add-activity-btn").focus();
        }
    });

    
}

/**
 * Display activity selection buttons on click on 'Add Activity' button
 */
function taskActivityDisplay(event) {
    let taskActiv = document.getElementById("task-activity-div");
    taskActiv.style.display = (taskActiv.style.display !== 'flex' ? 'flex' : 'none');
}

/**
 * Display task relevance selection buttons on click on 'Add relevance' button
 */
function taskRelevanceDisplay(event) {
    let taskRelevance = document.getElementById("task-importance-div");
    taskRelevance.style.display = (taskRelevance.style.display !== 'flex' ? 'flex' : 'none');
}

/**
 * This function creates and displays the new tasks.
 * Provides access to the options for defining the task. 
 * Internally, it creates an object containing task details.
 * Each new object is pushed into an array for temporary storage.
 * Passes the callabck functions to handle each of the tasks (edit, remove, task info updates).   
 */
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
    newTaskType.className = 'innerHTML-task-category';
    newTaskType.dataset.id = newTask.id;

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
        newTask.innerHTML = `<div class="handle-task">
                                <div class="edit-div" data-id=${newTask.id}>
                                    <i class="fa-regular fa-circle"></i>
                                </div>
                                <div class="task-title" data-id=${newTask.id}>                        
                                    <h3>${taskDescription}</h3>
                                </div>
                                
                                <div class="remove-div" data-id=${newTask.id}>
                                    <i class="fa-regular fa-trash-can"></i>
                                </div>
                            </div>
                            `;

    } else {
        alert(`Please enter a task using at 3 to 40 characters:`);
        // Reset:
        //debugger
        document.getElementById('add-task-btn').click();
        document.getElementById('add-activity-btn').click();
        document.getElementById('add-relevance-btn').click();
        document.getElementById("task-description-field").focus();

        throw errMessageUnknownTask;

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
        document.getElementById("task-description-field").focus();
        throw errMessageUnknownActivity;
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
        document.getElementById("task-description-field").focus();
        throw errMessageUnknownCateg;
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
    document.getElementById('list-title').innerText = "Today's task list:";

    taskObjectsArray = [...taskObjectsArray, taskObject];

    // debugger
    for (let elem of document.getElementsByClassName('edit-div')) {
        elem.addEventListener('click', editTasks);
    }
    for (let elem of document.getElementsByClassName('task-title')) {
        elem.addEventListener('click', editTaskDescription);
    }
    for (let elem of document.getElementsByClassName('remove-div')) {
        elem.addEventListener('click', removeTasks);
    }

}

/**
 * This function finds and returns the list array index of the selected task item.
 * @param {*} taskId 
 * @param {*} objectArray 
 * @returns 
 */
function getObjId(taskId, objectArray) {
    let idx = -1; //undefined
    for (let i = 0; i < objectArray.length; i++) {
        if (taskId === objectArray[i].taskId) {
            idx = i;
            break; // exit when the HTML task elem found
        }
    }
    if (idx === -1) {
        throw errMessageUnknownTaskID;
    } else {
        return idx;
    }
}

/**
 * This function decrements the counters for task activities
 * Takes the removed task object as argument.  
 * @param {*} removedObj 
 */
function decrementActivityScores(activity) {
    if (activity === 'Personal') {
        document.getElementById('personal-score').innerText--;
    } else if (activity === 'Work') {
        document.getElementById('work-score').innerText--;
    } else if (activity === 'Errands') {
        document.getElementById('errands-score').innerText--;
    } else {
        alert(alertMessageActivity);
    }
}

/**
 * This function decrements the counters for task relevance categories.
 * Takes the removed task object as argument.  
 * @param {*} removedObj 
 */
function decrementRelevanceScores(relevance) {
    if (relevance === 'Urgent') {
        document.getElementById('urgent-score').innerText--;
    } else if (relevance === 'Chore') {
        document.getElementById('chores-score').innerText--;
    } else {
        alert(alertMessageCateg);
    }
}

/**
 * This function changes the title of the task list upon the task completion. 
 */
function updateListTitle() {
    let runningTotal = 0;
    let scoreItemList = document.getElementsByClassName('score-activity-span');
    for (let elem of scoreItemList) {
        runningTotal += parseInt(elem.innerText);
    }

    if (runningTotal === 0) {
        document.getElementById('list-title').innerText = 'All tasks completed!';
    } else {
        document.getElementById('list-title').innerText = `${runningTotal} Tasks to complete:`;
    }
}

/**
 * This function increments the counters for task activities.
 * Takes the activity name (string) as argument.
 * @param {*} activity 
 */
function incrementActivityScores(activity) {
    if (activity === 'Personal') {
        document.getElementById('personal-score').innerText++;
    } else if (activity === 'Work') {
        document.getElementById('work-score').innerText++;
    } else if (activity === 'Errands') {
        document.getElementById('errands-score').innerText++;
    } else {
        alert(alertMessageActivity);
    }
}

/**
 * This function increments the counters for task relevance categories.
 * Takes the activity name (string) as argument.
 * @param {*} relevance 
 */
function incrementRelevanceScores(relevance) {
    if (relevance === 'Urgent') {
        document.getElementById('urgent-score').innerText++;
    } else if (relevance === 'Chore') {
        document.getElementById('chores-score').innerText++;
    } else {
        alert(alertMessageCateg);
    }
}

/**
 * This function re-opens the input HTML element on click for editing the text of an existing task. 
 */
function editTaskDescription(event) {
    let newText = prompt("Do you want to edit task?", this.children[0].innerHTML);
    // newText -> null on Cancel/Esc
    // newText -> empty string ('') if OK and no entry -> evaluates false    
    if (newText !== null) {
        let strLength = parseInt((newText === '') ? 0 : newText.length);
        //check for valid entry
        if ( (strLength < minTextLength) || (newText.length > 40) )  {
            while ( (strLength < minTextLength) || (newText.length > 40)) {
                newText = prompt(`Too long! Please enter a task using at 3-40 characters:`);
                strLength = ((!newText || newText === '') ? 0 : newText.length)
            }
        }
        this.children[0].innerHTML = newText;
    }
}

/**
 * This function marks a task as completed after click on the circle icon.
 * Optinally, it can also remove the task from the DOM
 * Internally it calls the function for decrementing the counters for 
 * task activities and relevance, and updates the task info text accordingly.
 */
function editTasks() {
    let idx = getObjId(this.dataset.id, taskObjectsArray);
    if (this.children[0].classList[1] === 'fa-circle') {
        if (confirm('Is the task completed?') === true) {
            this.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
            this.style.color = 'lime';
            this.nextElementSibling.className = 'task-tile-strike';

            let objToRemove = structuredClone(taskObjectsArray.slice(idx)[0]);
            decrementActivityScores(objToRemove.taskCategories.namesActivities[0]);
            decrementRelevanceScores(objToRemove.taskCategories.namesRelevance[0]);
            updateListTitle();

            // Remove HTML element from the DOM:
            if (confirm('Remove task?')) {
                this.parentNode.parentNode.remove();
            };
        }
    } else if (this.children[0].classList[1] === 'fa-circle-check') {
        if (confirm('Reactivate the task?') === true) {
            this.innerHTML = '<i class="fa-regular fa-circle"></i>';
            this.nextElementSibling.className = 'task-title';
            this.style.color = 'white';
        }
        incrementActivityScores(this.parentNode.parentNode.lastChild.children[0].innerText);
        incrementRelevanceScores(this.parentNode.parentNode.lastChild.children[2].innerText);
        updateListTitle();
    } else {
        throw errMessageUnknownIcon;
    }
}

/**
 * This function removes a selected task directly after click on the trash can icon.
 * Internally it calls the function for decrementing the counters for 
 * task activities and relevance, and updates the task info text accordingly.
*/
function removeTasks() {

    if (this.className === "remove-div") { // direct removal on click
        if (confirm('Remove task?') === true) {
            let idx = getObjId(this.dataset.id, taskObjectsArray);
            let objToRemove = structuredClone(taskObjectsArray.slice(idx)[0]);
            if (this.parentNode.children[0].children[0].classList[1] === "fa-circle") {
                // Update scores and titles
                decrementActivityScores(objToRemove.taskCategories.namesActivities[0]);
                decrementRelevanceScores(objToRemove.taskCategories.namesRelevance[0]);
                updateListTitle();
            }
            // Remove HTML element from the DOM:
            this.parentNode.parentNode.remove();
        }
    } else { // At confirmation after task completion

    }
}

//=================================================================================
//--------------------  RUN THE APP ---------------------


/**
 * Declare alert and error messages
 */

let alertMessageText = `Please enter a task using at least three characters:`;
let alertMessageCateg = 'Unknown relevance category';
let alertMessageActivity = 'Unknown activity';
let errMessageIdxUnknown = 'Task cannot be retrieved - Aborting!';
let errMessageUnknownTask = 'Unknown task - Aborting!';
let errMessageUnknownActivity = 'Unknown activity - Aborting!';
let errMessageUnknownCateg = 'Unknown task relevance categry - Aborting!';
let errMessageUnknownIcon = 'Unknown icon class';
let errMessageUnknownTaskID = 'Cannot find task ID - Aborting';
/**
 * Minimum text length for task description 
 */
const minTextLength = parseInt(3);

/**
 * Declare the Array for storing the task data objects
 * Declare the data structure for creating the task HTML elements
 */
let taskObjectsArray = [];
let taskObjectTemplate = {
    taskDescription: [],
    taskCategories: { namesActivities: [], namesRelevance: [] },
    taskScores: { Personal: [], Work: [], Errands: [], Urgent: [], Chore: [] },
    taskId: []
};


/** 
* Wait for the DOM to finish loading before runnig the script.
* Then it gets the button elements and passes callbacks for click action.
*/
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('add-task-btn').addEventListener('click', taskCardDisplay); //Add Task + button
    document.getElementById('add-activity-btn').addEventListener('click', taskActivityDisplay); // Add Activity + button
    document.getElementById('add-relevance-btn').addEventListener('click', taskRelevanceDisplay); // Add relevance + button
    document.getElementById('add-task-ok-btn').addEventListener('click', addTaskToTaskList); // OK button
})

/**
 * The rest of the code below sets callbacks for handling events for task activity and relevance buttons:
 * (https://stackoverflow.com/questions/71346490/how-do-i-make-only-one-button-can-be-selected-at-time)
 */

// Declare variables for names and color coding for the activity buttons:
const colorActivitiesList = ['#87cefa', '#d3d3d3', '#ffe4c4']
let colorActivities = [];
let namesActivities = [];

/**
 * Loop through the task activity buttons and passes an anonymous function.
 * The function waits for a click ebent on a button to unselect all the other 
 * buttons, such that only one activity button is selected at a time.   
 */
let activityBtns = document.getElementById('task-activity-div').children;
for (let i = 0; i < activityBtns.length; i++) {
    activityBtns[i].addEventListener('click', function () {
        for (let j = 0; j < activityBtns.length; j++) {
            // on click, remove event from the previously selected button and reset
            activityBtns[j].classList.remove('selected');
            activityBtns[j].style.backgroundColor = '';

        }
        this.style.backgroundColor = colorActivitiesList[i];
        //this.style.color = 'black';
        colorActivities[0] = this.style.backgroundColor;
        namesActivities[0] = this.innerText;
    });
}

// Declare variables for names and color coding for the relevance category buttons:
const colorRelevanceList = ['#f08080', '#90ee90' ]
let colorRelevance = [];
let namesRelevance = [];
/**
 * Loop through the task category (relevance) buttons and passes an anonymous function.
 * The function waits for a click ebent on a button to unselect all the other 
 * buttons, such that only one relevance category button is selected at a time.   
 */
let relevanceBtns = document.getElementById('task-importance-div').children;
for (let i = 0; i < relevanceBtns.length; i++) {
    relevanceBtns[i].addEventListener('click', function () {
        for (let j = 0; j < relevanceBtns.length; j++) {
            relevanceBtns[j].classList.remove('selected');
            relevanceBtns[j].style.backgroundColor = '';
        }
        this.style.backgroundColor = colorRelevanceList[i];
        colorRelevance[0] = this.style.backgroundColor;
        //this.style.color = 'black';
        namesRelevance[0] = this.innerText;
    });
}


//===================================================================================================//



