import React from "react"
import { useNavigate } from "react-router-dom"

const CreateTripPage = () =>{

    const navigate = useNavigate()

    const criarViagem = () =>{
        alert("Viagem criada!")
        navigate("/DetailPage")
    }
    
    return(
        <div>
            <h1>Criar viagem</h1>
            <button onClick={() => navigate(-1)}>Voltar</button>
            <button onClick={criarViagem}>Criar</button>
        </div>
    )
}
export default CreateTripPage