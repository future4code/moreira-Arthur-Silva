import { goToLoginPage } from '../../routes/coordinator'
import { useNavigate} from 'react-router-dom'

const ErrorPage = () => {

    const navigate = useNavigate()
    
    return(
        <div>
            <h1>404 Not Found</h1>
            <button onClick={() => goToLoginPage(navigate)}>ir para login</button>
        </div>
    )
}

export default ErrorPage