export class PaymentCard {
    constructor(
        private id:string,
        private name:string,
        private cpf:number,
        private amount:number,
        private type:string
    ) 
    {}
    public getId(){
        return this.id
    }
    public getName(){
        return this.name
    }
    public getCpf(){
        return this.cpf
    }
    public getAmount(){
        return this.amount
    }
    public getType(){
        return this.type
    }
}
export type inputCardDTO = {
    nameBuyer:string,
    emailBuyer:string,
    cpfBuyer:number,
    amountPayment:number,
    typePayment:string,
    holderNameCard:string,
    numberCard:number,
    expirationDateCard:number,
    cvvCard:number
}
/* export enum enumPayment {
    CreditCard = "Credit Card",
    PaymentSlip = "PaymentSlip"
} */