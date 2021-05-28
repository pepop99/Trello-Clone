import { createStore } from 'redux'
import reducers from './reducers/index'
import fakeAPI from './fakeAPI'
import store_test from './store_test'
import throttle from "lodash.throttle";

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

const saveState = async (state) => {
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
    saveState(store.getState());
}

//testing data
store_test(store);

// store.subscribe = () => {
//     saveState(store.getState());
// };
store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);
export default store;