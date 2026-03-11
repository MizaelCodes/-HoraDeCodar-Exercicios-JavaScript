function exercicio1() {
    // Escreva um programa em Javascript e crie uma variável chamada "nome_do_carro" e atribua-a um valor "Fusca". Exiba-a ao usuário.

    var nome_do_carro = "Fusca";
    document.write(nome_do_carro)
}

function exercicio2() {
    // Escreva um programa em Javascript em que o usuário informe o seu nome e exiba a mensagem "Olá, [NomeDoUsuario]".

    var nome = prompt("Insira seu Nome")
    document.write("Bem-Vindo " + nome)
}

function exercicio3() {
    // Escreva um programa em Javascript em que o usuário informe o seu nome e em seguida o programa perguntará a idade do usuário. Agora o programa deve exibir a mensagem "Olá, [NomeDoUsuario], sua idade é [idade]".

    var nome = prompt("Insira seu Nome")
    var idade = prompt("Insira sua Idade")
    document.write("Olá " + nome + " sua idade é de: " + idade)
}

function exercicio4() {
    // Considerando a figura acima, escreva um programa para cada forma que calcule e exiba em tela cada uma de suas respectivas áreas. O usuário irá informar os valores de cada variável.
    // Valor do Retêngulo

    var base = parseFloat(prompt("Digite o valor da Base"))
    var altura = parseFloat(prompt("Digite o valor da Altura"))

    var resultado = base * altura

    document.write("O Resultado do Retângulo é de: " + resultado)
}

function exercicio5() {
    // Considerando a figura acima, escreva um programa para cada forma que calcule e exiba em tela cada uma de suas respectivas áreas. O usuário irá informar os valores de cada variável.
    // Soma do Quadrado
    var lado = parseFloat(prompt("Digite o valor do lado"));

    var resultado = lado * lado * (lado * lado);
    document.write("O Resultado da soma do quadrado é: " + resultado);
}

function exercicio6() {
    // Considerando a figura acima, escreva um programa para cada forma que calcule e exiba em tela cada uma de suas respectivas áreas. O usuário irá informar os valores de cada variável.
    // Valor do Losango

    var diagonal_maior = parseFloat(prompt("Insira o valor da maior diagonal"));

    var diagonal_menor = parseFloat(prompt("Insira o valor da menor diagonal"));

    var divisao = 2;

    var resultado = diagonal_maior * diagonal_menor / divisao;
    document.write("O Valor do Losango é de: " + resultado);
}

function exercicio7() {

}

function exercicio8() {
    // Considerando a figura acima, escreva um programa para cada forma que calcule e exiba em tela cada uma de suas respectivas áreas. O usuário irá informar os valores de cada variável.
    // Valor do Trapézio

    var base_maior = parseFloat(prompt("Insira a maior base"));

    var base_menor = parseFloat(prompt("Insira a menor base"));

    var h = parseFloat(prompt("Insira um valor para h"));

    var divisao = 2;

    var resultado = (base_maior + base_menor) * h / divisao;
    document.write(resultado);
}

function exercicio9() {
    // Considerando a figura acima, escreva um programa para cada forma que calcule e exiba em tela cada uma de suas respectivas áreas. O usuário irá informar os valores de cada variável.
    // Valor do Triângulo

    var base = parseFloat(prompt("Insira um valor para a Base"))
    var altura = parseFloat(prompt("Insira um valor para a Altura"))

    var resultado = base * altura / 2

    document.write("O Valor da soma do Triângulo é de: " + resultado)
}

function exercicio10() {
    // Considerando a figura acima, escreva um programa para cada forma que calcule e exiba em tela cada uma de suas respectivas áreas. O usuário irá informar os valores de cada variável.
    // Valor do Círculo

    var pi = 3.14;

    var raio = parseFloat(prompt("Insira o valor do Raio"));

    var resultado = pi * (raio * raio);
    document.write(resultado);
}