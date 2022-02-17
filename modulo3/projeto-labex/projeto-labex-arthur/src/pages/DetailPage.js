import React from "react"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"


const DetailPage = () =>{

    const navigate = useNavigate()
    //const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/:id"

    const voltarHome = () =>{
        navigate("/")
    }

    /* useEffect(() => {
        axios
        .get()
    }, []) */
    
    return(
        <div>
            <h1>Pagina de Detalhe</h1>
            <button onClick={() => navigate(-1)}>Voltar</button>
            <button onClick={voltarHome}>Voltar Home</button>
        </div>
    )
}
export default DetailPage