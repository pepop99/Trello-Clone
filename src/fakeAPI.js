import uniqid from 'uniqid'

const fakeAPI = (store) => {
    console.log('Fetching from fake API since no local data detected');
    // console.log(store.getState());
    //adding first dummy stage
    const firstStageId = uniqid();
    store.dispatch({
        type: 'ADD_STAGE',
        payload: {
            stageId: firstStageId,
            stageTitle: 'Resources'
        }
    });
    store.dispatch({
        type: 'ADD_TASK',
        payload: {
            stageId: firstStageId,
            taskId: uniqid(),
            taskText: 'Financials'
        }
    });
    store.dispatch({
        type: 'ADD_TASK',
        payload: {
            stageId: firstStageId,
            taskId: uniqid(),
            taskText: '2017 Goals'
        }
    });
    store.dispatch({
        type: 'ADD_TASK',
        payload: {
            stageId: firstStageId,
            taskId: uniqid(),
            taskText: 'Brands guide'
        }
    });
    //adding second dummy stage
    const secondStageId = uniqid();
    store.dispatch({
        type: 'ADD_STAGE',
        payload: {
            stageId: secondStageId,
            stageTitle: 'Todo'
        }
    });
    store.dispatch({
        type: 'ADD_TASK',
        payload: {
            stageId: secondStageId,
            taskId: uniqid(),
            taskText: 'Taco drone'
        }
    });
    store.dispatch({
        type: 'ADD_TASK',
        payload: {
            stageId: secondStageId,
            taskId: uniqid(),
            taskText: 'BITCOIN'
        }
    });
    store.dispatch({
        type: 'ADD_TASK',
        payload: {
            stageId: secondStageId,
            taskId: uniqid(),
            taskText: 'Elon musk'
        }
    });
    //adding third stage id
    const thirdStageId = uniqid();
    store.dispatch({
        type: 'ADD_STAGE',
        payload: {
            stageId: thirdStageId,
            stageTitle: 'Doing'
        }
    });
    store.dispatch({
        type: 'ADD_TASK',
        payload: {
            stageId: thirdStageId,
            taskId: uniqid(),
            taskText: 'Matic'
        }
    });
    store.dispatch({
        type: 'ADD_TASK',
        payload: {
            stageId: thirdStageId,
            taskId: uniqid(),
            taskText: 'Safe Moono'
        }
    });
    //adding fourth dummy stage
    const fourthStageId = uniqid();
    store.dispatch({
        type: 'ADD_STAGE',
        payload: {
            stageId: fourthStageId,
            stageTitle: 'Done'
        }
    });
    store.dispatch({
        type: 'ADD_TASK',
        payload: {
            stageId: fourthStageId,
            taskId: uniqid(),
            taskText: 'Zuddl To the moon'
        }
    });
};

export default fakeAPI;