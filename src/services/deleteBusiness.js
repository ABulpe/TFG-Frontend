import axios from 'axios'

const deleteBusiness = async (id) => {

    const user = JSON.parse(localStorage.getItem('loggedUser'))

    try {
        
        const response = await axios.delete(`/api/bussines/${id}`, {
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

export default deleteBusiness