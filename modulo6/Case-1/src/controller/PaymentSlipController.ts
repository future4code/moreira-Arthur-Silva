import {Response, Request} from "express"
import { PaymentSlipBusiness } from "../business/PaymentSlipBusiness"
import { inputSlipDTO } from "../model/paymentSlip"

export class PaymentSlipController {
    async paymentSlip(
        req:Request,
        res:Response
    ) {
        try {
            const input:inputSlipDTO = {
                nameBuyer: req.body.nameBuyer,
                emailBuyer: req.body.email,
                cpfBuyer: req.body.cpfBuyer,
                amountPayment: req.body.amountPayment,
                typePayment: req.body.typePayment
            } = req.body

            const paymentSlip = new PaymentSlipBusiness()
            const result = paymentSlip.paymentSlip(input)

            res.status(400).send(result)
        } catch (error:any) {
            res.status(400).send({error:error.messsage})
        }
    }
}
/*
idClient,
*/