//ES6 -> ECMAScript versão 6, de 2016


//Para arquivos com export sem default, é necessário a utilização de chaves(desestruturação)
//no ato da importação
import {numeros} from './Includes/dados.mjs'

//Podemos importar somente o que vamos usar, caso o arquivo
//importe mais de um item
import {somaVet, quadradoVet} from './Includes/funcoes.mjs'

//Quando existe export default no arquivo de origem, não se utiliza chaves na importação
import dobraVet from './Includes/funcoes2.mjs'

console.log(somaVet(numeros))
console.log(quadradoVet(numeros))
