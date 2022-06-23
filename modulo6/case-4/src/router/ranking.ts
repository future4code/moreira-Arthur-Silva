import { RankingBuss } from "../business/RankingBuss";
import { RankingData } from "../data/RankingData";
import express from "express"
import { RankingCont } from "../controller/RankingCont";

const rankingData = new RankingData()
const rankingBuss = new RankingBuss(
    rankingData
)

export const rankingRouter = express.Router()
const rankingCont = new RankingCont(rankingBuss)

rankingRouter.get("/:nameOfCompetition", (req, res) => {
    rankingCont.returnRanking(req, res)
})
