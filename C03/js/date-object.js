var today = new Date();
var year = today.getFullYear();

el = document.getElementById('footer');
el.innerHTML = '<p>Copyright &copy;' + year +'</p>';