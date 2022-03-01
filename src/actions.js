import {add,remove,resolve_action} from "./actionTypes"
export const bugAdded = (id,description,resolve)=>{
    return {type:add,
    payload:{   
        bug_id:id,
        bug_description:description,
        resolve:resolve

    }}
}

export const bugRemoved= (id)=>{
    return {type:remove,
    payload:{   
        bug_id:id

    }}
}

export const bugResolve = (id,resolve)=>{
    return {
        type:resolve_action,
        payload:{
            bug_id:id,
            bug_resolve:resolve
        }
    }
}
