export default function task(state = [], action) {
  switch (action.type) {
    case 'ADD_TASK': {
        const {taskId, taskText} = action.payload;
        return {...state, [taskId]: {id: taskId, text: taskText}};
    }
    case 'CHANGE_TASK_TEXT': {
        const {taskId, taskText} = action.payload;
        return {...state, [taskId]: {...state[taskId], text: taskText}};
    }
    case 'DELETE_TASK': {
        const {taskId} = action.payload;
        const {[taskId]: deletedTask, ...remainingTasks} = state;
        return remainingTasks;
    }
    case 'DELETE_STAGE': {
        const {tasks: tasksToRemove} = action.payload;
        const newTasks = {...state};
        tasksToRemove.forEach((task)=>{
            delete newTasks[task];
        });
        return newTasks;
    }
    default:
      return state
  }
}