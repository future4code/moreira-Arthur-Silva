import app from "./app"
import { cepRequest } from "./endpoints/cepRequest"
import createUser from './endpoints/createUser'


app.post('https://viacep.com.br/ws/:cep/json/', cepRequest)