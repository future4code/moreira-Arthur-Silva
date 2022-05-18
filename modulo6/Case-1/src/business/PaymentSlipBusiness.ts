import {Request, Response} from "express"
import { read } from "fs"
import { inputSlipDTO } from "../model/paymentSlip"

export class PaymentSlipBusiness {
    async paymentSlip(input:inputSlipDTO) {
        try {
            const {nameBuyer, emailBuyer, cpfBuyer, amountPayment, typePayment} = input

            if(){
                
            }
        } catch (error) {
            
        }
        
    }
}