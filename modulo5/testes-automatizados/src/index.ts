import { User } from "./types/type";

export class Balance {
    public balance(user:User, value:number){
        let saldo = user.balance - value
        let newBalance = {...user, balance:saldo}

        if(saldo > 0){
            return newBalance
        }else{
            return "seu saldo está zerado e nao permite transaçoes no momento"
        }
    }
}

const newB = new Balance().balance({name:"arthur", balance:5000}, 1000)
//console.log("resposta",newB)
