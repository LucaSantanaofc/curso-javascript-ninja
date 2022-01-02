/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
console.log(championship) // Campeonato Goiâno de Futebol Masculino

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Goiás', 'Anápolis', 'Goiânia FC', 'Atlético GO FC', 'Criciuma'] ;

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(x) {
    return 'O time que está em ' + x + 'º lugar é o ' +teams[x-1]+ '.';
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1)
//'Goiás'
showTeamPosition(2)
//'Anápolis'
showTeamPosition(3)
//'Goiânia FC'
showTeamPosition(4)
//'Atlético GO FC'

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
while(counter <= 30) {
    counter >= 20 ? console.log(counter) : false;
    counter++;
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(collor) {
    switch(collor) {
        case 'Red':
            return 'O hexadecimal para a cor ' + collor + ' é #FF0000.';
            break;
        case 'Blue':
            return 'O hexadecimal para a cor ' + collor + ' é #0000FF.';
            break;
        case 'Aquamarine':
            return 'O hexadecimal para a cor ' + collor + ' é #7FFFD4.';
            break;
        case 'DarkSlateGray':
            return 'O hexadecimal para a cor ' + collor + ' é #2F4F4F.';
            break;
        case 'Yellow':
            return 'O hexadecimal para a cor ' + collor + ' é #FFFF00.';
            break;
        default:
            return 'Não temos o equivalente hexadecimal para ' + collor + '.';
    }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('Blue')
//'O hexadecimal para a cor Blue é #0000FF.'
convertToHex('Red')
//'O hexadecimal para a cor Red é #FF0000.'
convertToHex('Aquamarine')
//'O hexadecimal para a cor Aquamarine é #7FFFD4.'
convertToHex('DarkSlateGray')
//'O hexadecimal para a cor DarkSlateGray é #2F4F4F.'
convertToHex('Yellow')
//'O hexadecimal para a cor Yellow é #FFFF00.'
convertToHex('Purple')
//'Não temos o equivalente hexadecimal para Purple.'
convertToHex('Pink')
//'Não temos o equivalente hexadecimal para Pink.'
convertToHex('Brown')
//'Não temos o equivalente hexadecimal para Brown.'