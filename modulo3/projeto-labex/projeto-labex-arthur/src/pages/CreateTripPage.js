import React from "react"
import { useNavigate } from "react-router-dom"
import styled, { ThemeConsumer } from "styled-components"
import { useState, useEffect } from "react"
import axios from "axios"
import  UseProtectApp  from "../Hooks/Hook"

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Container = styled.div`
    text-align: center;
`
const CreateTripPage = (props) =>{

    const [nome, setNome] = useState("")
    const [planeta, setPlaneta] = useState("")
    const [data, setData] = useState("")
    const [descricao, setDescricao] = useState("")
    const [duracao, setDuracao] = useState(0)
    const [viagemCriada, setViagemCriada] = useState([])

    const navigate = useNavigate()

    UseProtectApp()
       
    const criarViagem = () =>{
        const idToken = localStorage.getItem("tokenId")

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/arthurkelvim/trips"
        const headers ={
            headers:{
                "auth": idToken
            }
        }
        const body = {
            name: nome,
            planet: planeta,
            date: data,
            description: descricao,
            durationInDays: Number(duracao)
        }
        axios
        .post(url, body, headers)
        .then((res) => {
            console.log(res.data)
            alert("Viagem criada!")  
            navigate("/HAadminPage")
        })
        .catch((err) =>{
            console.log(err.response)
        }) 
        
    }

    const onChangeNome = (e) =>{
        setNome(e.target.value)
    }
    const onChangePlaneta = (e) =>{
        setPlaneta(e.target.value)
    }
    const onChangeData = (e) =>{
        setData(e.target.value)
    }
    const onChangeDescricao = (e) =>{
        setDescricao(e.target.value)
    }
    const onChangeDuracao = (e) =>{
        setDuracao(e.target.value)
    }
    
    
    return(
        <Container>
            <h1>Criar viagem</h1>
            <Form>
                <input type="name" placeholder="Nome" value={nome} onChange={onChangeNome}></input>
                <select value={planeta} onChange={onChangePlaneta}>
                    <option>Mércurio</option>
                    <option>Venus</option>
                    <option>Terra</option>
                    <option>Marte</option>
                    <option>Jupiter</option>
                    <option>Saturno</option>
                    <option>Uraon</option>
                    <option>Netuno</option>
                    <option>Plutão</option>
                </select>
                <input type="date" value={data} onChange={onChangeData} ></input>
                <input type="text" placeholder="Descrição" value={descricao} onChange={onChangeDescricao}></input>
                <input type="number" placeholder="Duração em dias" value={duracao} onChange={onChangeDuracao}></input>
            </Form>
            <button onClick={() => navigate(-1)}>Voltar</button>
            <button onClick={criarViagem}>Criar</button>
        </Container>
    )
}
export default CreateTripPage