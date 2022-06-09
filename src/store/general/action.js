

export const actionsTypesGeneral = {
    SET_CURRENT_PATH: "SET_CURRENT_PATH",
}

export const setCurrentPath = (dispatch, currentPath) => {
    const aux = {
        type: actionsTypesGeneral.SET_CURRENT_PATH,
        data: currentPath
    }
    dispatch(aux)
}

