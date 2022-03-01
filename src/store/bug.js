// Action Types

const add = "add";
const remove = "delete";
const resolve_action = "resolve"


// Action Creator 

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


// reducer 

export default (state={},action)=>{
    switch(action.type){

        case "add":
            return {...state,bugs:[...(state.bugs||[]),{bug_id:action.payload.bug_id,bug_description:action.payload.bug_description,resolve:action.payload.resolve}]}
        case "delete":
            return {
                ...state,bugs:(state.bugs||[]).filter((element)=>{return element.bug_id!==action.payload.bug_id})
            }
        case "resolve":
            return {...state,bugs:(state.bugs||[]).map((element)=>{
                if(element.bug_id==action.payload.bug_id)
                return {
                    ...element,
                    resolve:action.payload.bug_resolve
                }
                else
                return element
            })}
        default:
            return state
        }

}


