


Commit types include:
* Feat: feature
* Fix: bug fixes
* Docs: changes to the documentation like README
* Style: style or formatting change 
* Perf: improves code performance
* Test: test a feature


# Purpose
The main purpose of this project is to build up an app that allows the user to dynamically create a simple TODO list and to follow up the tasks as they are executed.

The app functionality  consists of: 
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
 


