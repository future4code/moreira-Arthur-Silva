import { connection } from "../connection"
import { Request, Response } from 'express'

export const getUsers = async (req:Request, res:Response):Promise<void> => {
    try {
        const result = await connection("labecommerce_users")
            .select()

        res.status(200).send(result)    
    } catch (error:any) {
        res.status(400).send({message:error.message})
    }
}