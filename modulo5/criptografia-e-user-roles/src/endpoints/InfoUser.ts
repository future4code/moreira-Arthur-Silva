import { Request, Response } from 'express'
import { connection } from '../connection'

export async function InfoUsers(
    email:string
):Promise<any> {
    try {
        const result = await connection("users_auth")
            .select("id", "email", "password")
            .where("email", "=", `${email}`)
        
        return result[0].email      
    } catch (error) {
        return error
    }
}