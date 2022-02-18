import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import CardViagem from "../components/CardViagem"

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
            <h1>Lista de Viagens</h1>
            <button onClick={() => navigate(-1)}>Voltar</button>
            <button onClick={goToEscreva}>Inscreve-se</button>
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
