export class PaymentSlip {
    constructor(
        private id:string,
        private name:string,
        private email:string,
        private cpf:number,
        private amount:number,
        private type:string,
    ) 
    {}
    public getId(){
        return this.id
    }
    public getName(){
        return this.name
    }
    public getEmail(){
        return this.email
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

export type inputSlipDTO = {
    nameBuyer:string,
    emailBuyer:string,
    cpfBuyer:number,
    amountPayment:number,
    typePayment:string
}