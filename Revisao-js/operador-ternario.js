let nota = 7.2
let situacao

/*if (nota >= 6){
    situacao = 'Aprovado'
}

else {
    situacao = 'Reprovado'
}*/

/*if (nota >= 6) situacao = 'Aprovado'
else situacao = 'Reprovado'*/

//As três partes do operador ternário
//1° parte: condição (que iria depois do IF)
//Entre a 1° e 2° parte: ?
//2° parte: Resultado (caso a condição que seja VERDADEIRA)
//Entre a 2° e 3° parte: :
//3° parte: Resultado (caso a condição que seja FALSA)

situacao = (nota >= 6 ? 'Aprovado' : 'Reprovado')
console.log(situacao)

let user = 'zemane'
let userType

userType = user === 'admin' || user === 'root' ? 'Superuser' : 'Ordinary user'

console.log(userType)
