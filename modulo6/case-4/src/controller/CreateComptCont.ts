import { Request, Response } from "express"
import { CreateComptBuss } from "../business/CreateComptBuss"
import { CreateComptDTO } from "../dto/createCompt"
import { CustomError } from "../error/CustomError"

export class CreateComptCont {
    constructor(private createComptBuss: CreateComptBuss) {}
    async createComptCont(
        req:Request,
        res:Response
    ){
        try {
            const inputCreateComptDTO:CreateComptDTO = {
                nameCompt: req.body.nameOfCompetition,
                status: req.body.status
            }
            const createCompetition = this.createComptBuss.createCompetition(inputCreateComptDTO)
            res.status(201).send(createCompetition)
        } catch (error:any) {
            if(error instanceof CustomError){
                res.status(error.statusCode).send(error.message)
            }else if(error){
                res.status(400).send(error.message)
            }else {
                res.status(500).send("Erro interno no servidor")
            }
        }
    }
}