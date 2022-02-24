import { goToFeedPage } from '../../routes/coordinator'
import { goToCadastroPage } from '../../routes/coordinator'
import { BASE_URL } from '../../constants/urls'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
//import { ThemeContext } from 'styled-components'

const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 

    const navigate = useNavigate()

    const fazerLogin = (e) =>{
        e.preventDefault()
        const body = {
            email: email,
            password: password
        }
        axios
        .post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            console.log(res)
            localStorage.setItem("token", res.data.token)
            alert("Você está logado!")
            goToFeedPage(navigate)

        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    const onChangeEmail = (e) =>{
        setEmail(e.target.value)
    } 
    const onChangePassword = (e) =>{
        setPassword(e.target.value)
    }

    return(
        <div>
            <header>
                
            </header>
            <form onSubmit={fazerLogin}>
                <input 
                type="text" 
                placeholder="Email:"
                value={email}
                onChange={onChangeEmail}
                required
                />
                <br/>
                <input 
                type="password" 
                placeholder="Senha:"
                value={password}
                onChange={onChangePassword}
                required
                />
                <button>Entrar</button>
            </form>
            <br/>
            <button onClick={() => goToCadastroPage(navigate)}>Cadastrar</button>
        </div>
    )
}

export default LoginPage
