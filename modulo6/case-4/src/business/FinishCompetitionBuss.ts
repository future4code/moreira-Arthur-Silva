import { FinishCompetitionData } from "../data/FinishCompetitionData";
import { FCompetDTO } from "../dto/finishCompt";
import { CustomError } from "../error/CustomError";

export class FinishCompetitionBuss {
    constructor(private FinishCompetData:FinishCompetitionData) {}
    async finishCompetition(input:FCompetDTO) {
        const {competicao, status} = input
        if(!competicao || !status){
            throw new CustomError(400,"Os dados não foram preenchidos corretamente.");
        }
        await this.FinishCompetData.finishCompetition(competicao, status)
       
        return {message:"A competição foi finalizada."}
    }
}