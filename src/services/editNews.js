import axios from 'axios'

const deleteNews = async (id, newData) => {

    const user = JSON.parse(localStorage.getItem('loggedUser'))

    try {
       
        const response = await axios.put(`/api/news/${id}`, newData, {
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

export default deleteNews