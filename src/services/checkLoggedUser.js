
const checkLoggedUser = () => {

    const loggedUserJSON = window.localStorage.getItem("loggedUser")
    let user = null
    
    if (loggedUserJSON) {
        user = JSON.parse(loggedUserJSON)
    }

    return user

}

export default checkLoggedUser