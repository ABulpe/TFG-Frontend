import axios from 'axios'

const deleteEntity = async (id) => {

    const user = JSON.parse(localStorage.getItem('loggedUser'))

    try {
        
        const response = await axios.delete(`/api/associations/${id}`, {
            headers: { 
                Authorization: `Bearer ${user.token}`
            },
        })

        return response
    }
    catch (error) {
        console.log(error)
    }
}

export default deleteEntity