import { Response, Request } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { SignUpDTO } from "../types/types";
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
            const token = await userBusiness.signUp(input)//o resultado final esta aqui!
            console.log(token)
            res.status(200).send({message:"Sucess", token:token})
        } catch (error:any) {
            res.status(400).send({message:error.message})
        }
    }
}