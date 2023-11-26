let display = document.getElementById('tela');/* Aqui é declarado a tela da Calculadora */

function DigitoTela(value) {/* Função que atribui o valor do botão para a tela*/
    display.value += value;
}

function limparTela() { /* Botão que seta um valor em branco para a tela - limpa a tela */
    display.value = '';
}

function calculaResultado() { /* Função para realizar o calculo */
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}