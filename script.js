//função para mudar a imagem da forca conforme for errando as letras, ajustar depois
function mudaImagem() {
    document.getElementById("imagem-forca").src = "img/forca2.png";
}

document.onkeydown = teclaLetra;

function teclaLetra(e) {
    const el = document.getElementById(e.key.toUpperCase());
    if (el) {
        console.log('apertou ' + e.key);
        el.style.backgroundColor = 'green';
        el.style.color = 'white';
        el.disabled = true;
    }
}

let teclado = document.getElementsByClassName('botao-teclado');
teclado.onclick = clicaLetra;

function clicaLetra(e) {
        let el = document.getElementById(e);
        console.log('clicou ' + e);
        el.style.backgroundColor = 'red';
        el.style.color = 'white';
        el.disabled = true;
    
}

