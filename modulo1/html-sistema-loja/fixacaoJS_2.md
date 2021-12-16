```javascript

function calculaPrecoTotal(quantidade) {
  let valorDaDuzia = 1.00;
  let valorDaUnidade = 1.30

  if(quantidade < 12){
    return valorDaUnidade * quantidade
  }
  else {
    return valorDaDuzia * quantidade
  }
}

```

