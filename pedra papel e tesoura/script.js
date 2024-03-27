let placar = JSON.parse(localStorage.getItem('placar')) || {    
    vitorias: 0,
    derrotas: 0,
    empates: 0
};

function iniciarPartida(movimentoDoJogador) {

    const movimentoComputador = escolhaDoComputador();

    let resultado = '';

        if (movimentoDoJogador === 'Pedra') {
            if (movimentoComputador === 'Pedra') {
                resultado = 'Empate!';
            } else if (movimentoComputador === 'Papel') {
                resultado = 'Você perdeu! :(';
            } else if (movimentoComputador === 'Tesoura') {
                resultado = 'Você Venceu! :)';
        }
    }

        if (movimentoDoJogador === 'Papel') {
            if (movimentoComputador === 'Pedra') {
                resultado = 'Você Venceu! :)';
            } else if (movimentoComputador === 'Papel') {
                resultado = 'Empate!';
            } else if (movimentoComputador === 'Tesoura') {
                resultado = 'Você perdeu! :(';
        }
    }

        if (movimentoDoJogador === 'Tesoura') {
            if (movimentoComputador === 'Pedra') {
                resultado = 'Você perdeu! :(';
            } else if (movimentoComputador === 'Papel') {
                resultado = 'Você Venceu! :)';
            } else if (movimentoComputador === 'Tesoura') {
                resultado = 'Empate!';
        }
    }

        if (resultado === 'Você Venceu! :)') {
            placar.vitorias = placar.vitorias + 1;
        } else if (resultado ==='Você perdeu! :(') {
            placar.derrotas = placar.derrotas + 1; 
        } else if (resultado === 'Empate!') {
            placar.empates = placar.empates + 1;
    }

    localStorage.setItem('placar', JSON.stringify(placar));

    atualizarScore();

    document.querySelector('.js-result').innerHTML = resultado;

    document.querySelector('.js-moves').innerHTML = `Você escolheu:
<img src="img/${movimentoDoJogador}-emoji.png" class="emojiIcon"> <br>
O computador escolheu: <img src="img/${movimentoComputador}-emoji.png" class="emojiIcon">
`;
}

function atualizarScore() {
    let scoreTexto = document.querySelector('.js-score');
    scoreTexto.innerHTML = `Vitórias = ${placar.vitorias}, Derrotas = ${placar.derrotas}, Empates = ${placar.empates}.`;
};

function escolhaDoComputador() {  

    const numeroAleatorio = Math.random();
    let movimentoComputador = '';

        if (numeroAleatorio >= 0 && numeroAleatorio < 1 / 3) {
        movimentoComputador = 'Pedra';
    } else if (numeroAleatorio >= 1 / 3 && numeroAleatorio < 2 / 3) {
        movimentoComputador = 'Papel';
    } if (numeroAleatorio >= 2 / 3 && numeroAleatorio <=1) {
        movimentoComputador = 'Tesoura';
        }
            return movimentoComputador;
}








    





