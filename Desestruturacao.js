let vetor = [10,20,30]

let obj = {
    nome: 'Maria',
    idade: 34,
    naturalidade: 'Franca/SP'
}

let [x, y, z] = vetor
console.log(x)
console.log(y)
console.log(z)

console.log('---------------------------------------')

//Desestruturação de objetos: As variáveis do LET devem ter os mesmos nomes das propriedades do objeto
let {nome, idade, naturalidade} = obj
console.log(nome)
console.log(idade)
console.log(naturalidade)

console.log('---------------------------------------')

let obj2 = {
    marca: 'Volkswagen',
    modelo: 'Fusca',
    ano: 1969,
    cor: 'Preto'
}

//Desestruturação parcial de objeto

let {modelo, ano} = obj2
console.log(modelo)
console.log(ano)

console.log('---------------------------------------')

let vet2 = ['laranja', 'maçã', 'pera']

//Ignorando o último elemento
let [fruta1, fruta2] = vet2
console.log(fruta1)
console.log(fruta2)

console.log('---------------------------------------')

let [,f2, f3] = vet2
console.log(f2)
console.log(f3)
