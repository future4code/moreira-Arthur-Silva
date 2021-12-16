```javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
    let salarioFixo = 2000
    let comissaoFuncionario = (0.05 * valorTotalVendas) + (100 * qtdeCarrosVendidos)
    let salarioFinal = salarioFixo + comissaoFuncionario

    return salarioFinal
}

```

