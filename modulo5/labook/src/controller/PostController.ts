import {Request, Response } from 'express'
import { InputPostDTO, TokenDTO } from "../types/types";
import { PostBusiness } from "../business/PostBusiness";

export class PostController {
    public codeError = 400
    async newPost(
        req:Request,
        res:Response
    ) {
        try {
            const { photo, description, type } = req.body
            const token = req.headers.authorization 
            
            const newPost:InputPostDTO = {
                photo,
                description,
                type
            }
            await new PostBusiness().newPost(newPost, token)
            
            res.status(201).send("Post criado")
        } catch (error:any) {
            res.status(this.codeError).send(error.sqlMessage || error.message)
        }
    }
    async searchPostById(
        req:Request,
        res:Response
    ) {
        try {
            const id:string = req.params.id
            //console.log("id",id)
            const result = await new PostBusiness().searchPostById(id)

            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
}