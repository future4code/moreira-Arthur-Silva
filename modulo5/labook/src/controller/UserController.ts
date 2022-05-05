import { Response, Request } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserData } from "../data/UserData";
import { Authenticator } from "../services/GenerateToken";
import { LoginDTO, SignUpDTO } from "../types/types";
/*
    CONTROLLER: RECEBE REQUISIÇÃO E ENTREGA RESPOSTA
*/ 
export class UserController {

    async signup(
        req:Request,
        res:Response
    ){  
        try {
            const {name, email, password} = req.body
            const input:SignUpDTO = {
                name,
                email,
                password
            }
            const userBusiness = new UserBusiness()
            const tokenSignUp = await userBusiness.signUp(input)//o resultado final esta aqui!
            
            res.status(200).send({token:tokenSignUp})
        } catch (error:any) {
            res.status(400).send({message:error.message})
        }
    }
    async loginController(
        req:Request,
        res:Response
    ) {
        try {
            const {email, password} = req.body

            const inputLogin:LoginDTO = {
                email,
                password
            }
            
            const tokenUser = await new UserBusiness().loginBusiness(inputLogin)

            res.status(200).send({message:"Usuario logado", token:tokenUser})
        } catch (error:any) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
}