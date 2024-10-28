function verificar() {
    ano = document.getElementById('ano').value;
    if(ano % 4 == 0) {
        alert("O ano teve a olimpiada");
    } else {
        alert("o ano não teve a olimpiada");
    }
}