import { createStore } from 'redux'
import reducers from './reducers/index'
import fakeAPI from './fakeAPI'
import uniqid from 'uniqid'
import store_test from './store_test'

const loadLocalState = () => {
    try{
        const localState = localStorage.getItem("state");
        if(localState){
            return JSON.parse(localState);
        }
        return undefined;
    }
    catch(err){
        console.log("unable to load local state");
    }
};

const saveState = (state) => {
    try{
        localStorage.setItem("state", JSON.stringify(state));
    }
    catch{
        console.log("unable to save state");
    }
};

const localState = loadLocalState();
const store = createStore(reducers, localState);
// console.log(store.getState());
if(store.getState().board.stages.length === 0){
    fakeAPI(store);
}

//testing data
store_test(store);

store.subscribe = () => {
    saveState(store.getState());
};
export default store;