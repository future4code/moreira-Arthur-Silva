import { useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToLoginPage } from "../routes/coordinator"

const useProtectPage = () => {
    const navigate = useNavigate()

    useLayoutEffect(() => {
    const token = localStorage.getItem("token")
    
    if(!token){
        alert("Voce não está logado!")
        goToLoginPage(navigate)
    }
    },[navigate])    
}

export default useProtectPage

//O hook useLayoutEffect é usado para: primeiro fazer a verificação(o if) e somente depois ele carrega o layout.