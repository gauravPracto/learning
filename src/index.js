import store from "./store"
import {bugAdded,bugRemoved, bugResolve} from "./actions"
const unSubscribe = store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(bugAdded(1,"this is first bug",false));
store.dispatch(bugResolve(1,true))
store.dispatch(bugRemoved(1));

console.log(store.getState())

unSubscribe()