import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToFeedPage } from "../routes/coordinator"

const useUnProtectPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
    const token = localStorage.getItem("token")
    
    if(token){
        goToFeedPage(navigate)
    }
    },[navigate])    
}

export default useUnProtectPage

//Este hook fica responsável por: quando o usúario tiver o token, ele nao acessar a pagina de login