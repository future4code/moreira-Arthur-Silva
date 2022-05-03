import dotenv from "dotenv";
import * as jwt from 'jsonwebtoken'
import { PayLoad } from "../types/types";


dotenv.config();

export class Authenticator {
    generateToken(data: PayLoad){
        const token = jwt.sign(
            data,
            process.env.JWT_KEY as string,
            {
                expiresIn:"24h"
            }
        )
        return token
    }
    verifyToken(token:string){
        try {
            const tokenData = jwt.verify(
                token,
                process.env.JWT_KEY as string
            ) as jwt.JwtPayload

            return tokenData.id
        } catch (error) {
            return("Não foi encontrado um token");
        }
    }
}