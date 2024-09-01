const express = require('express');
const app = express();

//usando middleware
const lista01 = require('./Atividades/lista01');

// Exercício 01
app.get('/contarVogais/:palavra', (req, res) => {
    let palavra = req.params.palavra;
    let resultado = lista01.qtdVogais(palavra);
    res.send(`A sua palavra contém ${resultado} vogais.`);
});

// Exercício 02
app.get('/calcularMontante/:capitalInicial/:taxaJuros/:tempo', (req, res) => {
    let capitalInicial = parseFloat(req.params.capitalInicial);
    let taxaJuros = parseFloat(req.params.taxaJuros);
    let tempo = parseInt(req.params.tempo);

    let resultado = lista01.calcularMontante(capitalInicial, taxaJuros, tempo);
    res.send(`O retorno do investimento é de R$ ${resultado}`);
});

// Exercício 03
app.get('/contarCaracteres/:string/:caractere', (req, res) => {
    let string = req.params.string;
    let caractere = req.params.caractere;

    if (caractere.length !== 1) {
        res.send('Por favor, insira um caractere');
        return;
    }

    let resultado = lista01.contarCaractere(string, caractere);
    res.send(`O caractere digitado aparece ${resultado} vezes na string`);
});

// Exercício 04
app.get('/anoBissexto/:ano', (req, res) => {
    let ano = parseInt(req.params.ano);

    let resultado = lista01.anoBissexto(ano);
    res.send(resultado);
});

// Exercício 05
app.get('/encontrarArray', (req, res) => {
    let numeros = req.query.numeros;
    let arrayNumeros = numeros.split(',').map(Number);


    let resultado = lista01.encontrarArray(arrayNumeros);
    res.send(resultado);
});

app.listen(3000, () => {
    console.log('Server está executando na porta 3000');
});

// Exercício 06
app.get('/loteria', (req, res) => {
    let numerosUsuario = req.query.numeros;

    let arrayNumeros = numerosUsuario.split(',').map(Number);

    let resultado = lista01.loteria(arrayNumeros);
    res.send(resultado);
});
