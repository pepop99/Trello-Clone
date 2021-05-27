import uniqid from 'uniqid'

const fakeAPI = (store) => {
    console.log('Fetching from fake API since no local data detected');
    // console.log(store.getState());
    store.dispatch({
        type: 'ADD_STAGE',
        payload: {
            stageId: uniqid(),
            stageTitle: 'Resources'
        }
    });
    store.dispatch({
        type: 'ADD_STAGE',
        payload: {
            stageId: uniqid(),
            stageTitle: 'Todo'
        }
    });
    store.dispatch({
        type: 'ADD_STAGE',
        payload: {
            stageId: uniqid(),
            stageTitle: 'Doing'
        }
    });
    store.dispatch({
        type: 'ADD_STAGE',
        payload: {
            stageId: uniqid(),
            stageTitle: 'Done'
        }
    });
};

export default fakeAPI;