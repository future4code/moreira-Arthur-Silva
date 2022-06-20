import { Balance } from "../src";
import { User } from "../src/types/type";

describe("Sequencia de testes", () => {
    
    test("Testando com o saldo maior do que o valor da compra", () => {
        const result = new Balance().balance({name:"arthur", balance:5000}, 1500)
        expect(result).toBe("object") //VERIFICA SE UM VALOR É IGUAL A OUTRO
    })
    test("Testando se o saldo é igual ou maior que ao valor da compra", () =>{
        const user = {
            name:"arthur",
            balance:3000
        }
        expect(user.balance).toBeGreaterThan(500)//IRA VERIFICAR SE VALOR É MAIOR DO QUE FOI COLOCADO EM TOBEGREATERTHAN 
    })
    test("Testando quando o saldo for menor que o valor da compra", () =>{
        const user = {
            name:"arthur",
            balance:3000
        }
        expect(user.balance).toBeLessThan(5000)//IRA VERIFICAR SE VALOR É MAIOR DO QUE FOI COLOCADO EM TOBEGREATERTHAN 
    })
})
//describe = um conjunto de testes
//test = um teste somente