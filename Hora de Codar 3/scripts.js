function exercicio22() {
    // Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.

    var n1 = parseInt(prompt("Digite o primeiro Numero"));
    var n2 = parseInt(prompt("Digite o primeiro Numero"));

    while (n2 <= 0) {
        alert("O Segundo número informado NÃO pode ser Nulo/Negativo!")
        var n2 = parseInt(prompt("Insira outro valor"));
    }
    alert(n1 / n2)
}

function exercicio23() {
    // Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".

    var cronometro = 30;

    while (cronometro >= 0) {
        document.write(cronometro + "<br>");
        cronometro--;
    }

    document.write("EXPLOSÃO")
}

function exercicio24() {
    // Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
    // Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

    var cronometro = 10;

    while (cronometro > 1) {
        document.write(cronometro + " , ");
        cronometro--;
    }
    document.write(cronometro)
}

function exercicio25() {
    // Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).

    var soma = 0;
    var valor = 15;
    var numElemento = 0;

    while (valor <= 100) {
        soma += valor;
        valor++;
        numElemento++;

    }

    let media = soma / numElemento;
    alert("A Média aritmética é: " + media)
}

function exercicio26() {
    // Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.
}

function exercicio27() {
    // Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.

    let nAlunosA = 0;

    function aluno() {
        let n1 = parseFloat(prompt("Digite a primeira nota do aluno:"));
        let n2 = parseFloat(prompt("Digite a segunda nota do aluno:"));

        let media = (n1 + n2) / 2;

        if (media >= 9.5) {
            nAlunosA++;
        }
        outro();
    }

    function outro() {
        let r = prompt("Calcular a média de outro aluno? SIM ou NÃO").toUpperCase();

        switch (r) {
            case "S":
                aluno();
                break;
            default:
                alert("Quantidade de aluno aprovados " + nAlunosA);
        }
    }

    aluno();
}

function exercicio28() {
    // Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
    // Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 

    let sm = 0;

    for (let i = 1; i <= 6; i++) {
        let n = parseFloat(prompt(`Informe a ${i}ª nota:`));

        while (n < 0 || n > 10 || isNaN(n)) {
            n = parseFloat(prompt(`nota inválida. Informe a ${i}ª nota novamente:`));
        }
        sm += n;
    }

    let media = sm / 6;
    alert(`A média do aluno é: ${media}`);
}

function exercicio29() {
    // Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.
    // N  é um valor informado pelo usuário 

    let n = parseInt(prompt("Insira um valor"));

    while (n >= 1) {
        document.write(n, "<br>");
        n--;
    }
}

function exercicio30() {
    // Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.

    let n = 101;

    while (n <= 110) {
        document.write(n, "<br>");
        n++;
    }
}

function exercicio31() {
    // Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

    const n = parseInt(prompt("Gostaria de ver todas as tabuadas do 1 ao:"));

    for (let i = 1; i <= n; i++) {
        document.write(`Tabuada de ${i}: `);
        for (let j = 1; j <= 10; j++) {
            document.write(` | ${i} x ${j} = ${i * j}`);
        }
        document.write("<br><br>");
    }
}

function exercicio32() {
    // Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.

    let dentro = 0;
    let fora = 0;

    for (let i = 1; i <= 10; i++) {
        let v = parseInt(prompt(`Informe o valor ${i}:`));

        if (v >= 24 && v <= 42) {
            dentro++;
        } else {
            fora++;
        }
    }

    document.write(`Esses são os números dentro: ${dentro}`);
    document.write("<br>");
    document.write(`Esses são os números que estão fora: ${fora}`);
}