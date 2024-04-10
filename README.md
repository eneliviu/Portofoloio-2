![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

Welcome,

This is the Code Institute student template for Codeanywhere. If you are using Gitpod then you need [this template](https://github.com/Code-Institute-Org/gitpod-full-template) instead.  We have preinstalled all of the tools you need to get started. It's perfectly ok to use this template as the basis for your project submissions.

You can safely delete this README.md file, or change it for your own project. Please do read it at least once, though! It contains some important information about Codeanywhere and the extensions we use. Some of this information has been updated since the video content was created. The last update to this file was: **August 30th, 2023**

## Codeanywhere Reminders

To run a frontend (HTML, CSS, Javascript only) application in Codeanywhere, in the terminal, type:

`python3 -m http.server`

A button should appear to click: _Open Preview_ or _Open Browser_.

To run a frontend (HTML, CSS, Javascript only) application in Codeanywhere with no-cache, you can use this alias for `python3 -m http.server`.

`http_server`

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A button should appear to click: _Open Preview_ or _Open Browser_.

In Codeanywhere you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

To log into the Heroku toolbelt CLI:

1. Log in to your Heroku account and go to _Account Settings_ in the menu under your avatar.
2. Scroll down to the _API Key_ and click _Reveal_
3. Copy the key
4. In Codeanywhere, from the terminal, run `heroku_config`
5. Paste in your API key when asked

You can now use the `heroku` CLI program - try running `heroku apps` to confirm it works. This API key is unique and private to you so do not share it. If you accidentally make it public then you can create a new one with _Regenerate API Key_.

---

Happy coding!


Commit types include:
    - Feat: feature
    - Fix: bug fixes
    - Docs: changes to the documentation like README
    - Style: style or formatting change 
    - Perf: improves code performance
    - Test: test a feature


# Purpose
The main purpose of this project is to (1) get acquited to DOM manipulation in JS, (2) beginner-level usage of event listeners, and (3) rehears vanilla JS (logic, functions, data structures, etc).
The "Planner" project aims to provide the playground for exercising these skills through building a simple app that basically allows the user to set up a schedule for selected days, and to follow up the tasks as they are executed.
The app is inspired by the existing Outlook or Google Calendar functionality consists of: 
1. define a new task for a selected day and within a selected time interval. The day-time selection is provided using HTML forms. More efficent alternative exists (such as jQuery libraries), I choose the HTML forms as this tehcnology has been allready covered during the course. 
- The date-time selector is otional, such that the user can add tasks that are not time constraied. If the task is time bounded, the script contains a validation routine to check for possible conflicts - i.e., pop-up a warning for overlapping tasks asking the user to accept or reject that particular scheduling.
- The date choice is restricted to 10 days ahead from the current date, and the daily time interval for scheduling tasks is restricted from 7am to 8pm.
2. A task (or more) can be removed by the user in the following situatsions:
- after completions, without raising any warnings
- before task(s) completion, when a warning is raised to comfirm the deletion.   
3. Misc validations:
- duplicated tasks
- empty entries
- more??
4. The user can group the task by categories. The app allows the user to categorizes the tasks by type ("work", "home", "chores","errands"), importance ('Urgent', 'Important', 'Normal') and by time ('Upcomming' - with settings for 30, 15 and 5 min before for the sheduled time).

# Structure

## Main Page
### Structure
The main page structure is defined in the index.html file. The page has   

# Javascript coding
The developement was done in VSCode using the Live Server extension for running the app, and the JS code was also run in the Chrome developer tool Console. 
 


