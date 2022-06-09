import axios from 'axios'

const deleteImage = async (id) => {

    const user = JSON.parse(localStorage.getItem('loggedUser'))

    try {
        
        const response = await axios.delete(`/api/images/${id}`, {
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

export default deleteImage