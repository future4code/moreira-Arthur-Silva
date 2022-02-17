import React from "react"
import { useNavigate } from "react-router-dom"

const HAdminPage = () =>{

    const navigate = useNavigate()

    const criarViagem = () =>{
        navigate("/CreateTripPage")
    }
    const logout = () =>{
        navigate("/")
    }

    return(
        <div>
            <h1>Area do adm</h1>
            <button onClick={() => navigate(-1)}>Voltar</button>
            <button onClick={criarViagem}>Criar Viagem</button>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
export default HAdminPage
