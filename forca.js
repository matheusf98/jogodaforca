var palavrachave = ["cachorro", "corvo", "camelo", "alemanha", "frança", "belgica", "mouse", "teclado", "caneta", "igor", "leo", "vitoria", "nike", "adidas", "mizuno"];
var qtd = palavrachave.length - 1;
var pos = Math.round(Math.random() * qtd);
var palavra = palavrachave[pos];
var cxletras = [];
var acertos
var errosmax = 7;
var erros = 0;
var desenho = [];
var acertou = false;
var jogando = false;
var jog;

function defineletras(l) {
    var obj;
    for (var i = 0; i < 20; i++) {
        obj = document.getElementById("letra" + i).nodeValue = "";
        obj = document.getElementById("letra" + i).style.display = "none";
    }
    for (var i = 0; i < l; i++) {
        obj = document.getElementById("letra" + i).style.display = "inline-block";
    }
}

function jogar() {
    //  jog = document.getElementById("letrajog");
    jog = focus();
    if (jog.Value == "") {
        alert("digite uma letra");
    } else {
        if (jogando) {

            var obj;
            var letraTmp;
            var letra;
            var pesq;

            letra = jog.value;
            jog.value = "";
            acertou = false;
            pesq = palavra.match(letra);

            while (pesq != null) {
                letraTmp = palavra.search(letra);
                obj = document.getElementsByClassName("letra" + letraTmp).value = letra;
                palavra = palavra.replace(letra, '0');
                acertos++;
                pesq = palavra.match(letra);
                acertou = true;
            }
            if (!acertou) {
                document.getElementById("letrasdigi").innerHTML += letra.toUpperCase();
                erros++;
                if (erros < 7) {
                    desenho[erro].style.display = "block";
                }
                else {
                    document.getElementById("cabeçaPER").src = "img/cabeçaperdeu.jpg";
                    document.getElementById("msg").innerHTML = "PERDEU";
                    jogando = false;
                }
            }
            if (acertos == tam) {
                document.getElementById("msg").innerHTML = "";
                document.getElementById("msg").innerHTML = "GANHOU";
                jogando = false;
            }
        }
    }
}

function inicia() {
    jogando = true;
    jog = document.getElementById("letradigi");
    jog.value = "";
    jog.focus();
    acertos = 0;
    erro = 0;
    acertou = false;
    document.getElementById("letrasdigi").innerHTML = "Letras Digitadas";
    pos = Math.round(Math.random() * qtd);
    palavra = palavrachave[pos];
    tam = palavra.length;
    defineletras(tam);
    document.getElementById("msg").innerHTML = "";
    desenho[1] = document.getElementById("cabeça");
    desenho[2] = document.getElementById("corpo");
    desenho[3] = document.getElementById("braçoD");
    desenho[4] = document.getElementById("braçoE");
    desenho[5] = document.getElementById("pernaE");
    desenho[6] = document.getElementById("pernaD");
    document.getElementById("cabeça").src = "img/cabeça.jpg";
    for (var i = 1; i < 7; i++) {
        desenho[i].style.display = "none";
    }
}

function dica() {
    alert(palavra);
    jog.focus();
}

window.addEventListener("load", inicia);


