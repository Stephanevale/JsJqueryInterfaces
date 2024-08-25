var newEL = document.createElement('li');
var newtext = document.createTextNode('quinoa');
newEL.appendChild(newtext);
var position = document.getElementsByTagName('ul')[0];
position.appendChild(newEL);
