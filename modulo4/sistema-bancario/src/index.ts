import express, {Express, Request, Response} from 'express'
import cors from "cors"
import { AddressInfo } from "net";
import { TypeUsuario, Transacoes } from './type';
import { users } from './data'
 
const app:Express = express()
let codeError = 400

app.use(express.json());
app.use(cors());
/* -----------------------------------------------------------------------------------------------------*/
//ENDPOINT QUE MOSTRA USUARIOS
app.get("/users", (req:Request, res:Response) => {
    
    res.status(200).send(users)
})

//ENDPOIT DE CRIAR USUARIO
app.post("/user", (req:Request, res:Response) => {
    
    const {nome ,cpf, dataNascimento, extrato, saldo} = req.body
    
    
    try {
        let novoUsuario = {
            nome,
            cpf,
            dataNascimento, 
            extrato: [],
            saldo: 0
        }
        let usuariosAtt = [...users, novoUsuario]
    
        res.status(201).send(usuariosAtt)
    } catch (error:any) {
        res.status(codeError).send({message:error.message})
    }

})





/*
nome: "Arthur kelvim",
        cpf:11144455577,
        dataNascimento: "27/05/1998",
        saldo: 0,
        extrato:[]
*/

/* -----------------------------------------------------------------------------------------------------*/

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
