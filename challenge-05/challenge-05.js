/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarray = [ 'lucas', true, 5, undefined, {} ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myfunction( array ) {
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myfunction(myarray)[1]; //true

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myfunction2( arr1, arr2 ) {
    return arr1[arr2];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array = [ 'lucas', null, undefined, 5, true ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myfunction2(array, 0);
//'lucas'
myfunction2(array, 1);
//null
myfunction2(array, 2);
//undefined
myfunction2(array, 3);
//5
myfunction2(array, 4);
//true

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book( par1 ) {
    var myobj = {
        'Revenant': { quantidadePaginas: 300, autor: 'Cornel D. Houks', editora: 'Cortion'},
        'Ragnock': { quantidadePaginas: 348, autor: 'Jack O. Liears', editora: 'Rupsby'},
        'Limbo': { quantidadePaginas: 279, autor: 'Jenette S. Furry', editora: 'Refrier'}
    };
    return par1 !== undefined ? myobj[par1] : myobj;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
'O livro Limbo tem ' +book('Limbo').quantidadePaginas+ ' páginas! ';

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
'O autor do livro Limbo é ' +book('Limbo').autor;

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
'O livro Limbo foi publicado pela editora ' +book('Limbo').editora + '.'