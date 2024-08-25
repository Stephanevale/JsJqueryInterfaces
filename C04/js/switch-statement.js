var msg;
var nivel = 1;

switch (nivel){
    case 1:
        msg = 'Boa sorte no primeiro teste';
        break;
    case 2:
        msg = 'Segundo teste - Continue!';
        break;
    case 3:
        msg = 'Terceiro teste...';
        break;
    case 4:
        msg = 'Rodada final, quase lá';
        break;
    default:
        msg = 'Boa sorte';
        break;
}

var el = document.getElementById('answer');
el.textContent = msg;

