// Crio constantes, com getElementById que retorna a referência do elemento através do seu ID.
const calcular = document.getElementById('calcular');

// função esse que estarei criando
// Pego as variaveis e as coloco dento da função para não serem constantes globais
function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    // Antes verifico se os campos estão preenchidos, pegando apenas o valor dentro do elemento nome
    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(2); 
        // colocando o valor IMC com duas casas após a virgula com toFixed

        let classificacao = "";

        if (valorIMC < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (valorIMC < 25) {
            classificacao = 'Peso ideal. Parabéns';
        } else if (valorIMC < 30) {
            classificacao = 'Levimente acima do peso';
        } else if (valorIMC < 35) {
            classificacao = 'Obesidade grau I';
        } else if (valorIMC < 40) {
            classificacao = 'Obesidade grau II';
        } else {
            classificacao = 'Obesidade grau III. Cuidado!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`

    } else {
        resultado.textContent = 'Preencha todos os Campos!';
    }
}

// Peço para o meu botão agir na hora de uma ação e executar uma função.
calcular.addEventListener('click', imc);