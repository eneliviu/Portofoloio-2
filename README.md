


Commit types include:
* Feat: feature
* Fix: bug fixes
* Docs: changes to the documentation like README
* Style: style or formatting change 
* Perf: improves code performance
* Test: test a feature


# Purpose
The main purpose of this project is to (1) get acquited to DOM manipulation in JS, (2) beginner-level usage of event listeners, and (3) rehears vanilla JS (logic, functions, data structures, etc).
The "Planner" project aims to provide the playground for exercising these skills through building a simple app that basically allows the user to set up a schedule for selected days, and to follow up the tasks as they are executed.
The app is inspired by the existing Outlook or Google Calendar functionality consists of: 
1. define a new task for a selected day and within a selected time interval. The day-time selection is provided using HTML forms. More efficent alternative exists (such as jQuery libraries), I choose the HTML forms as this tehcnology has been allready covered during the course. 
* The date-time selector is otional, such that the user can add tasks that are not time constraied. If the task is time bounded, the script contains a validation routine to check for possible conflicts - i.e., pop-up a warning for overlapping tasks asking the user to accept or reject that particular scheduling.
* The date choice is restricted to 10 days ahead from the current date, and the daily time interval for scheduling tasks is restricted from 7am to 8pm.
2. A task (or more) can be removed by the user in the following situatsions:
* after completions, without raising any warnings
* before task(s) completion, when a warning is raised to comfirm the deletion.   
3. Misc validations:
* duplicated tasks
* empty entries
* more??
4. The user can group the task by categories. The app allows the user to categorizes the tasks by type ("work", "home", "chores","errands"), importance ('Urgent', 'Important', 'Normal') and by time ('Upcomming' - with settings for 30, 15 and 5 min before for the sheduled time).

# Structure

## Main Page
### Structure
The main page structure is defined in the index.html file. The page has   

# Javascript coding
The developement was done in VSCode using the Live Server extension for running the app, and the JS code was also run in the Chrome developer tool Console. 
 


