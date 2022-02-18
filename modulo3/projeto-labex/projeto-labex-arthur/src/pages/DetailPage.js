import React from "react"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import  UseProtectApp from '../Hooks/Hook'


const DetailPage = (props) =>{

    const navigate = useNavigate()
    
    UseProtectApp()

    useEffect(() => {
        
        axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/arthurkelvim/trip/0950yKza7NLdQlHnVR6T", {
            headers: {
                auth: localStorage.getItem("tokenId")
            }
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.response)
        })
    },[])

    const voltarHome = () =>{
        navigate("/")
    }

    
    
    return(
        <div>
            <h1>Pagina de Detalhe</h1>
            <button onClick={() => navigate(-1)}>Voltar</button>
            <button onClick={voltarHome}>Voltar Home</button>
        </div>
    )
}
export default DetailPage