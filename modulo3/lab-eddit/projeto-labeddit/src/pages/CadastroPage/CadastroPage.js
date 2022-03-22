import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { goToFeedPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import useUnProtectPage from '../../hooks/useUnProtectedPage'
//import { useUnProtectedPage } from '../../hooks/useUnProtectedPage'
 

const CadastroPage = () => {

    useUnProtectPage()

    const [nome, setNome] = useState("") 
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const navigate = useNavigate()

    const cadastrarUsuario = (e) => {
        e.preventDefault()
        
        const body = {
            username:nome,
            email: email,
            password: senha
        }
        axios
        .post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            alert(`Parabéns ${nome} você foi cadastrado com sucesso! :D`)
            localStorage.setItem("token", res.data.token)
            setNome("")
            setEmail("")
            setSenha("")
            goToFeedPage(navigate)
        })
        .catch((err) => {
            alert("Ops! ",err.response.data)
            setNome("")
            setEmail("")
            setSenha("")
            console.log(err.response.data)
        })
    }

    const onChangeNome = (e) =>{
        setNome(e.target.value)
    }
    const onChangeEmail = (e) =>{
        setEmail(e.target.value)
    }
    const onChangeSenha = (e) =>{
        setSenha(e.target.value)
    }

    return(
        <div>
            <div>
                <h1>HEADER/CADASTRO</h1>

                <form action="" onSubmit={cadastrarUsuario}>
                    <input 
                    type="text" 
                    placeholder="Nome do usuário"
                    onChange={onChangeNome}
                    value={nome}
                    required
                    />

                    <br/>
                    <input 
                    type="email" 
                    placeholder="Email" 
                    onChange={onChangeEmail}
                    value={email}
                    required
                    />
                    <br/>

                    <input 
                    type="password" 
                    placeholder="Senha" 
                    onChange={onChangeSenha}
                    value={senha}
                    pattern={"^.{8,30}"}
                    title="A senha deve conter entre 5 e 30 caracteres"
                    required
                    />
                    <br/>
                    <button>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default CadastroPage