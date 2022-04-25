import { Transaction_user } from "./types";

//EXERCICIOS

/* 1-A)construtor será o primeiro método a ser executado em minha classe, 
ele permite que enviemos dados para ele e também criar valores.
Podemos chama-lo da seguinte forma: 
class usuario       (esta linha refere-se a criação da class)
new usuario        (esta linha refere-se a chamada do class) */

//1-b)Instanciar e chamar a função e passar os valores. Apareceu apenas uma vez no terminal.
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    public getCpf(){
        return this.cpf
    }
    public getName(){
        return this.name
    }
    public getAge(){
        return this.age
    }
    public getBalance(){
        return this.balance
    }
    public getTransaction(){
        return this.transactions
    }
    public setTransaction(transaction:Transaction){
        return this.transactions.push(transaction)
    }
}
const newUser = new UserAccount("06704589152", "arthur", 56)
/* 1-c)Podemos ter acessos as propriedades privadas de uma classe com a keyword 'this', e podemos também
podemos tornar todos os métodos privados e controlar o acesso por métodos.
*/

//2-a)
class Transaction{

    private data:string;
    private valor:number;
    private descricao:string;

    constructor(data:string, valor:number, descricao:string){
        this.data = data,
        this.valor = valor,
        this.descricao = descricao
    }

    public getData(){
        return this.data
    }
    public getValor(){
        return this.valor
    }
    public getDescricao(){
        return this.descricao
    }
    
}

const newTransaction:Transaction = new Transaction("27/02/1998", 90.0, "Transação feita para meu primo")
newUser.setTransaction(newTransaction)

//3-)

class Bank{
    private account: UserAccount[]

    constructor(accounts: UserAccount[]){
        this.account = accounts
    }
    
}
const contas = new Bank([newUser]) 
console.log("minhas contas:",contas)








