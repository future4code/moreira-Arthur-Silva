import {Request, Response} from "express"
import { PaymentCardBusiness } from "../business/PaymentCardBusiness"
import { inputCardDTO } from "../model/paymentCard"

export class PaymentCardController {
    async paymentCard(
        req:Request,
        res:Response
    ) {
        try {
            const input:inputCardDTO = { 
                nameBuyer:req.body.nameBuyer,
                emailBuyer:req.body.emailBuyer, 
                cpfBuyer:req.body.cpfBuyer, 
                amountPayment:req.body.amountPayment,
                typePayment:req.body.typePayment, 
                holderNameCard:req.body.holderNameCard, 
                numberCard:req.body.numberCard, 
                expirationDateCard:req.body.expirationDateCard, 
                cvvCard:req.body.cvvCard
            } 
            
            const paymentCardBusiness = new PaymentCardBusiness()
            const result = paymentCardBusiness.paymentCard(input)

            res.status(200).send(result)
        } catch (error:any) {
            res.status(400).send({error:error.messsage})
        }   
    }
}