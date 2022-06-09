import { actionsTypesGeneral } from "./action"


const initialStateGeneral = {
    currentPath: "/",
}

const setCurrentPath = (state, data) => {
    const aux = {...state}
    aux.currentPath = data
    return aux
}

export const reducerGeneral = (state, action) => {
    let newState = state
    switch (action.type) {
        case actionsTypesGeneral.SET_CURRENT_PATH:
            newState = setCurrentPath(state, action.data)
            break;
        default:
            break;
    }
    return newState;
}