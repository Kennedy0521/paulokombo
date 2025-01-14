let jogadorAtual = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
const casas = document.querySelectorAll('.casa');

casas.forEach(casa => {
    casa.addEventListener('click', () => {
        const index = casa.getAttribute('data-index');
        
        if (board[index] === '' && !verificarVencedor()) {
            board[index] = jogadorAtual; 
            casa.textContent = jogadorAtual; 

            if (verificarVencedor()) {
                setTimeout(() => {
                    alert(`Jogador ${jogadorAtual} venceu!`); 
                }, 100); 
                return;
            }

            if (verificarEmpate()) {
                setTimeout(() => {
                    alert('Jogo Empatado!');
                }, 100);
                return;
            }

            jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
        }
    });
});

document.getElementById('reiniciar').addEventListener('click', reiniciarJogo);

function verificarVencedor() {
    const combinacoes = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6] 
    ];
    
    for (let combinacao of combinacoes) {
        const [a, b, c] = combinacao;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) { 
            return true;
        }
    }
    
    return false;
}

function verificarEmpate() {
    return board.every(casa => casa !== '');  
}

function reiniciarJogo() {
    board = ['', '', '', '', '', '', '', '', ''];
    casas.forEach(casa => {
        casa.textContent = '';
    });
    jogadorAtual = 'X';
}
