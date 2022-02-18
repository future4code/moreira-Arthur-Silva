import axios from "axios"
import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const LoginPage = (props) =>{

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    
    const navigate = useNavigate()
    
    const [token, setToken] = useState("")

    const pointLogin = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/arthurkelvim/login"
        /* const headers = {
            headers:{
                "Content-Type": "application/json"
            }
        } */
        const body = {
            email: email,
            password: senha
        }
        axios
        .post(url, body)
        .then((response) => {
            setToken(localStorage.setItem("tokenId",response.data.token))
            alert("vc está logado")
            navigate("/HAadminPage")
        })
        .catch((err) => {
            console.log("seu erro:",err.response)
        })
        console.log("dados",body)
    }
    /* const entrar = () =>{
        navigate("/HAadminPage")
        
    } */
    const onChangeEmail = (e) =>{
        setEmail(e.target.value)
    }
    const onChangeSenha = (e) =>{
        setSenha(e.target.value)
    }

    //console.log(email)
    //console.log(senha)
    return(
        <div>
            <h1>Página de login</h1>
            <div>
                <input value={email} onChange={onChangeEmail} type="email" placeholder="Email"/>
                <input value={senha} onChange={onChangeSenha} type="password" placeholder="Senha"/>
            </div>
            <button onClick={() => navigate(-1)}>Voltar</button>
            {/* <button onClick={entrar}>Entrar</button> */}
            <button onClick={pointLogin}>Enviar</button>
        </div>
    )
}
export default LoginPage
