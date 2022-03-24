const escolha = (process.argv[2])
const primeiroNumero = Number((process.argv[3]))
const segundoNumero = Number((process.argv[4]))

switch(escolha){
    case "add": 
        console.log(primeiroNumero + segundoNumero)  
    break
    case "sub": 
        console.log(primeiroNumero - segundoNumero)  
    break
    case "mult": 
        console.log(primeiroNumero * segundoNumero)  
    break
    case "div": 
        console.log(primeiroNumero / segundoNumero)  
    break    
}