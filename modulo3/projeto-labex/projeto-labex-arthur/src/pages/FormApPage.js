import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

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
    margin: "5px"
}


const H1 = styled.h1`
    font-size: 25px;
    text-align: center;
    margin: 30px 0px;
    color:#77966d;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const FormApPage = () =>{

    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [applicationText, setApplicationText] = useState("")
    const [profession, setProfession] = useState("")
    const [country, setCountry] = useState("")

    const enviar = (event) => {
        event.preventDefault()
        
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/arthurkelvim/trips/NoIFVcOiSgTKTIPVZwXS/apply"
        const headers = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const body = {
            name: name,
            age: Number(age),
            applicationText: applicationText,
            profession: profession,
            country: country
        }
        axios
        .post(url, body, headers)
        .then((res) => {
            alert("Parabéns, inscrição realizada com sucesso!")
            console.log("vejamos:",res)
        })
        .catch((err) => {
            console.log("deu erro jovem",err.response)
        })
    }

    const onChangeNome = (e) => {
        setName(e.target.value)
    }
    const onChangeIdade = (e) => {
        setAge(e.target.value)
    }
    const onChangeTexto = (e) => {
        setApplicationText(e.target.value)
    }
    const onChangeProfissao = (e) => {
        setProfession(e.target.value)
    }
    const onChangePais = (e) => {
        setCountry(e.target.value)
    }
    
    return(
        <div>
            <H1>Increva-se para uma viagem</H1>
            <Form onSubmit={enviar}>
                <input style={FigInput} value={name} onChange={onChangeNome} type="text" placeholder="Nome"/>
                <input style={FigInput} value={age} onChange={onChangeIdade} type="number" placeholder="Idade"/>
                <input style={FigInput} value={applicationText} onChange={onChangeTexto} type="text" placeholder="Porque deseja ir"/>
                <input style={FigInput} value={profession} onChange={onChangeProfissao} type="text" placeholder="Profissão"/>
                <input style={FigInput} value={country} onChange={onChangePais} type="text" placeholder="País"/>
                <button style={FigButton}>Enviar</button>
            </Form>
            <button style={FigButton} onClick={() => navigate(-1)}>Voltar</button>
        </div>
    )
}
export default FormApPage
