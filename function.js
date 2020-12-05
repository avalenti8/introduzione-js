'use strict';

let nome = prompt("Qual'è il tuo nome?");
let cognome = prompt("Qual'è il tuo cognome?");
let età = prompt("Quanti anni hai?");
let func = (nome, cognome, età) => alert("Ciao " + nome + " " + cognome + ": hai " + età + " anni");

func(nome, cognome,età);

let message = (età < 10) ? "hey ma sei ancora un bimbo!" :
  (età < 18) ? "Sei un adolescente" :
  (età > 18) ? "ormai sei adulto":
  "se non vuoi dirmelo ok, però calmati";

alert(message);

alert("Ora ti farò una domanda di cruciale importanza");
alert("Se rispondi di no vieni immediatamente bruciato al rogo");
let string = "vai " + "uomo";
alert("Se dici si sei una persona saggia, " + string);
let hobby = prompt("Ti piace il calcio?");

let football = prompt("hai mai giocato a calcio?");

if(football == "si" || "Si"){
    let goals = prompt("quanti goal hai fatto in carriera?");
    if(goals >= 50){
        alert("mi hai battuto... io solo 50");
    }else{
        alert("mm, solo " + goals + " goal...");
        alert("Pensa che io ne ho fatti all'incirca 50");
    }
}else{
    alert("non sai che ti sei perso :)");
}
