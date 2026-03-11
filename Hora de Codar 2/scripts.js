function exercicio11() {
    // Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles.

    var n1 = parseFloat(prompt("Informe um Numero"))
    var n2 = parseFloat(prompt("Informe outro Numero"))

    if (n1 > n2) {
        alert("O Primeiro Numero é o Maior!")
    }
    else if (n2 > n1) {
        alert("O Segundo Numero é o Maior!")
    }
    else if (n1 = n2) {
        alert("Os dois Numeros são Iguais")
    }
}

function exercicio12() {
    // Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.

    var n1 = parseFloat(prompt("Informe um Numero"))

    if (n1 >= 0) {
        alert("O Valor informado é Positivo")
    }
    else if (n1 < 0) {
        alert("O Valor informado é Negativo")
    }
}

function exercicio13() {
    // Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

    var n1 = 8;
    var n2 = 10;
    var n3 = -50;

    if (n1 > n2 && n1 > n3) {
        alert("O Primeiro Numero é o Maior!")
    }
    else if (n2 > n1 && n2 > n3) {
        alert("O Segundo Numero é o Maior!")
    }
    else if (n3 > n1 && n3 > n2) {
        alert("O Terceiro Numero é o Maior!")
    }
}

function exercicio14() {
    // Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.

    var n1 = parseFloat(prompt("Informe um Numero"))
    var n2 = parseFloat(prompt("Informe outro Numero"))
    var n3 = parseFloat(prompt("Informe outro Numero"))

    if (n1 < n2 && n1 < n3) {
        alert("A Soma entre " + n2 + " e " + n3 + " é: " + (n2 + n3))
    }
    else if (n2 < n1 && n2 < n3) {
        alert("A Soma entre " + n1 + " e " + n3 + " é: " + (n1 + n3))
    }
    else if (n3 < n1 && n3 < n2) {
        alert("A Soma entre " + n1 + " e " + n2 + " é: " + (n1 + n2))
    }
}

function exercicio15() {
    //  Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.

    var n1 = parseFloat(prompt("Informe um Numero"))
    var n2 = parseFloat(prompt("Informe outro Numero"))
    var n3 = parseFloat(prompt("Informe outro Numero"))
    var n4 = parseFloat(prompt("Informe outro Numero"))
    var n5 = parseFloat(prompt("Informe outro Numero"))
    var n6 = parseFloat(prompt("Informe outro Numero"))

    document.write("O Valor informado do 1º Numero é: " + n1 + "<br>")
    document.write("O Valor informado do 2º Numero é: " + n2 + "<br>")
    document.write("O Valor informado do 3º Numero é: " + n3 + "<br>")
    document.write("O Valor informado do 4º Numero é: " + n4 + "<br>")
    document.write("O Valor informado do 5º Numero é: " + n5 + "<br>")
    document.write("O Valor informado do 6º Numero é: " + n6 + "<br>")

    var resultado = (n1 + n2 + n3 + n4 + n5 + n6)
    document.write("<br>" + "A Média Aritmética dos números é: " + resultado / 6)
}

function exercicio16() {
    // Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes)

    var n1 = parseFloat(prompt("Informe um Numero"))
    var n2 = parseFloat(prompt("Informe outro Numero"))
    var n3 = parseFloat(prompt("Informe outro Numero"))
    var n4 = parseFloat(prompt("Informe outro Numero"))

    document.write("O Primeiro Nº Informado é: " + n1 + "<br>")
    document.write("O Ultimo Nº Informado é: " + n4 + "<br>")

    if (n1 > n2 && n1 > n3 && n1 > n4) {
        document.write("<br>" + "O Maior Nº Digitado é: " + n1)
    }
    else if (n2 > n1 && n2 > n3 && n2 > n4) {
        document.write("<br>" + "O Maior Nº Digitado é: " + n2)
    }
    else if (n3 > n1 && n3 > n2 && n3 > n4) {
        document.write("<br>" + "O Maior Nº Digitado é: " + n3)
    }
    else if (n4 > n1 && n4 > n2 && n4 > n3) {
        document.write("<br>" + "O Maior Nº Digitado é: " + n4)
    }
}

