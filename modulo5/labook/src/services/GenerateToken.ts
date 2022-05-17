import * as jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { AuthenticatorData } from '../types/types';

dotenv.config();

export class Authenticator {
    generateToken(data:AuthenticatorData){
        const token = jwt.sign(
            data,
            process.env.JWT_KEY as string,
            {
                expiresIn:"24h"
            }
        )
        return token
    }
    verifyToken(token:string):AuthenticatorData{
        try {
            const verify = jwt.verify(
                token,
                process.env.JWT_KEY as string
            ) as AuthenticatorData
            
            return verify
        } catch (error) {
            throw new Error("Não foi encontrado um token");
        }
    }
}