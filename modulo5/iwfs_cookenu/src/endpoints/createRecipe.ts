import { Request, Response } from 'express'
import { connection } from '../connection'
import { returnData } from '../services/Data';
import { generateId } from '../services/GenerateID';
import { Authenticator } from '../services/GenerateToken';
import { Recipe } from '../types';

export async function createRecipe(
    req:Request,
    res:Response
) {
    let errorCode = 500
    try {
        const {title, description} = req.body
        const token = req.headers.authorization as string
        const tokenAuth = new Authenticator().verifyToken(token)

        if(!tokenAuth || !title || !description){
            errorCode = 400
            throw new Error("Os campos nao foram preenchidos corretamente");
        }
        
        const newRecipe:Recipe = {
            id: generateId(),
            title,
            description,
            createDate:returnData()
        }
        console.log(newRecipe)
        await 
            connection("recipes")
                .insert(newRecipe)

        res.status(201).send("Sua receita foi criada com sucesso!")
    } catch (error:any) {
        res.status(errorCode).send({error:error.message})
    }
}