function exercicio17() {
    // Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou. 

    var n1 = parseFloat(prompt("Informe um Numero"))
    var n2 = parseFloat(prompt("Informe outro Numero"))
    var n3 = parseFloat(prompt("Informe outro Numero"))
    var n4 = parseFloat(prompt("Informe outro Numero"))
    var n5 = parseFloat(prompt("Informe outro Numero"))
    var n6 = parseFloat(prompt("Informe outro Numero"))

    document.write("O Valor informado do 1º Numero é: " + n1 + "<br>")
    document.write("O Valor informado do 2º Numero é: " + n2 + "<br>")
    document.write("O Valor informado do 3º Numero é: " + n3 + "<br>")
    document.write("O Valor informado do 4º Numero é: " + n4 + "<br>")
    document.write("O Valor informado do 5º Numero é: " + n5 + "<br>")
    document.write("O Valor informado do 6º Numero é: " + n6 + "<br>")

    var resultado = 0;

    if (n1 < 72) {
        resultado = resultado + n1
    }
    if (n2 < 72) {
        resultado = resultado + n2
    }
    if (n3 < 72) {
        resultado = resultado + n3
    }
    if (n4 < 72) {
        resultado = resultado + n4
    }
    if (n5 < 72) {
        resultado = resultado + n5
    }
    if (n6 < 72) {
        resultado = resultado + n6
    }

    document.write("A Soma de todos os numeros inferiores a 72 é de: " + resultado)
}

function exercicio18() {
    // Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"

    var n1 = parseFloat(prompt("Insira um número"));
    var n2 = parseFloat(prompt("Insira um número"));
    var n3 = parseFloat(prompt("Insira um número"));
    var n4 = parseFloat(prompt("Insira um número"));

    var resultado = 0;

    if (n1 > 0 || n1 <= 10) {
        resultado = resultado + n1;
    }
    if (n2 > 0 || n2 <= 10) {
        resultado = resultado + n2;
    }
    if (n3 > 0 || n3 <= 10) {
        resultado = resultado + n3;
    }
    if (n4 > 0 || n4 <= 10) {
        resultado = resultado + n4;
    }

    resultado = resultado / 4;

    if (resultado >= 5) {
        alert("Você passou no teste");
    } else if (resultado < 4.9) {
        alert("Tente novamente");
    }
}

function exercicio19() {
    // Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).

    var DateNasc = parseInt(prompt("Insira seu Ano de Nascimento: "));
    var DateVoto = parseInt(prompt("Insira o Ano de Votação: "));
    var Resultado = DateVoto - DateNasc;

    if (Resultado >= 18) {
        alert("Legal! Você poderá votar")
    }
    else if (Resultado < 18) {
        alert("Que Pena! Espera mais um pouco para votar :(")
    }
}

function exercicio20() {
    // Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas:

    function inicio() {

        var escolha = parseInt(prompt('Selecione o sexo: \n 1 - Feminino \n 2 - Masculino'));

        if (escolha === 1) {
            feminino();
        } else if (escolha === 2) {
            masculino();
        }
    }

    function feminino() {
        var h = parseFloat(prompt("Insira sua Altura: "))
        let resultado = (62.1 * h) - 44.7;
        alert("O Peso ideal para você é de: " + resultado)
    }

    function masculino() {
        var h = parseFloat(prompt("Insira sua Altura: "))
        let resultado = (72.7 * h) - 58;
        alert("O Peso ideal para você é de: " + resultado)
    }

    inicio();
}

function exercicio21() {
    // Micro-Calculadora

    function inicio() {

        if (escolha === 1) {
            adicao();
        } else if (escolha === 2) {
            subtracao();
        }
        else if (escolha === 3) {
            multiplicacao();
        }
        else if (escolha === 4) {
            divisao();
        }
    }

    var n1 = parseInt(prompt("Insira um Numero inteiro: "));
    var n2 = parseInt(prompt("Insira um Numero inteiro: "));
    var operacao = parseInt(prompt('Selecione uma opção: \n 1 - Adição \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão'));

    var resultado;

    switch (operacao) {
        case 1:
            resultado = n1 + n2;
            break;

        case 2:
            resultado = n1 - n2;
            break;

        case 3:
            resultado = n1 * n2;
            break;

        case 4:
            resultado = n1 / n2;
            break;

        default:
            alert("Operação Invalida!")
    }

    alert("O Resultado é: " + resultado)
}