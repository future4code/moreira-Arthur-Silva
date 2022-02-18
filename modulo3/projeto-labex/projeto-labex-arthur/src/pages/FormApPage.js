import React from "react"
import { useNavigate } from "react-router-dom"

const FormApPage = () =>{

    const navigate = useNavigate()

    const enviar = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/arthurkelvim/trips/NoIFVcOiSgTKTIPVZwXS/apply"
        const headers = {

        }
        alert("Parabens inscricao feita!")
        navigate("/")
    }
    return(
        <div>
            <h1>Increva-se para uma viagem</h1>
            <form action="">

            </form>
            <button onClick={() => navigate(-1)}>Voltar</button>
            <button onClick={enviar}>Enviar</button>
        </div>
    )
}
export default FormApPage
