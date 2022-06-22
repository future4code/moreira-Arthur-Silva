import { NewResultBuss } from "../business/NewResultBuss";
import { NewResultCont } from "../controller/NewResultCont";
import { NewResultData } from "../data/NewResultData";
import { GeneratedId } from "../services/GeneratedId";
import express from "express"

const newResultData = new NewResultData()
const generatedId  = new GeneratedId()
const newResultBuss = new NewResultBuss(
    newResultData,
    generatedId
);

export const newResultRouter = express.Router()

const newResultCont = new NewResultCont(newResultBuss)

newResultRouter.post("/result", (req, res) => {
    newResultCont.newResult(req,res)
})