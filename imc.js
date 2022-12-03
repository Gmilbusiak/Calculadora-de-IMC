
const calcular = document.getElementById('calcular');

// o get element by id, pega o dado inserido na pagina do html, cujo o id corresponde a oque foi colocado no documetno

function imc (){
    // é sempre bom colocar as variaveis dentro das funções, pois se elas ficarem fora, elas se tornam globais, no caso poderia ser uma falha de segurança do código.
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    //quando eu coloco o .value no final de cada variavel, o programa so está preocupado em pegar apenas o valor, e não todo o elemento em html

    if (nome !== '' && altura !== '' && peso !== ''){ // aqui estou colocando um parametro de que nome, altura e peso tem que ser diferente de vazio !.
        
        const valorImc = ( peso / (altura * altura)).toFixed(2); // arredonda o numero para a quantidade de numeros que colocamos nos parenteses

        let classificacao = '';

        if (valorImc < 18.5){
            classificacao = 'Abaixo do peso.';
        }else if(valorImc< 25){ // o else if pega o valor entre o if anterior e o parametro que você vai coloar neste else if, neste caso, se a pessoa ter um imc entre 18.5 e 25, ele terá um peso ideal e isso vale para o restante das condições.
            classificacao = ' com peso ideal, parabéns!';
        }else if (valorImc < 30){
            classificacao = 'levemente acima do peso';
        }else if (valorImc < 35){
            classificacao = 'com obesidade grau I';
        }else if (valorImc <40){
            classificacao = 'com obeisdade grau II';
        }else {
            classificacao = ' obesidade grau III. Cuidado!!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${classificacao}`;

    } else{
        resultado.textContent = 'Preencha todos os campos!!'
    }
}


calcular.addEventListener('click', imc);
// o eventlintener é para o método do objeto calcular, escutar quando alguem clicar

