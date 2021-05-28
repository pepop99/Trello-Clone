## Trello Clone
This project provides a basic implementation of Trello. [Live Demo](https://pepop99.github.io/ZuddlProject/)


## Motivation
This project has been created as an exercise task for the position of SDE intern at Zuddl.

## How to Use?
```bash
git clone https://github.com/pepop99/ZuddlProject.git
cd ZuddlProject  
npm install
npm start
```
------
## Problems Encountered and fixes
- Save state function was called too many times, thereby reducing the performance of the app. Thus [lodash.throttle](https://www.npmjs.com/package/lodash.throttle) has been used to prevent this.
- Since both stages and tasks needed to be moved, simple array indexing was not enough. Unique ids with the help of [uniqid](https://www.npmjs.com/package/uniqid) were generated and were used to track which component belonged where.

## Caveats
- Although the app is responsive and is designed to work on all devices, but due to the limitation of [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd), the drag and drop feature of stages and tasks might not work on some touch screen devices.

## Tech/framework used
<b>Built with</b>
- [React](https://reactjs.org/)

## Local Storage Representation
```json
﻿{
  "board": {
    "stages": [
      "kp8tbcxl",
      "kp8tbcxp"
    ]
  },
  "stage": {
    "kp8tbcxl": {
      "id": "kp8tbcxl",
      "title": "Resources",
      "tasks": [
        "kp8tbcxm",
        "kp8tbcxn"
      ]
    },
    "kp8tbcxp": {
      "id": "kp8tbcxp",
      "title": "Todo",
      "tasks": [
        "kp8tbcxq"
      ]
    }
  },
  "task": {
    "kp8tbcxm": {
      "id": "kp8tbcxm",
      "text": "Financials"
    },
    "kp8tbcxn": {
      "id": "kp8tbcxn",
      "text": "2017 Goals"
    },
    "kp8tbcxq": {
      "id": "kp8tbcxq",
      "text": "Taco drone"
    }
  }
}
```

## Features
- Add new stages.
- Add new tasks.
- Edit and delete stage. (activated by clicking on stage title)
- Edit and delete task content. (activated by clicking on task content)
- Drag and drop stages.
- Drag and drop tasks within same stage or across stages.

## Questions
- If a user can create and edit stages for a particular board. For example instead of Open > In Progress > Done if they want the stages of their task board to be Read > Working > Reviewing > Completed
  - This has been implemented with the help of state management using redux. A function to change the title of a stage was called, which dispatched an action(defined in store) and updated the values in local storage.
- If users can comment on task
  - Commenting on tasks can be implemented in a similiar way to task text. We can add anoither field in the task's state to maintain the comments and render them conditionally.
- How will you do error handling?
  - We can define Error boundaries as components which can catch errors anywhere in their child component tree, log those errors to the console, and display a fallback UI instead of the component tree crashing.
