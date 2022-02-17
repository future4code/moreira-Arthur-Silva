import React from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const ListTripPage = () =>{

    const navigate = useNavigate()

    const goToEscreva = () =>{
        navigate("/FormApPage")
    }

    const retornaViagens = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips"
        axios
        .get(url)
        .then((res) => {
            console.log("aqui está sua resposta:", res.data.trips)
        })
        .catch((err) => {
            console.log("err")
        })
    }

    return(
        <div>
            <h1>Lista de Viagens</h1>
            <button onClick={() => navigate(-1)}>Voltar</button>
            <button onClick={goToEscreva}>Inscreve-se</button>
            {retornaViagens()}
        </div>
    )
}
export default ListTripPage
