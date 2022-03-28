//4) b) Usamos "tsc" para fazer a transpilação.
//c) Podemos alterar o caminho do arquivo, para onde ele está.

//a)
type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}
//d)Caso ja tenhamos o arquivo tsconfig, podemos só chamar "tsc". 