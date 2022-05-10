import { Request, Response } from 'express'
import { CreateBusiness } from '../business/CreateUser_Business'
import { UserDataBase } from '../data/UserDataBase'
import { IdGenerator } from '../services/GenerateId'
import { Authenticator } from '../services/GenerateToken'

/*
    BREVE RESUMO: 
        AQUI IRÁ A RESPOSTAS DAS REQUISIÇÕES.
*/ 
const createBusiness = new CreateBusiness()

export class CreateController {
    createUser = async (
        req:Request,
        res:Response 
    ) => {
        try {
            const {name, email, password, role} = req.body 

            const id:string = new IdGenerator().GenerateId()

            createBusiness.createUser(id, name, email, password, role)

            const token = new Authenticator().generateToken({id:id, role:role})

            res.status(201).send({token: token})

        } catch (error:any) {
            res.status(500).send({error:error.message})
        }
    }
    async LoginController(
        req:Request,
        res:Response 
    ) {
        try {
            const {email, password} = req.body

            createBusiness.LoginBusiness(email, password)

            const infoUserForToken = await new UserDataBase().getUserByEmail(email)

            const token = new Authenticator().generateToken(infoUserForToken)

            res.status(201).send({"token":token})
        } catch (error) {
            res.status(500).send("os dados nao coincidem no nosso banco de dados!")
        }
    }
    async GetAllUsersController(
        req:Request,
        res:Response
    ) {
        try {
            const token = req.body.token

            createBusiness.getAllUsersBusiness(token)
            //console.log(token)
            const result = await new UserDataBase().getAllUsers()

            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
}



