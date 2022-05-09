import { User } from "./types/type";

class Balance {
    
    public balance(user:User, value:number){
        let saldo = user.balance - value
        let newBalance = {...user, balance:saldo}

        if(saldo > 0){
            return newBalance
        }else{
            return "saldo negativo"
        }
    }
}

const newB = new Balance().balance({name:"arthur", balance:5000}, 1000)
//console.log("resposta",newB)
