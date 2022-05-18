import { inputCardDTO } from "../model/paymentCard";
import { GenerateID } from "../services/GenerateID";

export class PaymentCardBusiness {
    async paymentCard(input:inputCardDTO) {
        try {
            const {
                nameBuyer, emailBuyer, 
                cpfBuyer, amountPayment, 
                typePayment, holderNameCard, 
                numberCard, expirationDateCard, 
                cvvCard
            } = input

            if(
            !nameBuyer || !emailBuyer ||
            !cpfBuyer || !amountPayment ||
            !typePayment || !holderNameCard ||
            !numberCard || !expirationDateCard ||
            !cvvCard)
            {
                throw new Error("Os campos não foram preenchidos corretamente");
            }
            const id = new GenerateID().newId()
            


            return numberOfPaymentSlip
        } catch (error) {
            
        }
    }
}