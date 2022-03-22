import axios from "axios"
import useProtectPage from "../../hooks/useProtectPage"
import Post from "../../components/Post"
import CircularProgress from '@mui/material/CircularProgress'
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { BASE_URL, token } from "../../constants/urls"
import { useState } from "react"
import { goToPostPage } from "../../routes/coordinator"


const FeedPage = () => {
    
    useProtectPage()

    const [titulo, setTitulo] = useState("Post")
    const [post, setPost] = useState("")
    const [bodyPost, setbodyPost] = useState([])
    const [carregando, setCarregando] = useState(false)

    const navigate = useNavigate()
    
    const createPost = (e) => {
        e.preventDefault()
        const body = {
            title: titulo,
	        body: post
        }
        const headers = {
            headers: { Authorization: token }
        }
        axios
        .post(`${BASE_URL}/posts`, body, headers )
        .then((res) => {
            alert("post criado!")
            setPost("")
        })
        .catch((err) => {
            console.log(err.response)
        })
    }
    
    const pegarPosts = () => {

        setCarregando(true)
        const headers = {
            headers: { Authorization: token }
        }
        axios
        .get(`${BASE_URL}/posts`, headers)
        .then((res) => {
            setCarregando(false)
            setbodyPost(res.data)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }
    
    const pagDetalhadaDoPost = (id) => {
        goToPostPage(navigate, id)
        
    }
    
    useEffect(() => {
        pegarPosts()
    },[])

    /* const onChangeTitulo = (e) =>{
        setTitulo(e.target.value)
    } */
    const onChangePost = (e) =>{
        setPost(e.target.value)
    }
    return(
        <div>
            <h1>Faça um post aqui!</h1>
            <form onSubmit={createPost}>
                {/* <input 
                type="text" 
                placeholder="Titulo"
                onChange={onChangeTitulo}
                value={titulo}
                required
                /> */}

                <input 
                type="text"
                placeholder="Poste algo!"
                onChange={onChangePost}
                value={post}
                required
                 />
                <button>Postar</button>
            </form>
            {carregando ? <CircularProgress color="secondary"/> : bodyPost.map((post) => {
                return (
                    <Post
                    key={post.id}
                    nomeDoUsuario={post.username}
                    comentarioDousuario={post.body}
                    funcaoId={post.id}
                    teste={() => {pagDetalhadaDoPost(post.id)}}
                    />
                )
            })}
        </div>
    )
}

export default FeedPage