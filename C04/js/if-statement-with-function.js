var score = 75;
var msg = '';

function congratulate(){
    msg += 'Parabéns! ';
}

if (score >= 50) {
    congratulate();
    msg += 'Prossiga para a próxima rodada.';
}

var el = document.getElementById('answer');
el.innerHTML = msg;

