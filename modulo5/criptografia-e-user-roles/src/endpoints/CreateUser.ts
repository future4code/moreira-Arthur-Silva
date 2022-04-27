import {Response, Request} from 'express'
import { connection } from '../connection'
import { newId } from '../services/GeneratedID'

export async function createUser(
    req:Request,
    res:Response
) {
    try {
        const email = req.body.email
        const password = req.body.password

        const user:{id:string ,email:string, password:string} = {
            id:newId(),
            email,
            password
        }

        await connection("users_auth")
                .insert(user)

        res.status(201).send("Parabéns, o usuario foi cadastrado!")        
    } catch (error) {
        res.status(400).send(error)
    }     
} 