import axios from "axios"

const addEntity = async (entityData) =>{

    const user = JSON.parse(localStorage.getItem('loggedUser'))

    try{
        const response = await axios.post("/api/associations", entityData,
            {
                headers: { 
                    Authorization: `Bearer ${user.token}`,
                    'Content-Type': 'multipart/form-data' 
                },
            },
            {
                "image": entityData.image
            },
        )
    
        return response 
    }catch(e){
        console.log(e)
        return e
    }
  
}

export default addEntity