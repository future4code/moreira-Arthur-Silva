import { Request, Response } from 'express'
import { connection } from '../connection'
import { newId } from '../services/GeneratedID'
import { Authorization } from '../services/NewToken'
import { User_type, AuthenticatorData } from '../types'


export async function RegisterUser(
    req:Request,
    res:Response
) {
    try {
        const { email, password } = req.body
        const tokenId:AuthenticatorData = {
            id:newId()
        }

        const user:User_type = {
            id:tokenId.id,
            email,
            password
        }
        await connection("users_auth")
            .insert(user) 
           
        const tokenRegister = new Authorization().GenerateToken(tokenId)    
        res.status(201).send({"token":tokenRegister})    
    } catch (error:any) {
        res.status(400).send({error:error.message})
    }
}