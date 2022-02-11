import axios from "axios";
import { useEffect, useState } from "react";

const MatchScreen = (props) =>{

    const [person, setPerson] = useState([])

    const getMatches = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/arthur/matches"
        const headers = {"Content-Type": "application/json"} 
        axios
        .get(url, headers)
        .then((res) => {
            console.log("esta aqui")
            setPerson(res.data.matches)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getMatches()
    },[])

    return(
        <div>
            <div>
                {person.map((pessoas) => {
                    return <li key={pessoas.id}>{pessoas.name}</li>
                })}
                <p>☺ <button onClick={props.botaoirHome}>back home</button></p>
                <h1>Seus matches estão aqui!</h1>
            </div>
        </div>
    )
}
export default MatchScreen