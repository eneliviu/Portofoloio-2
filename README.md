# The ***LovinPlans*** Todo List Web App


## Overview
The main purpose of this project is to build up a web application that allows the user to dynamically create a simple TODO list and to follow up the tasks as they are executed.The ***LovinPlans***-app provides a user-friendly interface to create, edit, and track your tasks effortlessly, adn thus helps the users to stay focused and productive.

This application was developed as part of Milestone Project 2 for the Diploma in Full Stack Software Development program at Code Institute. The objective was to create an interactive front-end website utilizing HTML5, CSS3, and JavaScript.

## Target audience
* The ***LovinPlans*** app is designed to cater to a diverse range of users seeking a simple yet powerful task management solution. 
* The target audience for the app comprises tech-savvy, goal-oriented, and organized individuals who prioritize personal productivity. Additionally, the app is designed to be inclusive, aiming to accommodate users from diverse geographic regions, cultures, and backgrounds on a global scale.

## Features
### **1. User-friendly interface**
* ***LovinPlans*** is a one-page interactive application with a clean and intutive inteface that doesn't require a steep learning curve to start using it.
* The app was built followig the responsive design principles, ensuring a consistent user experience on various devices, such that the user can stay focused on the tasks without getting distracted when a context switch occurs.
* The styling of the app has been kept simple for not distracting the user, while providing a high color contrast to help identifying relevant information at a glance.
* The styling of the text entry and the buttons changes on hovering and focus in order to keep the user's atention in the right spot on the screen.
* The app utilizes the Roboto font from Google Fonts, which offers a clean and functional appearance.
[![Roboto font style]](/assets/images/fonts.webp)

### **2. Task Creation and Editing**
* Users can effortlessly create new tasks and edit existing ones with just a few clicks.

### **3. Task Categorization and Prioritization**
* The app allows users to enter task details and to specify several task attributes (personal activity, work-related or errands), as well as the task priority (urgent/chore).
* On the editing menu, the task attributes are displayed on the task cards using colors with high contrast.
* After selection, the task attributes are also visible on the task card   

### **4. Cross-Platform Accessibility**
* The app can bu used on any device (mobile, tablet, laptop/desktop) that is connected to internet.  



## Technologies Used
### HTML (Hypertext Markup Language)
The structure of the app is provided in the HTML (index.html)   
### CSS (Cascading Style Sheets)
CSS is responsible for styling the elements created with HTML, ensuring that the app has a consistent appearance across different devices and browsers. CSS is used to define the layout, colors, fonts, spacing, and other visual aspects of the app's user interface. 


### JavaScript
JavaScript provides the interactivity and functionality of the app, allowing users to interact with the interface, manipulate tasks, and perform actions dynamically without reloading the page. The JavaScript code for DOM manipulation (script.js) handles user inputs, edits and updates the task lists in real-time.


### Deployment & Local Development
The app is deployed suing the github page and can be visited at

### Testing
#### HTML and CSS Validators
- The .html and .css files were checked using the validator available at https://validator.w3.org/nu/ via direct text input, and apparently no errors nor warnings were found.
#### Lighthouse
- Chrome's Lighthouse developer tool was used to check the app's performance: 
- The color contrast for the styling was checked using the tools provided by WebAIM (https://webaim.org/resources/contrastchecker/).


#### Additional tools and services
- The favicon for the website was generated from text using the https://favicon.io/ tools.
- All the other icons were obtained from fontawesome.com
- The use of ChatGPT was restrictes to getting sensible inputs for the text content in the website and for proof-checking the Readme-file. No code was produced using AI-models.


#### Additional testing
Additional testing was performed on my private devices Windows 11 devices (desktop and laptop), as well as
on my smartphone (Samsung Galaxy S21) operating on Android OS, using the following web browsers: 
- Google Chrome: Version 123.0.6312.124
- Brave: version 1.65.114 Chromium: 124.0.6367.60 (Official Build) (64-bit)
- Microsoft Edge: Version 124.0.2478.51 (Official build) (64-bit)

The following features were tested:
- add new task (pass)
    - text editing and error checking for imin/max text length
    - task activity selection (one at the time)
- text editing for an existing task (pass)
    - update the text in the task card
    - check for min/max text length  
- incrementing the task tracking score when adding a new task
    - incrementing the task tracking score when reactivating a previously completed task
    - decrementing the task tracking score 


### Responsive design
* The app uses responsive design principles such media queries and flexible layouts to ensure proper interaction across various devices and screen sizes. 
* The app interface adapts dynamically based on the device's viewport size, providing a seamless and consistent user experience on desktops/laptops, tablets, or smartphones.

### Accessibility
* Aria-labels for screen readers were included in the sections, input and button HTML elements of the app to ensure semantic elements and enhance accessibility. This approach helps improve the semantic understanding of the content and ensures that the web page becomes easy to navigate and to be understood by all users, especially those using screen readers. 


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