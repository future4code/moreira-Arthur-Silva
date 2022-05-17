export class GenerateDate {
    date() {
        const data = new Date() //retorna o ano

        const year = data.getFullYear() //retorna
        const month = data.getMonth() + 1 //retorna o mes
        const day = data.getDate()//retorna o dia do mes

        const dataFinal = `${year}/${month}/${day}`

        return dataFinal
    }
    inverseDate(){
        const data = new Date() //retorna o ano

        const year = data.getFullYear() //retorna
        const month = data.getMonth() + 1 //retorna o mes
        const day = data.getDate()//retorna o dia do mes

        const dataFinal = `${day}/${month}/${year}`

        return dataFinal
    }
}