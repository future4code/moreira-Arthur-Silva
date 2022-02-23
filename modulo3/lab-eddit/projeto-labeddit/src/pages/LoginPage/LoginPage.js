
import ButtonAppBar from '../../components/Botao'

const LoginPage = () => {

    return(
        <div>
            <header>
                <h1>HEADER/LOGIN</h1>
            </header>
            <form>
                <input type="text" placeholder="Email:"/>
                <input type="text" placeholder="Senha:" />
                <button>Entrar</button>
            </form>
            <br/>
            <button>Cadastrar</button>
            <ButtonAppBar />
        </div>
    )
}

export default LoginPage