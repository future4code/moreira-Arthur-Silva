import React from "react"
import { useNavigate } from "react-router-dom"

const FormApPage = () =>{

    const navigate = useNavigate()

    const enviar = () => {
        alert("Parabens inscricao feita!")
        navigate("/")
    }
    return(
        <div>
            <h1>Formulario</h1>
            <button onClick={() => navigate(-1)}>Voltar</button>
            <button onClick={enviar}>Enviar</button>
        </div>
    )
}
export default FormApPage
