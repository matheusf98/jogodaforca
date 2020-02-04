var biblioteca=["cachorro", "corvo", "camelo", "alemanha", "frança", "belgica", "mouse", "teclado", "caneta", "igor", "leo", "vitoria", "nike", "adidas", "mizuno"];
var qtde=biblioteca.length-1;
var pos=Math.round(Math.random()*qtde);
var palavra=biblioteca[pos];
var tam=palavra.length;
var cxletras=[];
var acertos;
var errosMax=7;
var erros=0;
var desenhos=[];
var acertou=false;
var jogando=false;
var jog;

function inicia() {
    jogando=true;
    jog=document.getElementById("letraj");
    jog.value="";
    jog.focus();
    acertos=0;
    erros=0;
    acertou=false;
    document.getElementById("forca").innerHTML="Letras Digitadas:";
    pos=Math.round(Math.random()*qtde);
    palavra=biblioteca[pos];
    tam=palavra.length;
    defineletras(tam);
    document.getElementById("dvmsg").innerHTML="";
   
    for(var i=1;i<7;i++){
        desenhos[i].style.display="block";
    }
}
function defineletras(l) {
    var obj;
    for(var i=0;i<20;i++) {
        obj=document.getElementById("letra"+i).Value="";
        obj=document.getElementById("letra"+i).style.display="none";
    }
    for (var i=0;i<l;i++) {
        obj=document.getElementById("letra"+i).style.display="inline-block";
    }
}
function jogar() {
    jog.focus();
    if (jog.Value=="") {
        alert("digite uma letra");
    }else{
        if (jogando) {
            var obj;
            var letraTmp;
            var letra;
            var pesq;
            letra=jog.value;
            jog.value="";
            acertou=false;
            pesq=palavra.match(letra);
            while(pesq!=null){
                letraTmp=palavra.search(letra);
                obj=document.getElementById("letra"+letraTmp).value=letra;
                palavra=palavra.replace(letra,'0');
                acertos++;
                pesq=palavra.match(letra);
                acertou=true;
            }
            if(!acertou){
                document.getElementById("forca").innerHTML+=letra.toUpperCase() + " ";
                erros++;
                if (erros<7) {
                    desenhos[erros].style.display="none";
                }else{
                    document.getElementById("forca").src="img/cabeçaperdeu.jpg";
                    document.getElementById("dvmsg").innerHTML="PERDEU";
                    jogando=false;
                }
            }
            if (acertos==tam) {
                
                document.getElementById("dvmsg").innerHTML="GANHOU";
                jogando=false;
            }
        }
    }
}
function dica() {
    alert(palavra);
    jog.focus();
}
window.addEventListener("load", inicia);


