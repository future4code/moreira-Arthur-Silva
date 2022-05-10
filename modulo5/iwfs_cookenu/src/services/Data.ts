export function returnData() {
    const data = new Date() //retorna o ano
    
    const year = data.getFullYear() //retorna
    const day = data.getDate()//retorna o dia do mes
    
    let zero = 0
    let month = data.getMonth() + 1 //retorna o mes

    if(month > 9){
        zero = zero 
    }
    const dataFinal = `${year}/${zero}${month}/${day}`

    return dataFinal
}