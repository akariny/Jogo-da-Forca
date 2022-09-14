let listaPalavras = ["GATO", "CACHORRO", "CAVALO", "TATU", "GAIVOTA", "PAVAO", "MACACO", "RATO", "PAPAGAIO", "JAVALI", "RINOCERONTE", "FALCAO", "MOSCA"];
let palavraSecreta  = listaPalavras[Math.floor(Math.random() * listaPalavras.length)];
let palavraOculta = [];

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

function desisteJogo() {
    
    let popup = document.getElementById('img').src = 'img/perdeu.png';
    let mensagem = document.getElementById('mensagem');
    mensagem.textContent = "Que pena, você perdeu :C";
    mostraPopup();
}

function novoJogo() {
    location.reload(true); 
}

function montaPalavra() {
    let espacoPalavra = document.getElementById("palavra-secreta-div");
    espacoPalavra.innerHTML = "";

    for(i = 0; i < palavraSecreta.length; i++) {
        if(palavraOculta[i] == undefined) {
            palavraOculta[i] = "&nbsp;"
            espacoPalavra.innerHTML = espacoPalavra.innerHTML + "<div class='palavra-secreta-letra'>" + palavraOculta[i] + "</div>";
        } else {
            espacoPalavra.innerHTML = espacoPalavra.innerHTML + "<div class='palavra-secreta-letra'>" + palavraOculta[i] + "</div>";
        }
    } 
}

function mostraPalavra(letra) {
    const posicao = palavraSecreta.indexOf(letra);

    if (posicao < 0) {
        tentativas--;
    } else {
        for(i = 0; i < palavraSecreta.length; i++) {
            if(palavraSecreta[i] == letra) {
                palavraOculta[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(i = 0; i < palavraSecreta.length; i++) {
        if(palavraSecreta[i] != palavraOculta[i]) {
            vitoria = false;
        }
    }

    if(vitoria){
        mostraPopup();
    }

    if(tentativas == 0) {
        desisteJogo();
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

function mostraPopup() {
    let popup = document.getElementById('popup');

    popup.style.display = 'flex';
}

function verificaLetra(e) {
    let clica = document.getElementById(e);

    if(tentativas > 0) {
        if(letrasErradas.includes(e)) {
            alert("você já escolheu esta letra");
            clica.removeAttribute('onclick');
        } else {
            if(palavraSecreta.includes(e)) {
            letrasCorretas.push(e);
            clica.style.backgroundColor = 'green';
            clica.style.color = 'white';
            clica.removeAttribute('onclick');
            } else {
                letrasErradas.push(e);
                clica.style.backgroundColor = 'red';
                clica.style.color = 'white';
                clica.removeAttribute('onclick');
                mudaImagem();
            }
        }
    }  
}

function clicaLetra(e) {
    console.log('clicou ' + e); 

    verificaLetra(e);
    mostraPalavra(e);
    montaPalavra();
}

teclado.onclick = clicaLetra;