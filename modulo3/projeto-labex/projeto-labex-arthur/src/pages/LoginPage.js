import axios from "axios"
import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`
const H1 = styled.h1`
    margin: 15px 0px;
    color: #77966d;
`
const FigInput = {
    height:"30px",
    width:"200px",
    border: "3px solid #bdc667",
    margin: "5px 0px",
    borderRadius: "10px",
    padding:"5px"
}
const FigButton = {
    height: "35px",
    width: "100px",
    border: "3px solid #bdc667",
    backgroundColor: "#77966d",
    boxShadow: "1px 2px 15px #77966d",
    fontWeight: "bold",
    margin: "15px"
}
const FigButtonBack = {
    height: "35px",
    width: "100px",
    border: "3px solid #bdc667",
    backgroundColor: "#77966d",
    boxShadow: "1px 2px 15px #77966d",
    fontWeight: "bold"
}
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

` 
const LoginPage = (props) =>{

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    
    const navigate = useNavigate()
    const [token, setToken] = useState("")

    const pointLogin = (event) => {
        event.preventDefault()

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/arthurkelvim/login"
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
    
    const onChangeEmail = (e) =>{
        setEmail(e.target.value)
    }
    const onChangeSenha = (e) =>{
        setSenha(e.target.value)
    }

    
    return(
        <Container>
            <H1>Página de login</H1>
            <Form onSubmit={pointLogin}>

                <input 
                style={FigInput}
                value={email}
                onChange={onChangeEmail} 
                type="email" 
                placeholder="Email" 
                required
                />
                
                <input 
                style={FigInput}
                value={senha} 
                onChange={onChangeSenha} 
                type="password" 
                placeholder="Senha" 
                pattern={"^.{3,35}"} 
                title={"Sua senha deve ter entre 1 e até 35 caracteres"}
                required
                />
                
                <button style={FigButton}>Enviar</button>
                
            </Form>
            <button style={FigButtonBack} onClick={() => navigate("/")}>Voltar</button>
        </Container>
    )
}
export default LoginPage
