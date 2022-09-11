let listaPalavras = ["GATO", "CACHORRO", "CAVALO", "TATU", "GAIVOTA", "PAVAO", "MACACO"];
let palavraSecreta  = listaPalavras[Math.floor(Math.random() * listaPalavras.length)];
let palavraOculta = palavraSecreta.split("");

const letrasCorretas = [];
const letrasErradas = [];

let tentativas = 6;

let teclado = document.getElementsByClassName('botao-teclado');

function iniciaJogo() {
    document.getElementById("div-desaparece").style.display = 'none';
    document.getElementById("sessao-teclado").style.display = 'block';
    document.getElementById("palavra-secreta-div").style.visibility = 'visible';
    
    console.log("A Palavra é " + palavraSecreta);
    montaPalavra();
}

function montaPalavra() {
    let espacoPalavra = document.getElementById("palavra-secreta-div");

    for(i = 0; i < palavraSecreta.length; i++) {
        palavraOculta[i] = "&nbsp;";
        espacoPalavra.innerHTML = espacoPalavra.innerHTML + "<div class='palavra-secreta-letra'>" + palavraOculta[i] + "</div>";
    };
}

function mostraPalavra(e) {
    let espacoPalavra = document.getElementById("palavra-secreta-div");

    if (palavraSecreta.includes(e) == true) {
        for(i = 0; i < palavraSecreta.length; i++){
            if (palavraSecreta[i] == e ){
                palavraOculta[i] = e;
                espacoPalavra.innerHTML = "<div class='palavra-secreta-letra'>" + palavraOculta + "</div>";
            };
        }
    }
}

function mudaImagem() {
    let imagem = ["img/forca1.png", "img/forca2.png", "img/forca3.png", "img/forca4.png", "img/forca5.png", "img/forca6.png"];
    switch(tentativas) {
        case 6: document.getElementById("imagem-forca").src = imagem[0];
        break;
        case 5: document.getElementById("imagem-forca").src = imagem[1];
        break;
        case 4: document.getElementById("imagem-forca").src = imagem[2];
        break;
        case 3: document.getElementById("imagem-forca").src = imagem[3];
        break;
        case 2: document.getElementById("imagem-forca").src = imagem[4];
        break;
        case 1: document.getElementById("imagem-forca").src = imagem[5];
        break;
        default: document.getElementById("imagem-forca").src = "img/forca.png";
        break;
    }
}

function clicaLetra(e) {
    let clica = document.getElementById(e);
    console.log('clicou ' + e); 

    if(letrasErradas.includes(e)) {
        alert("você já escolheu esta letra");
    } else {
        if(palavraSecreta.includes(e)) {
        letrasCorretas.push(e);
        clica.style.backgroundColor = 'green';
        clica.style.color = 'white';
        } else {
            letrasErradas.push(e);
            clica.style.backgroundColor = 'red';
            clica.style.color = 'white';
            mudaImagem();
            tentativas--;
        }
    }

    mostraPalavra(e);
}

teclado.onclick = clicaLetra;
