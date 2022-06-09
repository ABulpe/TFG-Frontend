import axios from "axios"

const addBusiness = async (businessData) =>{

    const user = JSON.parse(localStorage.getItem('loggedUser'))

    try{
        const response = await axios.post("/api/bussines", businessData,
            {
                headers: { 
                    Authorization: `Bearer ${user.token}`,
                    'Content-Type': 'multipart/form-data' 
                },
            },
            {
                "image": businessData.image
            },
        )
    
        return response 
    }catch(e){
        console.log(e)
        return e
    }
  
}

export default addBusiness