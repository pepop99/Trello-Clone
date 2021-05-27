export default function stage(state = [], action) {
  switch (action.type) {
    case 'ADD_STAGE': {
        const {stageId, stageTitle} = action.payload;
        return {...state, [stageId]: {
            id: stageId,
            title: stageTitle,
            tasks: []
        }};
    }
    case 'DELETE_STAGE': {
        const {stageId} = action.payload;
        const {[stageId]: deletedStage, ...remainingStages} = state;
        return remainingStages;
    }
    case 'RENAME_STAGE': {
        const {stageId, stageTitle: newTitle} = action.payload;
        return {...state, [stageId]: {...state[stageId], title: newTitle}};
    }
    case 'ADD_TASK': {
        const {stageId, taskId} = action.payload;
        return {...state, [stageId]: {...state[stageId], tasks: [...state[stageId].tasks, taskId]}};
    }
    case 'DELETE_TASK': {
        const{stageId, taskId} = action.payload;
        const newTasks = state[stageId].tasks.filter((_taskId) => _taskId !== taskId);
        return {...state, [stageId]: {...state[stageId], tasks: newTasks}};
    }
    case 'MOVE_TASK': {
        const {source, target, oldIndex, newIndex} = action.payload;
        if(source === target){
            const newTasks = Array.from(state[source].tasks);
            newTasks.splice(newIndex, 0, newTasks.splice(oldIndex, 1)[0]);
            return {...state, [source]: {...state[source], tasks: newTasks}};
        }
        const sourceTasks = Array.from(state[source].tasks);
        const [removedTask] = sourceTasks.splice(oldIndex, 1);
        const targetTasks = Array.from(state[target].tasks);
        targetTasks.splice(newIndex, 0, removedTask);
        return {...state, [source]: {...state[source], tasks: sourceTasks}, [target]: {...state[target], tasks: targetTasks}};
    }
    default:
      return state
  }
}