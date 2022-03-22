import axios from "axios"
import { useNavigate } from "react-router-dom"
import { goToFeedPage } from "../../routes/coordinator"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/urls"



const PostPage = () => {
    const navigate = useNavigate()
    const params = useParams()
    const token = localStorage.getItem("token")
    const [comentarios, setComentarios] = useState([])
    //console.log(params)

    const pegaComentariosPorId = () =>{
        const headers = {
            headers: {
                Authorization: token
            }
        }
        axios
        .get(`${BASE_URL}/posts/${params.id}/comments`, headers)
        .then((res) => {
            //console.log(res.data)
            setComentarios(res.data)
            //console.log("aqui seus comentarios",comentarios)
            //console.log(comentarios.length)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return(
        <div>
            <h1>Página do Post selecionado</h1>
            <button onClick={pegaComentariosPorId}>comentarios do post</button>
            <button onClick={() => {goToFeedPage(navigate)}}>Voltar para feeds</button>
            {comentarios.map((comentarios) => {
                return (
                    <li key={comentarios.id}>{comentarios.body}</li>
                )
            })}
        </div>
    )
}

export default PostPage