//1)As entradas podem ser um array de numeros, e a saida

function obterEstatisticas(numeros:number[]):Estatisticas {
    
    const numerosOrdenados:number[] = numeros.sort(
        (a, b) => a - b
        )

        let soma:number = 0
        
        for (let num of numeros) {
            soma += num
        }
        
        const estatisticas: Estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}
type amostra = {
    numero: number[]
    obterEstatisticas: (numeros: number[]) => Estatisticas
}

console.log(obterEstatisticas([8,6,4,9,7,2,19,7]))