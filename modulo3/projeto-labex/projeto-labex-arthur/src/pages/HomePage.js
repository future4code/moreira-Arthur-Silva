import React from "react"
import { useNavigate } from "react-router-dom"

const HomePage = () =>{

    const navigate = useNavigate()

    const irViagens = () => {
        navigate("/ListTripPage")
    }
    const irLogin = () => {
        navigate("/LoginPage")
    }

    return(
        <div>
            <h1>HOME</h1>
            <button onClick={irViagens}>Ver viagens</button>
            <button onClick={irLogin}>ADM</button>
        </div>
    )
}
export default HomePage