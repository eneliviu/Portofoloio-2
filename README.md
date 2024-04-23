


Commit types include:
* Feat: feature
* Fix: bug fixes
* Docs: changes to the documentation like README
* Style: style or formatting change 
* Perf: improves code performance
* Test: test a feature


# Overview
The main purpose of this project is to build up a web application that allows the user to dynamically create a simple TODO list and to follow up the tasks as they are executed.
The **LovinPlans**-app provides a user-friendly interface to create, edit, and track your tasks effortlessly, adn thus helps the users to stay focused and productive.

# Features
**1. User-friendly interface**
**LovinPlans** is one-page application with a clean and intutive inteface, and it does not require a steep learning curve to start using it.
The app was built followig the responsive design principles, ensuring a consistent user experience on various devices, such that the user can stay focused on the tasks without getting distracted when a context switch occurs.
The styling of the app has been kept simple for not distracting the user, while providing a high color contrast to help identifying and  at a glance.      
**2. Task Creation and Editing**
Users can effortlessly create new tasks and edit existing ones with just a few clicks. 
The app allows users to enter task details and to specify several task attributes (personal activity, work-related or errands), as well as the task priority (urgent/chore).
The task attributes are displayed on he task cards with different colors  
**3. Task Categorization**

**4. Task Prioritization**

img[src*='#center'] {
    display: block;
    margin: auto;
}
[![Roboto font style](/assets/images/fonts.webp)


**6. Cross-Platform Accessibility**
The app can bu used on any device (mobile, tablet, laptop/desktop) that is connected to internet.      

2. A task (or more) can be removed by the user in the following situatsions:
* after completions, without raising any warnings
* before task(s) completion, when a warning is raised to comfirm the deletion.   
3. Misc validations:
* duplicated tasks
* empty entries

4. The user can group the task by categories. The app allows the user to categorizes the tasks by type ("work", "home", "chores","errands"), importance ('Urgent', 'Important', 'Normal') and by time ('Upcomming' - with settings for 30, 15 and 5 min before for the sheduled time).

# Technologies Used
## HTML (Hypertext Markup Language)
The structure of the app is provided in the HTML (index.html)   
## CSS (Cascading Style Sheets)
CSS is responsible for styling the elements created with HTML, ensuring that the app has a consistent appearance across different devices and browsers. CSS is used to define the layout, colors, fonts, spacing, and other visual aspects of the app's user interface. 

## JavaScript
JavaScript provides the interactivity and functionality of the app, allowing users to interact with the interface, manipulate tasks, and perform actions dynamically without reloading the page. The JavaScript code for DOM manipulation (script.js) handles user inputs, edits and updates the task lists in real-time.

## Libraries and frameworks
The app does not use exter
## Responsive design
The app uses responsive design principles such media queries and flexible layouts to ensure proper interaction across various devices and screen sizes. 
By the app interface adapts dynamically based on the device's viewport size, providing a seamless and consistent user experience on desktops/laptops, tablets, or smartphones.

## Main Page
### Structure
The main page structure is defined in the index.html file. The page has   

# Javascript coding
The developement was done in VSCode using the Live Server extension for running the app, and the JS code was also run in the Chrome developer tool Console. 
 
# Usage and screenshots
**1. Creating a Task**
* To create a new task, click on the "Add Task" button or the plus icon located at the top or bottom of the task list.
* Enter the task details such as title, description, due date, priority, and category in the provided input fields.
* Once you've filled out the task details, click the "Save" or "Add" button to add the task to your list.

**2. Editing a Task**

**3. Marking a Task as Complete**

**4. Deleting a Task**

**5.Tracking the tack completion**



# Known bugs and issues
The text input is not 
The promt windows  

# Possible improvements
## Functionality for user accounts and data storage. 
In its current state, the app can only be user not provide storage for the task list and tracking data. The consequence is that each time the page is refreshed, all the information is gone. 
It would be nice to include user account and database connection such that 
## Filtering and Sorting Tasks
* Filter and sort options to organize and view the tasks according to specific criteria.
* Possible filters: 
** task status (e.g., active or ccompleted tasks)
** activity type (work, leisure, etc)
** task relevance/importance (urgent, c)
** By due date or incoming within a certain time horizon.
## Reminders
* Set due dates with automatic reminder to receive timely notifications for upcoming tasks and deadlines.
* Day-time picker
* Check for task overlapp and possible collisions
## Dialog windows/menus
* Replace the prompt windows in the browsers with custom forms. For instance, it would a better user experience to replace the 'Cancel' button in the promt windows that pop-up during task editing and handling with a 'No' button.
* Add intercativity to all task features, including re-catogorizing and re-styling the theme (dark/light) and the button colors. 
## Collaboration tools
- Include features for inviting people to participate in various tasks, sharing task lists and/or assigning tasks to team members.
- Add the tools to allow the collaborators would have access to view, edit, and comment on the tasks.
 
# Contributing

# License

# Acknowledgements