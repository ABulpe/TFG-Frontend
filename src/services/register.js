import axios from "axios"

const registerService = async (inputData) =>{
    try{
        const response = await axios.post("/api/users",inputData)
    
        return response 
    }catch(e){
        console.log(e)
    }
  
}

export default registerService