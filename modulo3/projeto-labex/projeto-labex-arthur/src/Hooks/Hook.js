import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const UseProtectApp = () => {
    
const navigate = useNavigate()
  useEffect(() => {
      
    const token = localStorage.getItem("tokenId")
    
  
    if(token === null){
        alert("Você não está logado!! :(")
        navigate("/LoginPage")
    }
   
  }, [])
}
export default UseProtectApp