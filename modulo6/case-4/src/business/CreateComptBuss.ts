import { CreateComptData } from "../data/CreateComptData";
import { CreateComptDTO } from "../dto/createCompt";
import { CustomError } from "../error/CustomError";
import { CreateCompt } from "../model/createCompt";
import { GeneratedId } from "../services/GeneratedId";

export class CreateComptBuss {
    constructor(
        private generatedId:GeneratedId,
        private createComptData:CreateComptData) {}

    async createCompetition(input:CreateComptDTO){
        const {nameCompt, status} = input

        if(!nameCompt || !status){
            throw new CustomError(204, "Os campos não foram preenchidos corretamente.")
        } 
        const id = this.generatedId.newId()
        const competition:CreateCompt = {
            id,
            nameCompt,
            status
        }
        await this.createComptData.createCompt(competition)
        return "Competição criada com sucesso!"
    }
}