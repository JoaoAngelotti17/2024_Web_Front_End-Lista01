// Exercício 01
function qtdVogais(palavra) {
    let vogais = 'aeiouAEIOU';
    let contador = 0;

    for (let i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            contador++;
        }
    }

    return contador;
}

// Exercício 02
function calcularMontante(capitalInicial, taxaJuros, tempo) {
    let i = taxaJuros / 100
    let montante = capitalInicial * Math.pow((1 + i), tempo);
    return montante.toFixed(2);
}

// Exercício 03

function contarCaractere(string, caractere) {
    let contador = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === caractere) {
            contador++;
        }
    }

    return contador;
}

// Exercício 04

function anoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return `${ano} é um ano bissexto.`;
    } else {
        return `${ano} não é um ano bissexto.`;
    }
}

function encontrarArray(array) {
    let menor = array[0];
    let maior = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
        }
        if (array[i] > maior) {
            maior = array[i];
        }
    }

    return `O menor número é ${menor} e o maior número é ${maior}.`;
}

// Exercício 06

function loteria(numerosUsuario) {
  
    let numerosSorteados = [];
    while (numerosSorteados.length < 6) {
        let numero = Math.floor(Math.random() * 60) + 1;
        if (!numerosSorteados.includes(numero)) {
            numerosSorteados.push(numero);
        }
    }

    let acertos = numerosUsuario.filter(num => numerosSorteados.includes(num)).length;

    return `Números sorteados: ${numerosSorteados.join(', ')}. Você acertou ${acertos} números.`;
}

module.exports = {qtdVogais, calcularMontante, contarCaractere, anoBissexto, encontrarArray, loteria };