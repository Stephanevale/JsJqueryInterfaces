var score = 75;
var msg;

if (score >= 50) {
    msg = 'Parabéns! ';
    msg += 'Prossiga para a próxima rodada.';
}
var el = document.getElementById('answer');
el.textContent = msg;