import { RankingData } from "../data/RankingData";
import { CustomError } from "../error/CustomError";

export class RankingBuss {
    constructor(private rankingData:RankingData) {}
    async returnRanking(nameCompetition:string){
        
        if(!nameCompetition){
            throw new CustomError(400, "Os campos não foram preenchidos corretamente");
        }

        if(nameCompetition === "100m rasos"){
            return await this.rankingData.returnRanking100M(nameCompetition)
        }
        if(nameCompetition === "Lançamento de Dardo"){
            return await this.rankingData.returnRankingJavelinThrow(nameCompetition)
        }
    }
}