export default function board(state = {stages: []}, action) {
  switch (action.type) {
    case 'ADD_STAGE': {
        const {stageId} = action.payload;
        return {stages: [...state.stages, stageId]};
    }
    case 'MOVE_STAGE': {
        const {from, to} = action.payload;
        const newStages = Array.from(state.stages);
        newStages.splice(to, 0, newStages.splice(from, 1)[0]);
        return {stages: newStages};
    }
    case 'DELETE_STAGE': {
        const {stageId} = action.payload;
        const newStages = state.stages.filter((id) => id !== stageId);
        return {stages: newStages};
    }
    default:
      return state
  }
}