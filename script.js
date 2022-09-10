let listaPalavras = ["GATO", "CACHORRO", "CAVALO", "TATU", "GAIVOTA", "PAVÃO", "MACACO"];
let palavraSecreta  = "";
let listaDinamica = [];
const letrasCorretas = [];
const letrasErradas = [];
let tentativas = 6;

let teclado = document.getElementsByClassName('botao-teclado');

//função para mudar a imagem da forca conforme for errando as letras
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

//criando e selecionando a palavra sorteada
function escolhePalavraSecreta() {
    let palavra = listaPalavras[Math.floor(Math.random() * listaPalavras.length)];
    palavraSecreta = palavra;
    console.log("a palavra é " + palavraSecreta);
}

//monta a palavra com os traços na tela
function montaPalavra() {
    let espacoPalavra = document.getElementById("palavra-secreta-div");

    for (i = 0; i < palavraSecreta.length; i++) {
        if(listaDinamica[i] == undefined) {
            listaDinamica[i] = "&nbsp;"
            espacoPalavra.innerHTML = espacoPalavra.innerHTML + "<div class='palavra-secreta-letra'>" + listaDinamica[i] + "</div>"
        } else {
            espacoPalavra.innerHTML = espacoPalavra.innerHTML + "<div class='palavra-secreta-letra'>" + listaDinamica[i] + "</div>"
        }
    }
}

function mostraPalavra() {
    //fazer
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
function teclaLetra(e) {
    const tecla = document.getElementById(e.key.toUpperCase());
    
    if(letrasErradas.includes(e.key.toUpperCase())) {
        alert("você já escolheu esta letra");
    } else {
        if(palavraSecreta.includes(e.key.toUpperCase())) {
        letrasCorretas.push(e.key.toUpperCase());
        tecla.style.backgroundColor = 'green';
        tecla.style.color = 'white';
        tecla.setAttribute("disabled", "disabled");
        //desavitar keypress
        } else {
            letrasErradas.push(e.key.toUpperCase());
            tecla.style.backgroundColor = 'red';
            tecla.style.color = 'white';
            mudaImagem();
            tentativas--;
            }
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
                clica.removeAttribute('onclick');
                } else {
                    letrasErradas.push(e);
                    clica.style.backgroundColor = 'red';
                    clica.style.color = 'white';
                    clica.removeAttribute('onclick');
                    mudaImagem();
                    tentativas--;
                    }
            
            if(tentativas == 0) {
                alert("você perdeu :C");
            }
        }

        
}

teclado.onclick = clicaLetra;
document.onkeydown = teclaLetra;

