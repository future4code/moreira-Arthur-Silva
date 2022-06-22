import { FinishCompetitionBuss } from "../business/FinishCompetitionBuss";
import { FinishCompetitionCont } from "../controller/FinishCompetitionCont";
import { FinishCompetitionData } from "../data/FinishCompetitionData";
import express from "express";

const finishComptData = new FinishCompetitionData()
const finishComptBuss = new FinishCompetitionBuss(
    finishComptData
)

export const finishComptRouter = express.Router()
const finishComptCont = new FinishCompetitionCont(finishComptBuss)

finishComptRouter.put("/competition", (req,res) => {
    finishComptCont.finishCompetition(req, res)
})