import React, { useState ,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import UseProtectApp from "../Hooks/Hook"
import styled from "styled-components"

const FigButton = {
    border: "3px solid #bdc667",
    backgroundColor:"#77966d",
    boxShadow: "1px 2px 15px #77966d",
    fontWeight: "bold",
    margin: "5px",
    padding: "5px"
    
}
const H1 = styled.h1`
    text-align: center;
    margin: 15px 0px;
    color:#77966d;
`
const Content = styled.div`
    display: flex;
    justify-content: center ;
`

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
            <H1>Area do adm</H1>
            <Content>
                <button style={FigButton} onClick={() => navigate(-1)}>Voltar</button>
                <button style={FigButton} onClick={criarViagem}>Criar Viagem</button>
                <button style={FigButton} onClick={logout}>Logout</button>
            </Content>
            <hr/>
            {viagens.map((viagem) => {
                return (
                    <div>
                        <button key={viagem.id}>{viagem.planet}</button>
                    </div>
                ) 
            })}
        </div>
    )
}
export default HAdminPage
