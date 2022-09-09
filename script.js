//função para mudar a imagem da forca conforme for errando as letras, ajustar depois
function mudaImagem() {
    document.getElementById("imagem-forca").src = "img/forca2.png";
}
//criando e selecionando a palavra sorteada
let listaPalavras = ["GATO", "CACHORRO", "CAVALO", "TATU"];
let palavraSecreta  = "";

function escolhePalavraSecreta() {
    let palavra = listaPalavras[Math.floor(Math.random() * listaPalavras.length)];
    palavraSecreta = palavra;
    console.log("a palavra é " + palavraSecreta);
}

//monta a palavra com os traços na tela
let listaTracos = [];

function montaPalavra() {
    let espacoPalavra = document.getElementById("palavra-secreta-div");

    for (i = 0; i < palavraSecreta.length; i++) {
        if(listaTracos[i] == undefined) {
            listaTracos[i] = "&nbsp;"
            espacoPalavra.innerHTML = espacoPalavra.innerHTML + "<div class='palavra-secreta-letra'>" + listaTracos[i] + "</div>"
        } else {
            espacoPalavra.innerHTML = espacoPalavra.innerHTML + "<div class='palavra-secreta-letra'>" + listaTracos[i] + "</div>"
        }
    }
}

//botão novo jogo
function iniciaJogo() {
    document.getElementById("div-desaparece").style.display = 'none';
    document.getElementById("sessao-teclado").style.display = 'block';
    document.getElementById("palavra-secreta-div").style.visibility = 'visible';
    
    escolhePalavraSecreta();
    montaPalavra();
}

//botao desistir 
function desisteJogo() {
    //zerar o numerode chances e dar game over 
    
    //alert("Você voltará para o menu!");
    //document.getElementById("div-desaparece").style.display = 'block';
    //document.getElementById("sessao-teclado").style.display = 'none';

    location.reload(true);   
}

//interações com o teclado
let teclado = document.getElementsByClassName('botao-teclado');

function teclaLetra(e) {
    const tecla = document.getElementById(e.key.toUpperCase());
    if (tecla) {
        console.log('apertou ' + e.key);
        tecla.style.backgroundColor = 'green';
        tecla.style.color = 'white';
        tecla.setAttribute("disabled", "disabled");
    }
}

function clicaLetra(e) {
        let clica = document.getElementById(e);
        console.log('clicou ' + e);
        clica.style.backgroundColor = 'red';
        clica.style.color = 'white';
        clica.removeAttribute('onclick');
        clica.setAttribute("disabled", "disabled");  
}

teclado.onclick = clicaLetra;
document.onkeydown = teclaLetra;

