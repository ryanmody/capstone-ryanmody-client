# Project Title
GoalKeep - An agenda app

## Overview

GoalKeep is an agenda planner app for the working professional that's just entered the job market! New workers just joining the job force after graduating college/university can struggle to balance their hobbies or passions with their newfound professional duties.

### Problem

Most agenda apps are hyper-specialized for students trying to balance their deadlines and tasks related to their studies and class times, which works great during post-secondary school but can lose its functionality for recent graduates! Todo apps don't allow for categorization of the different tasks that allow people to plan and balance across multiple dimensions of their lives.

### User Profile

- 24-29 year olds that have just graduated and are struggling to balance their new professional duties wtih the hobbies/passions/extra-curriculars that are important to their lives!

### Features

- Being able to see all tasks (by date) on the homepage, and have a month's view of the different category of tasks that are planned for the month. 
- Being able to add new categories, and assign a color
- Being able to add a new task, and assign a category

## Implementation
Sprint 1 Functionalities
- Homepage Calendar + Task list (top half of page is a Calendar for the month, bottom-half is the task list for the particular day)
    - Calendar area will show "color-coded bubbles" in each respective day if there is a task present for that day.
    - Task list area will show which tasks are assigned for the day
- Add a category page
    - User can add a category and assign color
- Add a task page
    - User can add a task and assign it to one category that exists.

### Tech Stack

- Front-end:
    - React (Javascript)
- Back-end:
    - Node
    - Express
    - Knex
- Database System Manager
    - MySQL

### APIs

- No external APIs will be used for the first sprint

### Sitemap

- Homepage Calendar + Task list
- Add a category
- Add a task

### Mockups

#### Home Page 
![](./src/assets/mockups/Home%20Calendar%20Page.png)

#### Add a category page
![](./src/assets/mockups/Add%20a%20category%20page%20(Form).png)

#### Add a task page
![](./src/assets/mockups/Add%20a%20task%20page%20(Form).png)


### Data

![](./src/assets/mockups/SQL%20Database%20Structure.png)

### Endpoints

- Categories
    - GET all categories that have a task
    - POST a new category
- Tasks
    - GET all tasks by day
    - POST a new task (with date and category)
- Month
    - GET all days for the month

## Roadmap

- Create client

- Create server

- Build out the three pages that are static

- Build out the logic for POSTing categories and tasks on server and client side

- Build out the logic for dynamically populating the HomePage Calendar task list to show tasks for that day

- Build out the logic for 


## Nice-to-haves (if time-permitting)

- Edit and Delete categories and tasks
- Clicking on a day in the calendar takes you to a page dedicated to that day that shows all the tasks by category