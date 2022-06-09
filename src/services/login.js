import axios from "axios"

const loginService = async (credentials) => {
    try {
        const {data} = await axios.post('/api/login',{...credentials})
        window.localStorage.setItem(
            "loggedUser", JSON.stringify(data)                  
        )
                   
        return data
    }
    catch(error) {
        return 'Dirección de correo y/o contraseña incorrectos.'
    }
}

export default loginService