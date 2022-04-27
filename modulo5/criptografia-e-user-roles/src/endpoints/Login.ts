import { Request, Response } from 'express'
import { connection } from '../connection'
import { InfoUsers } from './InfoUser'

export async function Login(
    req:Request,
    res:Response
) {
    try {
        const userData = {
            email:req.body.email,
            password:req.body.password
        }

        if(userData.email != InfoUsers(userData.email)){

        }
    } catch (error) {
        
    }
}