import React, { useState ,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import UseProtectApp from "../Hooks/Hook"


const HAdminPage = (props) =>{

    const navigate = useNavigate()
    const [viagens, setViagens] = useState([])

    UseProtectApp()

    const criarViagem = () =>{
        navigate("/CreateTripPage")
    }
    const logout = () =>{
        navigate("/loginPage")
        localStorage.removeItem("tokenId")
    }
    const mostraViagens = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/arthurkelvim/trips"
        axios
        .get(url)
        .then((res) => {
            setViagens(res.data.trips)
        })
        .catch((err) => {
            console.log("err")
        })
    }

    useEffect(() =>{
        mostraViagens()
    },[])
 
    return(
        <div>
            <h1>Area do adm</h1>
            <button onClick={() => navigate(-1)}>Voltar</button>
            <button onClick={criarViagem}>Criar Viagem</button>
            <button onClick={logout}>Logout</button>
            <hr/>
            {viagens.map((viagem) => {
                return <button key={viagem.id}>{viagem.planet}</button>
            })}
        </div>
    )
}
export default HAdminPage
