
//Neste arquivo, há apenas um item sendo exportado, e é uma função.
//Podemos usar export default

export default function dobraVet(vet) {
//Cria um novo vetor com elementos que são o dobro do valor
//do vetor original
    let res = []
    for(let n of vet) res.push(n * 2)
    return res
}
