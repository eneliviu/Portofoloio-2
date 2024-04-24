# ***LovinPlans***: A Todo List Web App

### **Table of content:**
- [Overview](#overview)
- [Target audience](#item-two)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Known bugs and issues](#known-bugs-and-issues)

## Overview
This application was developed as part of Milestone Project 2 for the Diploma in Full Stack Software Development program at Code Institute. The objective was to create an interactive front-end website utilizing HTML5, CSS3, and JavaScript.

The main purpose of this project is to build up a web application that allows the user to dynamically create a simple TODO list and to follow up the tasks as they are executed.
The ***LovinPlans***-app provides a user-friendly interface to create, edit, and track your tasks effortlessly, adn thus helps the users to stay focused and productive. Nevertheless, the app is not a fully developed product, but rather a proof of acquired skills for manipulating the DOM using vanilla JavaScript.

## Target audience
* Theoretically, the ***LovinPlans*** app is designed to cater to a diverse range of users seeking a simple yet powerful task management solution. 
* The target audience for the app comprises tech-savvy, goal-oriented, and organized individuals who prioritize personal productivity. Additionally, the app is designed to be inclusive, aiming to accommodate users from diverse geographic regions, cultures, and backgrounds on a global scale.

## Features

A quick demonstration of using the app can be found here [***here.***](assets/images/Demo-functionality.gif)

### **1. User-friendly interface**
* ***LovinPlans*** is a one-page interactive application with a clean and intutive inteface that doesn't require a steep learning curve to start using it.
* The app was built followig the responsive design principles, ensuring a consistent user experience on various devices, such that the user can stay focused on the tasks without getting distracted when a context switch occurs.
* The styling of the app has been kept simple for not distracting the user, while providing a high color contrast to help identifying relevant information at a glance.
* The styling of the text entry and the buttons changes on hovering and focus in order to keep the user's atention in the right spot on the screen.
* The app utilizes the Roboto font from Google Fonts, which offers a clean and functional appearance.

![Roboto font style](/assets/images/fonts.webp "Roboto Google font")

### **2. Task Creation and Editing**
- Users can effortlessly create new tasks and edit existing ones with just a few clicks. 

### **3. Task Categorization and Prioritization**
* The app allows users to enter task details and to specify several task attributes.
* On the editing menu, the task attributes are displayed on the task cards using colors with high contrast.
* After selection, the task attributes are also visible on the task card   

### **4. Cross-Platform Accessibility**
* The app can be used on any device (mobile, tablet, laptop/desktop) that is connected to internet.  


 More details about the app functionality are provided in the [Usage and screenshots](#usage-and-screenshots) section.


## Technologies Used
### HTML (Hypertext Markup Language)
The structure of the app is provided in the [index.html file](index.html) that containts the static components of the app. Since the purpose of the project is not focused on the design, the HTML structure was kept simple. 
The HTML provides:
- Header and a footer to frame the task-related content.
- Task 
- Semantic elements were used to improve the accessibility. 

The building blocks for task tracking and task creation were set up. The rest of the DOM (i.e., the task list) is created dynamically following the user inputs. 
### CSS (Cascading Style Sheets)
The CSS3 file [style.css](assets/css/style.css) is responsible for styling the elements created with HTML, ensuring that the app has a consistent appearance across different devices and browsers. 
CSS is used to define the layout, colors, fonts, spacing, and other visual aspects of the app's user interface.
Using CSS, the dialog windows for task creation were hidden by default. They are activated/inactivated by the user actions.    
### JavaScript
JavaScript provides the interactivity and functionality of the app, allowing users to interact with the interface, manipulate tasks, and perform actions dynamically without reloading the page. 
The JavaScript code for DOM manipulation [script.js](assets/js/script.js) provides the app interactivity and handles user inputs, edits and updates the task lists in real-time.
### Responsive design
The app uses responsive design principles such media queries and flexible layouts to ensure proper interaction across various devices and screen sizes. 
By the app interface adapts dynamically based on the device's viewport size, providing a seamless and consistent user experience on desktops/laptops, tablets, or smartphones.

### Deployment & Local Development
The app is currently deployed on github and can be accessed at https://eneliviu.github.io/Portofoloio-2/. 
The developement was done in VSCode using the Live Server extension for running the app.
The JS code was also run in the Chrome developer tool Console for direct access to the variables and debugging.

### Testing
#### HTML and CSS Validators
The Markup Validatiopn Service (https://validator.w3.org/#validate_by_input) was used to check the HTML file [index.html file](index.html), and CSS Validation Service (https://jigsaw.w3.org/css-validator/) 
for assessing the styling [style.css file](style.css)
Apparently, no errors were found.

#### Lighthouse
- Chrome's Lighthouse developer tool was used to check the app's performance: 
- The color contrast for the styling was checked using the tools provided by WebAIM (https://webaim.org/resources/contrastchecker/).

![Lighthouse validation](/assets/images/lighthouse1.webp "Google Chrome dev tools: Lighthouse assessment")

#### Additional tools and services
- The favicon for the website was generated from text using the https://favicon.io/ tools.
- All the other icons were obtained from fontawesome.com website.
- The use of ChatGPT was restrictes to getting sensible inputs for the text content in the website and for proof-checking the language.

### Responsive design
* The app uses responsive design principles such media queries and flexible layouts to ensure proper interaction across various devices and screen sizes. 
* The app interface adapts dynamically based on the device's viewport size, providing a seamless and consistent user experience on desktops/laptops, tablets, or smartphones.

### Accessibility
* Aria-labels for screen readers were included in the sections, input and button HTML elements of the app to ensure semantic elements and enhance accessibility. This approach helps improve the semantic understanding of the content and ensures that the web page becomes easy to navigate and to be understood by all users, especially those using screen readers. 


## Usage and screenshots
###  **1. Creating a Task**
#### To create a new task, click on the "Add Task" button or the plus icon located at the top or bottom of the task list.
##### Enter the task description in the text input field 

![Add task dialig box](/assets/images/task1.webp "Add task: opening the dialog box")

#### Select an activity (personal activity, work-related or errands).
![Select activity dialig box](/assets/images/task2.webp "Add task: select activity")

#### Select the task priority (urgent/chore).
![Select task relevance dialig box](/assets/images/task3.webp "Add task: select task relevance")

##### Once you've filled out the task details, click the "OK" button to add the task to your list.
##### The task entry contains:
- A task name field that can be edited on click action.
- Edit butoon on the left side  
- A Bin Trash icon on the right side
- The selected task attributes are below the task name, on the left and the right side respectivelly.
- When a task is entered, the task tracking field updates the counters by task activities and categories.
- Error checks are placed to prevent submitting an invalid text entry (3-40 characters required for a valid task name)
    or ill formatted task (missing attributes).

![Add task to the Todo list](/assets/images/task4.webp "Add new task to the list")

### **2. Editing a Task**
- By clicking on the task name enables a prompt window for editing the text. 
- The new text input is validated before utpading the task name 

![Add task to the Todo list](/assets/images/task5.webp "Add new task to the list")


### **3. Complete/reactivate tasks**
- A left click on the edit button (lef side) opens a confirmation window 
- For OK selection, the task name is striked and font size reduces, while the edit button is checked.
    - The task tracking *decrements* the scores for active tasks
    - If all task are completed, the message "All Task Completed" marks the event.
- Note that pressing the Cancel button on the task completion confirmation window will delete the task  

![Add task to the Todo list](/assets/images/task6.webp "Add new task to the list")

- To reactivate a task, click on the edit button and press the OK button on the confirmation window.
    - The task name and edit button are restored to previous styling
    - The task tracking *increments* the scores for active tasks

![Add task to the Todo list](/assets/images/task7.webp "Add new task to the list")


### **4. Deleting a task**
Removing a task from the list can be done in two ways: 
- Clicking on the Bin Trash icon opens a confirmation window. 
    - Press OK to permanently remove the task from the list 
or 
- Press the Cancel button on the task completion from the confirmation window  (see [Complete/reactivate tasks](#3.-complete/reactivate-tasks) section)

![Add task to the Todo list](/assets/images/task8.webp "Add new task to the list")


### **5.Tracking the task list**
- When a task is marked as completed and/or removed from the list, the task tracking field updates the counters by task activities and categories.
- If all task are completed, the message "All Task Completed" marks the event.

## Additional testing

### Devices and browsers
Additional testing was performed on my private devices Windows 11 devices (desktop and laptop), as well as
on my smartphone (Samsung Galaxy S21) operating on Android OS, using the following web browsers: 
- Google Chrome: Version 123.0.6312.124
- Brave: version 1.65.114 Chromium: 124.0.6367.60 (Official Build) (64-bit)
- Microsoft Edge: Version 124.0.2478.51 (Official build) (64-bit)

### Tested features:
- add new tasks (*pass*)
    - text editing and error checking for min/max text length
    - task activity selection (one at the time)
- text editing for an existing task (*pass*)
    - update the text in the task card
    - check for min/max text length  
- incrementing the task tracking score when adding a new task (*pass*)
    - incrementing the task tracking score when reactivating a previously completed task
    - decrementing the task tracking score
- mark a task as completed (*pass*)
    - editing tool action (press OK button on the 'Is the task completed?' prompt window )
    - bin trash icon action (press OK button on the prompt window)
- remove a task (*pass*)
    - editing tool action after task copletion confirmation (press OK button on the 'Remove task?' prompt window)
    - using the bin trash icon action (press OK button on the prompt window)
- responsiveness on various screen sizes (*pass*)   

## Known bugs and issues
- The text input is not restored after the error checking is run: the app behaviour is to reset all the inputs such that the user starts with a clean dialog window.   
- The browser specific promt windows triggered by the error checks doesn't contain a No-button (but the Cancel button has the same role): creating custom promt windows would improve the overall user experience.  
- There is a unfortunate typo in the name of the respository ('Portololoio' instead of 'Portofolio') that has to be fixed.

## Possible improvements
### Functionality for user accounts and data storage. 
In its current state, the app can only be user not provide storage for the task list and tracking data. The consequence is that each time the page is refreshed, all the information is gone. 
It would be nice to include user account and database connections such that the information is stored permanatly and the users can login in their accounts.
### Filtering and Sorting Tasks
- Filter and sort options to organize and view the tasks according to specific criteria.
- Possible filters: 
    - task status (e.g., active or ccompleted tasks)
    - activity type (work, leisure, etc)
    - task relevance/importance (urgent, chore) by due date or incoming within a certain time horizon.
### Reminders
- Set due dates with automatic reminder to receive timely notifications for upcoming tasks and deadlines.
- Day-time picker
- Check for task overlapp and possible collisions
### Dialog windows/menus
- Replace the prompt windows in the browsers with custom forms. For instance, it would a better user experience to replace the 'Cancel' button in the promt windows that pop-up during task editing and handling with a 'No' button.
- Add intercativity to all task features, including re-catogorizing and re-styling the theme (dark/light) and the button colors. 
### Collaboration tools
- Include features for inviting people to participate in various tasks, sharing task lists and/or assigning tasks to team members.
- Add the tools to allow the collaborators would have access to view, edit, and comment on the tasks.
## Contributing

To contribute to the ***LovinPlans*** project:
- Fork the repository on GitHub to create your own copy.
- Clone the forked repository to your local machine.
- Make your desired changes, whether it's fixing a bug, adding a feature, or updating documentation.
- Commit your changes with clear messages.
- Push your commits to your forked repository on GitHub.
- Submit a pull request detailing your changes and their benefits.

## License
### Open Source
As an open-source project, the ***LovinPlans*** app encourages transparency, and community involvement. 
The code of the app is available on GitHub, such that developers can view, fork, and contribute to the project if they wish so.

## Acknowledgements
The code for setting callbacks to handle the events for task activities and relevance buttons was adapted from the *Stack Overflow* post available at: 

https://stackoverflow.com/questions/71346490/how-do-i-make-only-one-button-can-be-selected-at-time
