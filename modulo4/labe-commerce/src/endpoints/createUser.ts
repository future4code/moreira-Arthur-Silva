import {Request, Response} from 'express'
import { connection } from "../connection";
import { user } from '../types/type';

export const createUser = async (req:Request, res:Response):Promise<void> => {
    try {
        const {name, email, password} = req.body
        const user:user = {
            id: Date.now().toString(),
            name,
            email,
            password
        }
        await connection("labecommerce_users").insert(user)
        res.status(201).send("Created")
            
    } catch (error:any) {
        res.status(500).send(error.message)
    }
    res.send("Sucess")
}