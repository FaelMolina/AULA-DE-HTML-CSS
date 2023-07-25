function inserir(num) {
    document.querySelector('.visor').innerHTML += num;
}

function clean() {
    document.querySelector('.visor').innerHTML = "";
}

function back() {
    let tela = document.querySelector('.visor').innerHTML;
    document.querySelector('.visor').innerHTML = tela.substring(0, tela.length -1)
}

function somar() {
    let tela = document.querySelector('.visor').innerHTML;
    document.querySelector('.visor').innerHTML = eval(tela)
    if(tela){
        document.querySelector('.visor').innerHTML = eval(tela)  
    } else {
        document.querySelector('.visor').innerHTML = "nenhum comando"
    }
}