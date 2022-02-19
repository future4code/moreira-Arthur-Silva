import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import CardViagem from "../components/CardViagem"
import styled from "styled-components"

const H1 = styled.h1`
    text-align: center;
    margin: 15px 0px;
    color: #bdc667;
`
const Content = styled.div`
    display: flex;
    justify-content: center;
`
const Button1 = styled.button`
    height: 35px;
    width: 100px;
    border: 3px solid #bdc667;
    background-color: #77966d;
    box-shadow: 1px 2px 15px #77966d;
    font-weight: bold;
    margin: 5px;
`
const Button2 = styled.button`
    height: 35px;
    width: 100px;
    border: 3px solid #bdc667;
    background-color: #77966d;
    box-shadow: 1px 2px 15px #77966d;
    font-weight: bold;
    margin: 5px;
`
const ListTripPage = () =>{

    const navigate = useNavigate()
    const [todasViagens, setTodasViagens] = useState([])

    const goToEscreva = () =>{
        navigate("/FormApPage")
    }

    const retornaViagens = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/arthurkelvim/trips"
        axios
        .get(url)
        .then((res) => {
            console.log(res.data)
            setTodasViagens(res.data.trips)
            
        })
        .catch((err) => {
            console.log("err")
        })
    }
    useEffect(() => {
        retornaViagens()
    }, [])

    return(
        <div>
            <H1>Lista de Viagens</H1>
            <Content>
                <Button1 onClick={() => navigate(-1)}>Voltar</Button1>
                <Button2 onClick={goToEscreva}>Inscreve-se</Button2>
            </Content>
            {todasViagens.map((viagens) => {
                return(
                    <CardViagem 
                        key={viagens.id}
                        descricao={viagens.description}
                        planeta={viagens.planet}
                        duracao={viagens.durationInDays}
                        data={viagens.date}
                        id={viagens.id}
                    />
                )
            })}
        </div>
    )
}
export default ListTripPage
