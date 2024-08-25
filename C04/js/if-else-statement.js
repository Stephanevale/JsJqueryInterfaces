var pass = 50;
var score = 75;
var msg;

if(score >= pass){
    msg = 'Parabéns, você passou!';
} else{
    msg = 'tente novamente!';
}

var el = document.getElementById('answer');
el.textContent = msg;