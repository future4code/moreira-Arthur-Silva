import { injDependencyPerformAttack, performAttack, validateCharacter } from "../src"
import { Character } from "../src/types/type"

/* describe("Validando um usuario", ()=> {

    test("Validando um usuario com o nome vazio", () => {
        const result = validateCharacter({
            name:"",
            life:3000,
            defense:2000,
            power:1000
        }) 
        expect(result).toBe(true)
    })
    test("Validando um usuario com a vida igual a zero", () => {
        const result = validateCharacter({
            name:"arthur",
            life:0,
            defense:2000,
            power:1000
        }) 
        expect(result).toBe(false)
    })
    test("Validando um usuario com o power igual a zero", () => {
        const result = validateCharacter({
            name:"arthur",
            life:5000,
            defense:2000,
            power:0
        }) 
        expect(result).toBe(false)
    })
    test("Validando um usuario com a defense igual a zero", () => {
        const result = validateCharacter({
            name:"arthur",
            life:5000,
            defense:0,
            power:3000
        }) 
        expect(result).toBe(false)
    })
    test("Validando um usuario com a life, defense ou power com valor negativo", () => {
        const result = validateCharacter({
            name:"arthur",
            life:-450,
            defense:-420,
            power:3000
        }) 
        expect(result).toBe(false)
    })
    test("Validando um usuario com as informações válidas", () => {
        const result = validateCharacter({
            name:"arthur",
            life:450,
            defense:850,
            power:3000
        }) 
        expect(result).toBe(true)
    })
}) */
test("Create Mocking of validando um usuario - jest.fn", () => {
    const validatorMock = jest.fn(() => {
        return true
    })

    const cabrito:Character = {
        name:"cabrito",
        life:900,
        defense:200,
        power:3000
    }
    const cavalo:Character = {
        name:"cavalo",
        life:450,
        defense:2200,
        power:600
    }
    injDependencyPerformAttack(cabrito, cavalo, validateCharacter)
    expect(validatorMock)
})
test("Create Mocking of validando um usuario - jest.fn", () => {
    const validatorMock = jest.fn(() => {
        return false
    })
})

describe("Performed attacker", () => {
    test("Testando os ataques nos animais", () =>{
        const cavalo:Character = {
            name:"cavalo",
            life:900,
            defense:2000,
            power:3000
        }
        const cabrito:Character = {
            name:"cabrito",
            life:450,
            defense:800,
            power:600
        }
        const result = performAttack(cavalo, cabrito)
        expect(result).toBe(true)
        console.log("resposta",cabrito)
    })
})
describe("attack performed with dependency injection", () => {
    test("testing attack the animals", ()=> {
        const cabrito:Character = {
            name:"cabrito",
            life:900,
            defense:2000,
            power:3000
        }
        const cavalo:Character = {
            name:"cavalo",
            life:450,
            defense:800,
            power:600
        }
        const result = injDependencyPerformAttack(cabrito, cavalo, validateCharacter)
        expect(result).toBe(true)
        console.log("dados do cavalo",cavalo)
    })
})

//toBe = verifica se o valor é exatamente igual
//toBeGreateThan = verificar se um valor é maior e igual a outro
//toBeLessThan = verificar se um valor é menor e igual a outro
//toContain = verificar se em um array existe tal elemento
//toContainEqual = verifica se uma rray possui um elemento igual ao passado na função
//.not. = permite fazer uma validação negativa e ver se o valor nao é outro

/*
toEqual(1300);
toHaveBeenCalled();
toHaveBeenCalledTimes(2);
toHaveReturnedTimes(2);
*/