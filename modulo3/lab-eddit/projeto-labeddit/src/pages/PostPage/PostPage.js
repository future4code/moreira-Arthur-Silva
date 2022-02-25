import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/urls"



const PostPage = () => {
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
            console.log(res)
            //setComentarios(res.data[0].body)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return(
        <div>
            <h1>Página de Posts</h1>
            <p>{comentarios}</p>
            <button onClick={pegaComentariosPorId}>clique pra ver comentarios</button>
            
        </div>
    )
}

export default PostPage