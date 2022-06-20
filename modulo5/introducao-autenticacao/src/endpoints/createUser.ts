import {Response, Request} from 'express'
import { connection } from '../connection'
import { newId } from '../services/generatedId'
import { User_type } from '../types'


export async function createUser(
    req:Request,
    res:Response
) {
    try {
        const {email, password} = req.body

        const user:User_type = {
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