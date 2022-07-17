// korrekte Ausdrücke zur zufälligen Ausgabe
var arrayKorrekt = ["BPBPTTVVEPE","BPBTXSEPE","BTBPVVETE","BTBTSSXSETE","BTBTXSETE","BTBTXXVVETE"];

function getAusdruckKorrekt(){
    document.getElementById("expression").value = arrayKorrekt[Math.floor(Math.random() * arrayKorrekt.length)];
     document.querySelector("#playbutton").disabled = false;
}

// falsche Ausdrücke zur zufälligen Ausgabe 
var arrayFalsch = ["BPBETTVVEPE","BPETSXSEPE","BTBTSSXSETT","BTBTXXVBEXE","BTBXVVEPE","TTBPTVVETE"];

function getAusdruckFalsch(){
    document.getElementById("expression").value = arrayFalsch[Math.floor(Math.random() * arrayFalsch.length)];
     document.querySelector("#playbutton").disabled = false;
}

// wenn Ausdruck noch leer, wird der play-Button disabled
if (expression.value == 0) {
    document.querySelector("#playbutton").disabled = true;
}

// wenn manuelle Eingabe erfolgt - play-Button enabled
$("#expression").bind("keyup", function (e) {    
    document.querySelector("#playbutton").disabled = false;
});

// Animation im Graph
$(document).ready(function(){ 
// wird mit Klick auf dem Playbutton gestartet
$("#playbutton").click(function(){
      
// nicht verwendbare Buttons werden disabled
document.querySelector("#button-korrekt").disabled = true;
document.querySelector("#button-falsch").disabled = true;
document.querySelector("#expression").disabled = true;
document.querySelector("#speed").disabled = true;
document.querySelector("#playbutton").disabled = true;
      
// aktueller Ausdruck wird in ein Band umgewandelt & ausgegeben
var expression = document.getElementById("expression").value;
var expressionArray = Array.from(expression);
$("#expressionband").append(expressionArray);
      
// ausgewählte Geschwindigkeit ermitteln 
var select = document.getElementById("speed");
var value = select.options[select.selectedIndex].value;
 
if (value == 1) {
    var speed = 1500; 
} else if (value == 2) {
    var speed = 1000;
} else if (value == 3) {
    var speed = 500;
}

// weitere Variablen
var step = 0;     
var i = 0;  

// Startpfeil wird grün angezeigt
setTimeout(function() { 
$("#start_pfeil_linie").css("stroke", "#8dc68d");
$("#start_pfeil_spitze").css("fill", "#8dc68d");
}, speed*step);
step++;

// Startpfeil wieder schwarz, q0-Kreis wird grün angezeigt
setTimeout(function() { 
$("#start_pfeil_linie").css("stroke", "black");
$("#start_pfeil_spitze").css("fill", "black");
$("#start_pfeil_text").css("fill", "black");
$("#q0_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;
    
// WENN 1. STELLE = B
if (expressionArray[i] == "B") {

// TO-DO
// B wird im Band zu ⌴ 
var expressionQ0 = expressionArray;
expressionQ0[i] = "⌴";
var expressionQ1 = expressionQ0;
    
// q0-Kreis wieder schwarz, q0q1-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() {     
$("#q0_kreis").css("fill", "white");
$("#q0q1_pfeil_linie").css("stroke", "#8dc68d");
$("#q0q1_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ1);
}, speed*step);
step++; 

// q0q1-Pfeil wieder schwarz, q1-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q0q1_pfeil_linie").css("stroke", "black");
$("#q0q1_pfeil_spitze").css("fill", "black");
$("#q1_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;
// Springe zur 2. Index-Stelle im Array
i++;

// WENN 2. STELLE = T ODER P
if ((expressionArray[i] == "T") || (expressionArray[i] == "P")) { 
// q1-Kreis wieder schwarz, q1q2-Pfeil wird grün angezeigt, Band bleibt gleich
setTimeout(function() { 
$("#q1_kreis").css("fill", "white");
$("#q1q2_pfeil_linie").css("stroke", "#8dc68d");
$("#q1q2_pfeil_spitze").css("fill", "#8dc68d");    
}, speed*step);
step++; 

// q0q1-Pfeil wieder schwarz, q1-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q1q2_pfeil_linie").css("stroke", "black");
$("#q1q2_pfeil_spitze").css("fill", "black");
$("#q2_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;
// Springe zur 3. Index-Stelle im Array
i++;
    
// WENN DRITTE STELLE = B
if (expressionArray[i] == "B") {

// TO-DO
// B wird im Band zu ⌴
var expressionQ2 = expressionArray;
expressionQ2[i] = "⌴";
var expressionQ3 = expressionQ2;
    
// q2-Kreis wieder schwarz, q2q3-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q2_kreis").css("fill", "white");
$("#q2q3_pfeil_linie").css("stroke", "#8dc68d");
$("#q2q3_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ3);    
}, speed*step);
step++; 

// q2q3-Pfeil wieder schwarz, q3-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q2q3_pfeil_linie").css("stroke", "black");
$("#q2q3_pfeil_spitze").css("fill", "black");
$("#q3_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;
// Springe zur 4. Index-Stelle im Array
i++;
    
// WENN VIERTE STELLE = T
if (expressionArray[i] == "T") {

// TO-DO
// T wird im Band zu ⌴
var expressionQ3 = expressionArray;
expressionQ3[i] = "⌴";
var expressionQ4 = expressionQ3;
    
// q3-Kreis wieder schwarz, q3q4-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q3_kreis").css("fill", "white");
$("#q3q4_pfeil_linie").css("stroke", "#8dc68d");
$("#q3q4_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ4);    
}, speed*step);
step++; 

// q3q4-Pfeil wieder schwarz, q4-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q3q4_pfeil_linie").css("stroke", "black");
$("#q3q4_pfeil_spitze").css("fill", "black");
$("#q4_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;
// Springe zur 5. Index-Stelle im Array
i++;

// WENN FÜNFTE STELLE = S
if (expressionArray[i] == "S") {
    
// TO-DO
// S wird im Band zu ⌴
var expressionQ4 = expressionArray;
expressionQ4[i] = "⌴";
var expressionQ5 = expressionQ4;
    
// q4-Kreis wieder schwarz, q4-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q4_kreis").css("fill", "white");
$("#q4_pfeil_linie").css("stroke", "#8dc68d");
$("#q4_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ5);    
}, speed*step);
step++; 
    
// q4-Pfeil wieder schwarz, q4-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q4_pfeil_linie").css("stroke", "black");
$("#q4_pfeil_spitze").css("fill", "black");
$("#q4_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;    
// Springe zur 6. Index-Stelle im Array
i++;
    
// WENN SECHSTE STELLE = S
if (expressionArray[i] == "S") {
    
// TO-DO
// S wird im Band zu ⌴
var expressionQ4 = expressionArray;
expressionQ4[i] = "⌴";
var expressionQ5_2 = expressionQ4;
    
// q4-Kreis wieder schwarz, q4-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q4_kreis").css("fill", "white");
$("#q4_pfeil_linie").css("stroke", "#8dc68d");
$("#q4_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ5_2);    
}, speed*step);
step++; 
    
// q4-Pfeil wieder schwarz, q4-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q4_pfeil_linie").css("stroke", "black");
$("#q4_pfeil_spitze").css("fill", "black");
$("#q4_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;    
// Springe zur 7. Index-Stelle im Array
i++;
    
// WENN SIEBTE STELLE = X
if (expressionArray[i] == "X") {
    
// TO-DO
// X wird im Band zu ⌴
var expressionQ4 = expressionArray;
expressionQ4[i] = "⌴";
var expressionQ6 = expressionQ4;
    
// q4-Kreis wieder schwarz, q4q6-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q4_kreis").css("fill", "white");
$("#q4q6_pfeil_linie").css("stroke", "#8dc68d");
$("#q4q6_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ6);    
}, speed*step);
step++; 
    
// q4-Pfeil wieder schwarz, q4-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q4q6_pfeil_linie").css("stroke", "black");
$("#q4q6_pfeil_spitze").css("fill", "black");
$("#q6_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;    
// Springe zur 8. Index-Stelle im Array
i++;

// WENN ACHTE STELLE = S
if (expressionArray[i] == "S") {
    
// TO-DO
// S wird im Band zu ⌴
var expressionQ6 = expressionArray;
expressionQ6[i] = "⌴";
var expressionQ8 = expressionQ6;
    
// q6-Kreis wieder schwarz, q6q8-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q6_kreis").css("fill", "white");
$("#q6q8_pfeil_linie").css("stroke", "#8dc68d");
$("#q6q8_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ9);    
}, speed*step);
step++; 
    
// q6q8-Pfeil wieder schwarz, q8-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q6q8_pfeil_linie").css("stroke", "black");
$("#q6q8_pfeil_spitze").css("fill", "black");
$("#q8_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;    
// Springe zur 9. Index-Stelle im Array
i++;

// WENN NEUNTE STELLE = E
if (expressionArray[i] == "E") {
    
// TO-DO
// E wird im Band zu ⌴
var expressionQ8 = expressionArray;
expressionQ8[i] = "⌴";
var expressionQ9 = expressionQ8;
    
// q8-Kreis wieder schwarz, q8q9-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q8_kreis").css("fill", "white");
$("#q8q9_pfeil_linie").css("stroke", "#8dc68d");
$("#q8q9_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ9);    
}, speed*step);
step++; 
    
// q6q8-Pfeil wieder schwarz, q8-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q8q9_pfeil_linie").css("stroke", "black");
$("#q8q9_pfeil_spitze").css("fill", "black");
$("#q9_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;    
// Springe zur 10. Index-Stelle im Array
i++;

// WENN ZEHNTE STELLE = T
if (expressionArray[i] == "T") {
    
// TO-DO
// T wird im Band zu ⌴
var expressionQ9 = expressionArray;
expressionQ9[i] = "⌴";
var expressionQ10 = expressionQ9;
    
// q9-Kreis wieder schwarz, q9q10-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q9_kreis").css("fill", "white");
$("#q9q10_pfeil_linie").css("stroke", "#8dc68d");
$("#q9q10_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ10);    
}, speed*step);
step++; 
  
// q9q10-Pfeil wieder schwarz, q10-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q9q10_pfeil_linie").css("stroke", "black");
$("#q9q10_pfeil_spitze").css("fill", "black");
$("#q10_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;

// RICHTUNGSWECHSEL NACH LINKS - SCHLEIFE BIS ZUM NOCH VORHANDENEN T
for (a = 0; a < 7; a++) {  
// q10-Kreis wieder schwarz, q10-Pfeil wird grün angezeigt
setTimeout(function() { 
$("#q10_kreis").css("fill", "white");
$("#q10_pfeil_linie").css("stroke", "#8dc68d");
$("#q10_pfeil_spitze").css("fill", "#8dc68d");    
}, speed*step);
step++; 

// q10-Pfeil wieder schwarz, q10-Kreis grün
setTimeout(function() { 
$("#q10_kreis").css("fill", "#8dc68d");
$("#q10_pfeil_linie").css("stroke", "black");
$("#q10_pfeil_spitze").css("fill", "black");    
}, speed*step);
step++; 
} 

// TO-DO
// T an 2. Stelle wird im Band zu ⌴
var expression10 = expressionArray;
expressionQ10[1] = "⌴";
var expressionQ11 = expressionQ10;
    
// q10-Kreis wieder schwarz, q10q12-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q10_kreis").css("fill", "white");
$("#q10q12_pfeil_linie").css("stroke", "#8dc68d");
$("#q10q12_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ11);    
}, speed*step);
step++; 
  
// q10q12-Pfeil wieder schwarz, q12-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q10q12_pfeil_linie").css("stroke", "black");
$("#q10q12_pfeil_spitze").css("fill", "black");
$("#q12_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;
    
// RICHTUNGSWECHSEL NACH RECHTS - SCHLEIFE BIS ZUM NOCH VORHANDENEN E
for (a = 0; a < 7; a++) {  
// q12-Kreis wieder schwarz, q12-Pfeil wird grün angezeigt
setTimeout(function() { 
$("#q12_kreis").css("fill", "white");
$("#q12_pfeil_linie").css("stroke", "#8dc68d");
$("#q12_pfeil_spitze").css("fill", "#8dc68d");    
}, speed*step);
step++; 

// q12-Pfeil wieder schwarz, q10-Kreis grün
setTimeout(function() { 
$("#q12_kreis").css("fill", "#8dc68d");
$("#q12_pfeil_linie").css("stroke", "black");
$("#q12_pfeil_spitze").css("fill", "black");    
}, speed*step);
step++; 
}
// Springe zur 11. Index-Stelle im Array
i++;

// WENN ELFTE STELLE = E
if (expressionArray[i] == "E") {

// TO-DO
// E wird im Band zu ⌴
var expressionQ12 = expressionArray;
expressionQ12[i] = "⌴";
var expressionQ13 = expressionQ12;
    
// q12-Kreis wieder schwarz, q12q13-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q12_kreis").css("fill", "white");
$("#q12q13_pfeil_linie").css("stroke", "#8dc68d");
$("#q12q13_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ13);    
}, speed*step);
step++; 
  
// q12q13-Pfeil wieder schwarz, q13-Kreis wird grün angezeigt, Endzustand
setTimeout(function() { 
$("#q12q13_pfeil_linie").css("stroke", "black");
$("#q12q13_pfeil_spitze").css("fill", "black");
$("#q13_kreis").css("fill", "#8dc68d");
// Band wird grün
$("#expressionband").css("color", "#709e70");
// Auswertung "Ausdruck gültig" in grün, damit Ende
$("#auswertung").css("color", "#709e70");  
$("#auswertung").append("Ausdruck ist gültig");
}, speed*step);
    
} // schließende Klammer für if (elfte Stelle = E)
    
// WENN ELFTE STELLE != E
else {
// q12-Kreis wieder schwarz, q12q13-Pfeil wird rot angezeigt
setTimeout(function() { 
$("#q12_kreis").css("fill", "white");
$("#q12q13_pfeil_linie").css("stroke", "#ff6666");
$("#q12q13_pfeil_spitze").css("fill", "#ff6666");
// Band wird rot
$("#expressionband").css("color", "#e55b5b");
// Auswertung "Ausdruck ungültig" in rot, damit Ende
$("#auswertung").css("color", "#e55b5b");  
$("#auswertung").append("Ausdruck ist ungültig");
}, speed*step);
step++;     
} // schließende Klammer für if (elfte Stelle != E) 
 
} // schließende Klammer für if (zehnte Stelle = T)
    
} // schließende Klammer für if (neunte Stelle = E)
    
} // schließende Klammer für if (achte Stelle = S)
    
} // schließende Klammer für if (siebte Stelle = X)
   
} // schließende Klammer für if (sechste Stelle = S)
    
} // schließende Klammer für if (fünfte Stelle = S)

// WENN FÜNFTE STELLE = X
else if (expressionArray[i] == "X") {
    
// TO-DO
// X wird im Band zu ⌴
var expressionQ4 = expressionArray;
expressionQ4[i] = "⌴";
var expressionQ5 = expressionQ4;
    
// q4-Kreis wieder schwarz, q4q6-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q4_kreis").css("fill", "white");
$("#q4q6_pfeil_linie").css("stroke", "#8dc68d");
$("#q4q6_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ6);    
}, speed*step);
step++; 
    
// q4-Pfeil wieder schwarz, q4-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q4q6_pfeil_linie").css("stroke", "black");
$("#q4q6_pfeil_spitze").css("fill", "black");
$("#q6_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;    
// Springe zur 6. Index-Stelle im Array
i++;

// WENN SECHTE STELLE = S
if (expressionArray[i] == "S") {
    
// TO-DO
// S wird im Band zu ⌴
var expressionQ6 = expressionArray;
expressionQ6[i] = "⌴";
var expressionQ8 = expressionQ6;
    
// q6-Kreis wieder schwarz, q6q8-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q6_kreis").css("fill", "white");
$("#q6q8_pfeil_linie").css("stroke", "#8dc68d");
$("#q6q8_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ9);    
}, speed*step);
step++; 
    
// q6q8-Pfeil wieder schwarz, q8-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q6q8_pfeil_linie").css("stroke", "black");
$("#q6q8_pfeil_spitze").css("fill", "black");
$("#q8_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;    
// Springe zur 7. Index-Stelle im Array
i++;

// WENN SIEBTE STELLE = E
if (expressionArray[i] == "E") {
    
// TO-DO
// E wird im Band zu ⌴
var expressionQ8 = expressionArray;
expressionQ8[i] = "⌴";
var expressionQ9 = expressionQ8;
    
// q8-Kreis wieder schwarz, q8q9-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q8_kreis").css("fill", "white");
$("#q8q9_pfeil_linie").css("stroke", "#8dc68d");
$("#q8q9_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ9);    
}, speed*step);
step++; 
    
// q6q8-Pfeil wieder schwarz, q8-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q8q9_pfeil_linie").css("stroke", "black");
$("#q8q9_pfeil_spitze").css("fill", "black");
$("#q9_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;    
// Springe zur 8. Index-Stelle im Array
i++;
    
// WENN ACHTE STELLE = P
if (expressionArray[i] == "P") {
    
// TO-DO
// P wird im Band zu ⌴
var expressionQ9 = expressionArray;
expressionQ9[i] = "⌴";
var expressionQ10 = expressionQ9;
    
// q9-Kreis wieder schwarz, q9q11-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q9_kreis").css("fill", "white");
$("#q9q11_pfeil_linie").css("stroke", "#8dc68d");
$("#q9q11_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ10);    
}, speed*step);
step++; 
  
// q9q11-Pfeil wieder schwarz, q11-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q9q11_pfeil_linie").css("stroke", "black");
$("#q9q11_pfeil_spitze").css("fill", "black");
$("#q11_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;

// RICHTUNGSWECHSEL NACH LINKS - SCHLEIFE BIS ZUM NOCH VORHANDENEN P
for (a = 0; a < 6; a++) {  
// q11-Kreis wieder schwarz, q11-Pfeil wird grün angezeigt
setTimeout(function() { 
$("#q11_kreis").css("fill", "white");
$("#q11_pfeil_linie").css("stroke", "#8dc68d");
$("#q11_pfeil_spitze").css("fill", "#8dc68d");    
}, speed*step);
step++; 

// q11-Pfeil wieder schwarz, q11-Kreis grün
setTimeout(function() { 
$("#q11_kreis").css("fill", "#8dc68d");
$("#q11_pfeil_linie").css("stroke", "black");
$("#q11_pfeil_spitze").css("fill", "black");    
}, speed*step);
step++; 
} 

// TO-DO
// P an 2. Stelle wird im Band zu ⌴
var expression9 = expressionArray;
expressionQ9[1] = "⌴";
var expressionQ11 = expressionQ10;
    
// q11-Kreis wieder schwarz, q11q12-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q11_kreis").css("fill", "white");
$("#q11q12_pfeil_linie").css("stroke", "#8dc68d");
$("#q11q12_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ11);    
}, speed*step);
step++; 
  
// q11q12-Pfeil wieder schwarz, q12-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q11q12_pfeil_linie").css("stroke", "black");
$("#q11q12_pfeil_spitze").css("fill", "black");
$("#q12_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;
    
// RICHTUNGSWECHSEL NACH RECHTS - SCHLEIFE BIS ZUM NOCH VORHANDENEN E
for (a = 0; a < 6; a++) {  
// q12-Kreis wieder schwarz, q12-Pfeil wird grün angezeigt
setTimeout(function() { 
$("#q12_kreis").css("fill", "white");
$("#q12_pfeil_linie").css("stroke", "#8dc68d");
$("#q12_pfeil_spitze").css("fill", "#8dc68d");    
}, speed*step);
step++; 

// q12-Pfeil wieder schwarz, q10-Kreis grün
setTimeout(function() { 
$("#q12_kreis").css("fill", "#8dc68d");
$("#q12_pfeil_linie").css("stroke", "black");
$("#q12_pfeil_spitze").css("fill", "black");    
}, speed*step);
step++; 
}
// Springe zur 9. Index-Stelle im Array
i++;

// WENN NEUNTE STELLE = E
if (expressionArray[i] == "E") {
    
// TO-DO
// E wird im Band zu ⌴
var expressionQ12 = expressionArray;
expressionQ12[i] = "⌴";
var expressionQ13 = expressionQ12;
    
// q12-Kreis wieder schwarz, q12q13-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q12_kreis").css("fill", "white");
$("#q12q13_pfeil_linie").css("stroke", "#8dc68d");
$("#q12q13_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ13);    
}, speed*step);
step++; 
  
// q12q13-Pfeil wieder schwarz, q13-Kreis wird grün angezeigt, Endzustand
setTimeout(function() { 
$("#q12q13_pfeil_linie").css("stroke", "black");
$("#q12q13_pfeil_spitze").css("fill", "black");
$("#q13_kreis").css("fill", "#8dc68d");
// Band wird grün
$("#expressionband").css("color", "#709e70");
// Auswertung "Ausdruck gültig" in grün, damit Ende
$("#auswertung").css("color", "#709e70");  
$("#auswertung").append("Ausdruck ist gültig");
}, speed*step);
    
} // schließende Klammer für if (neunte Stelle = E)
 
} // schließende Klammer für if (achte Stelle = P)
    
// WENN ACHTE STELLE = T
else if (expressionArray[i] == "T") {
    
// TO-DO
// T wird im Band zu ⌴
var expressionQ9 = expressionArray;
expressionQ9[i] = "⌴";
var expressionQ10 = expressionQ9;
    
// q9-Kreis wieder schwarz, q9q10-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q9_kreis").css("fill", "white");
$("#q9q10_pfeil_linie").css("stroke", "#8dc68d");
$("#q9q10_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ10);    
}, speed*step);
step++; 
  
// q9q10-Pfeil wieder schwarz, q10-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q9q10_pfeil_linie").css("stroke", "black");
$("#q9q10_pfeil_spitze").css("fill", "black");
$("#q10_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;

// RICHTUNGSWECHSEL NACH LINKS - SCHLEIFE BIS ZUM NOCH VORHANDENEN T
for (a = 0; a < 6; a++) {  
// q10-Kreis wieder schwarz, q10-Pfeil wird grün angezeigt
setTimeout(function() { 
$("#q10_kreis").css("fill", "white");
$("#q10_pfeil_linie").css("stroke", "#8dc68d");
$("#q10_pfeil_spitze").css("fill", "#8dc68d");    
}, speed*step);
step++; 

// q10-Pfeil wieder schwarz, q10-Kreis grün
setTimeout(function() { 
$("#q10_kreis").css("fill", "#8dc68d");
$("#q10_pfeil_linie").css("stroke", "black");
$("#q10_pfeil_spitze").css("fill", "black");    
}, speed*step);
step++; 
} 

// TO-DO
// T an 2. Stelle wird im Band zu ⌴
var expression10 = expressionArray;
expressionQ10[1] = "⌴";
var expressionQ11 = expressionQ10;
    
// q10-Kreis wieder schwarz, q10q12-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q10_kreis").css("fill", "white");
$("#q10q12_pfeil_linie").css("stroke", "#8dc68d");
$("#q10q12_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ11);    
}, speed*step);
step++; 
  
// q10q12-Pfeil wieder schwarz, q12-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q10q12_pfeil_linie").css("stroke", "black");
$("#q10q12_pfeil_spitze").css("fill", "black");
$("#q12_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;
    
// RICHTUNGSWECHSEL NACH RECHTS - SCHLEIFE BIS ZUM NOCH VORHANDENEN E
for (a = 0; a < 6; a++) {  
// q12-Kreis wieder schwarz, q12-Pfeil wird grün angezeigt
setTimeout(function() { 
$("#q12_kreis").css("fill", "white");
$("#q12_pfeil_linie").css("stroke", "#8dc68d");
$("#q12_pfeil_spitze").css("fill", "#8dc68d");    
}, speed*step);
step++; 

// q12-Pfeil wieder schwarz, q10-Kreis grün
setTimeout(function() { 
$("#q12_kreis").css("fill", "#8dc68d");
$("#q12_pfeil_linie").css("stroke", "black");
$("#q12_pfeil_spitze").css("fill", "black");    
}, speed*step);
step++; 
}
// Springe zur 9. Index-Stelle im Array
i++;

// WENN NEUNTE STELLE = E
if (expressionArray[i] == "E") {
    
// TO-DO
// E wird im Band zu ⌴
var expressionQ12 = expressionArray;
expressionQ12[i] = "⌴";
var expressionQ13 = expressionQ12;
    
// q12-Kreis wieder schwarz, q12q13-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q12_kreis").css("fill", "white");
$("#q12q13_pfeil_linie").css("stroke", "#8dc68d");
$("#q12q13_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ13);    
}, speed*step);
step++; 
  
// q12q13-Pfeil wieder schwarz, q13-Kreis wird grün angezeigt, Endzustand
setTimeout(function() { 
$("#q12q13_pfeil_linie").css("stroke", "black");
$("#q12q13_pfeil_spitze").css("fill", "black");
$("#q13_kreis").css("fill", "#8dc68d");
// Band wird grün
$("#expressionband").css("color", "#709e70");
// Auswertung "Ausdruck gültig" in grün, damit Ende
$("#auswertung").css("color", "#709e70");  
$("#auswertung").append("Ausdruck ist gültig");
}, speed*step);
    
} // schließende Klammer für if (neunte Stelle = E)

} // schließende Klammer für if (achte Stelle = T)
    
} // schließende Klammer für if (siebte Stelle = E)

} // schließende Klammer für if (sechste Stelle = S) 
    
// WENN SECHSTE STELLE = X
else if (expressionArray[i] == "X") {
    
// TO-DO
// X wird im Band zu ⌴
var expressionQ6 = expressionArray;
expressionQ6[i] = "⌴";
var expressionQ5 = expressionQ6;
    
// q6-Kreis wieder schwarz, q6q5-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q6_kreis").css("fill", "white");
$("#q6q5_pfeil_linie").css("stroke", "#8dc68d");
$("#q6q5_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ5);    
}, speed*step);
step++; 
    
// q6q5-Pfeil wieder schwarz, q5-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q6q5_pfeil_linie").css("stroke", "black");
$("#q6q5_pfeil_spitze").css("fill", "black");
$("#q5_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;    
// Springe zur 7. Index-Stelle im Array
i++;
    
 // WENN SIEBTE STELLE = V
if (expressionArray[i] == "V") {
    
// TO-DO
// V wird im Band zu ⌴
var expressionQ5 = expressionArray;
expressionQ5[i] = "⌴";
var expressionQ7 = expressionQ5;
    
// q5-Kreis wieder schwarz, q5q7-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q5_kreis").css("fill", "white");
$("#q5q7_pfeil_linie").css("stroke", "#8dc68d");
$("#q5q7_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ7);    
}, speed*step);
step++; 
    
// q5q7-Pfeil wieder schwarz, q7-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q5q7_pfeil_linie").css("stroke", "black");
$("#q5q7_pfeil_spitze").css("fill", "black");
$("#q7_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;    
// Springe zur 8. Index-Stelle im Array
i++;
    
// WENN ACHTE STELLE = V
if (expressionArray[i] == "V") {
    
// TO-DO
// V wird im Band zu ⌴
var expressionQ7 = expressionArray;
expressionQ7[i] = "⌴";
var expressionQ8 = expressionQ7;
    
// q7-Kreis wieder schwarz, q7q8-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q7_kreis").css("fill", "white");
$("#q7q8_pfeil_linie").css("stroke", "#8dc68d");
$("#q7q8_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ8);    
}, speed*step);
step++; 
    
// q7q8-Pfeil wieder schwarz, q8-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q7q8_pfeil_linie").css("stroke", "black");
$("#q7q8_pfeil_spitze").css("fill", "black");
$("#q8_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;    
// Springe zur 9. Index-Stelle im Array
i++;
    
// WENN NEUNTE STELLE = E
if (expressionArray[i] == "E") {
    
// TO-DO
// E wird im Band zu ⌴
var expressionQ8 = expressionArray;
expressionQ8[i] = "⌴";
var expressionQ9 = expressionQ8;
    
// q8-Kreis wieder schwarz, q8q9-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q8_kreis").css("fill", "white");
$("#q8q9_pfeil_linie").css("stroke", "#8dc68d");
$("#q8q9_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ9);    
}, speed*step);
step++; 
    
// q6q8-Pfeil wieder schwarz, q8-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q8q9_pfeil_linie").css("stroke", "black");
$("#q8q9_pfeil_spitze").css("fill", "black");
$("#q9_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;    
// Springe zur 10. Index-Stelle im Array
i++;

// WENN ZEHNTE STELLE = T
if (expressionArray[i] == "T") {
    
// TO-DO
// T wird im Band zu ⌴
var expressionQ9 = expressionArray;
expressionQ9[i] = "⌴";
var expressionQ10 = expressionQ9;
    
// q9-Kreis wieder schwarz, q9q10-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q9_kreis").css("fill", "white");
$("#q9q10_pfeil_linie").css("stroke", "#8dc68d");
$("#q9q10_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ10);    
}, speed*step);
step++; 
  
// q9q10-Pfeil wieder schwarz, q10-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q9q10_pfeil_linie").css("stroke", "black");
$("#q9q10_pfeil_spitze").css("fill", "black");
$("#q10_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;

// RICHTUNGSWECHSEL NACH LINKS - SCHLEIFE BIS ZUM NOCH VORHANDENEN T
for (a = 0; a < 6; a++) {  
// q10-Kreis wieder schwarz, q10-Pfeil wird grün angezeigt
setTimeout(function() { 
$("#q10_kreis").css("fill", "white");
$("#q10_pfeil_linie").css("stroke", "#8dc68d");
$("#q10_pfeil_spitze").css("fill", "#8dc68d");    
}, speed*step);
step++; 

// q10-Pfeil wieder schwarz, q10-Kreis grün
setTimeout(function() { 
$("#q10_kreis").css("fill", "#8dc68d");
$("#q10_pfeil_linie").css("stroke", "black");
$("#q10_pfeil_spitze").css("fill", "black");    
}, speed*step);
step++; 
} 

// TO-DO
// T an 2. Stelle wird im Band zu ⌴
var expression10 = expressionArray;
expressionQ10[1] = "⌴";
var expressionQ11 = expressionQ10;
    
// q10-Kreis wieder schwarz, q10q12-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q10_kreis").css("fill", "white");
$("#q10q12_pfeil_linie").css("stroke", "#8dc68d");
$("#q10q12_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ11);    
}, speed*step);
step++; 
  
// q10q12-Pfeil wieder schwarz, q12-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q10q12_pfeil_linie").css("stroke", "black");
$("#q10q12_pfeil_spitze").css("fill", "black");
$("#q12_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;
    
// RICHTUNGSWECHSEL NACH RECHTS - SCHLEIFE BIS ZUM NOCH VORHANDENEN E
for (a = 0; a < 6; a++) {  
// q12-Kreis wieder schwarz, q12-Pfeil wird grün angezeigt
setTimeout(function() { 
$("#q12_kreis").css("fill", "white");
$("#q12_pfeil_linie").css("stroke", "#8dc68d");
$("#q12_pfeil_spitze").css("fill", "#8dc68d");    
}, speed*step);
step++; 

// q12-Pfeil wieder schwarz, q10-Kreis grün
setTimeout(function() { 
$("#q12_kreis").css("fill", "#8dc68d");
$("#q12_pfeil_linie").css("stroke", "black");
$("#q12_pfeil_spitze").css("fill", "black");    
}, speed*step);
step++; 
}
// Springe zur 9. Index-Stelle im Array
i++;

// WENN ELFTE STELLE = E
if (expressionArray[i] == "E") {
    
// TO-DO
// E wird im Band zu ⌴
var expressionQ12 = expressionArray;
expressionQ12[i] = "⌴";
var expressionQ13 = expressionQ12;
    
// q12-Kreis wieder schwarz, q12q13-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q12_kreis").css("fill", "white");
$("#q12q13_pfeil_linie").css("stroke", "#8dc68d");
$("#q12q13_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ13);    
}, speed*step);
step++; 
  
// q12q13-Pfeil wieder schwarz, q13-Kreis wird grün angezeigt, Endzustand
setTimeout(function() { 
$("#q12q13_pfeil_linie").css("stroke", "black");
$("#q12q13_pfeil_spitze").css("fill", "black");
$("#q13_kreis").css("fill", "#8dc68d");
// Band wird grün
$("#expressionband").css("color", "#709e70");
// Auswertung "Ausdruck gültig" in grün, damit Ende
$("#auswertung").css("color", "#709e70");  
$("#auswertung").append("Ausdruck ist gültig");
}, speed*step);
    
} // schließende Klammer für if (elfte Stelle = E)

} // schließende Klammer für if (zehnte Stelle = T)

} // schließende Klammer für if (neunte Stelle = E)
    
} // schließende Klammer für if (achte Stelle = V) 
    
// WENN ACHTE STELLE != V
else {
// q7-Kreis wieder schwarz, q7q8-Pfeil wird rot angezeigt
setTimeout(function() { 
$("#q7_kreis").css("fill", "white");
$("#q7q8_pfeil_linie").css("stroke", "#ff6666");
$("#q7q8_pfeil_spitze").css("fill", "#ff6666");
// Band wird rot
$("#expressionband").css("color", "#e55b5b");
// Auswertung "Ausdruck ungültig" in rot, damit Ende
$("#auswertung").css("color", "#e55b5b");  
$("#auswertung").append("Ausdruck ist ungültig");
}, speed*step);
step++;     
} // schließende Klammer für if (achte Stelle != V)
    
} // schließende Klammer für if (siebte Stelle = V)    
    
} // schließende Klammer für if (sechte Stelle = X)
    
} // schließende Klammer für if (fünfte Stelle = X)

} // schließende Klammer für if (vierte Stelle = T)

// WENN VIERTE STELLE = P
else if (expressionArray[i] == "P") {
    
// TO-DO
// P wird im Band zu ⌴
var expressionQ3 = expressionArray;
expressionQ3[i] = "⌴";
var expressionQ5 = expressionQ3;
    
// q3-Kreis wieder schwarz, q3q5-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q3_kreis").css("fill", "white");
$("#q3q5_pfeil_linie").css("stroke", "#8dc68d");
$("#q3q5_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ5);    
}, speed*step);
step++; 

// q3q5-Pfeil wieder schwarz, q5-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q3q5_pfeil_linie").css("stroke", "black");
$("#q3q5_pfeil_spitze").css("fill", "black");
$("#q5_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;
// Springe zur 5. Index-Stelle im Array
i++;
    
// WENN FÜNFTE STELLE = V
if (expressionArray[i] == "V") {
    
// TO-DO
// V wird im Band zu ⌴
var expressionQ5 = expressionArray;
expressionQ5[i] = "⌴";
var expressionQ7 = expressionQ5;
    
// q5-Kreis wieder schwarz, q5q7-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q5_kreis").css("fill", "white");
$("#q5q7_pfeil_linie").css("stroke", "#8dc68d");
$("#q5q7_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ7);    
}, speed*step);
step++; 
    
// q5q7-Pfeil wieder schwarz, q7-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q5q7_pfeil_linie").css("stroke", "black");
$("#q5q7_pfeil_spitze").css("fill", "black");
$("#q7_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;    
// Springe zur 6. Index-Stelle im Array
i++;
    
// WENN SECHSTE STELLE = V
if (expressionArray[i] == "V") {
    
// TO-DO
// V wird im Band zu ⌴
var expressionQ7 = expressionArray;
expressionQ7[i] = "⌴";
var expressionQ8 = expressionQ7;
    
// q7-Kreis wieder schwarz, q7q8-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q7_kreis").css("fill", "white");
$("#q7q8_pfeil_linie").css("stroke", "#8dc68d");
$("#q7q8_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ8);    
}, speed*step);
step++; 
    
// q7q8-Pfeil wieder schwarz, q8-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q7q8_pfeil_linie").css("stroke", "black");
$("#q7q8_pfeil_spitze").css("fill", "black");
$("#q8_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;    
// Springe zur 7. Index-Stelle im Array
i++;
    
// WENN SIEBTE STELLE = E
if (expressionArray[i] == "E") {
    
// TO-DO
// E wird im Band zu ⌴
var expressionQ8 = expressionArray;
expressionQ8[i] = "⌴";
var expressionQ9 = expressionQ8;
    
// q8-Kreis wieder schwarz, q8q9-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q8_kreis").css("fill", "white");
$("#q8q9_pfeil_linie").css("stroke", "#8dc68d");
$("#q8q9_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ9);    
}, speed*step);
step++; 
    
// q6q8-Pfeil wieder schwarz, q8-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q8q9_pfeil_linie").css("stroke", "black");
$("#q8q9_pfeil_spitze").css("fill", "black");
$("#q9_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;    
// Springe zur 8. Index-Stelle im Array
i++;

// WENN ACHTE STELLE = T
if (expressionArray[i] == "T") {
    
// TO-DO
// T wird im Band zu ⌴
var expressionQ9 = expressionArray;
expressionQ9[i] = "⌴";
var expressionQ10 = expressionQ9;
    
// q9-Kreis wieder schwarz, q9q10-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q9_kreis").css("fill", "white");
$("#q9q10_pfeil_linie").css("stroke", "#8dc68d");
$("#q9q10_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ10);    
}, speed*step);
step++; 
  
// q9q10-Pfeil wieder schwarz, q10-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q9q10_pfeil_linie").css("stroke", "black");
$("#q9q10_pfeil_spitze").css("fill", "black");
$("#q10_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;

// RICHTUNGSWECHSEL NACH LINKS - SCHLEIFE BIS ZUM NOCH VORHANDENEN T
for (a = 0; a < 6; a++) {  
// q10-Kreis wieder schwarz, q10-Pfeil wird grün angezeigt
setTimeout(function() { 
$("#q10_kreis").css("fill", "white");
$("#q10_pfeil_linie").css("stroke", "#8dc68d");
$("#q10_pfeil_spitze").css("fill", "#8dc68d");    
}, speed*step);
step++; 

// q10-Pfeil wieder schwarz, q10-Kreis grün
setTimeout(function() { 
$("#q10_kreis").css("fill", "#8dc68d");
$("#q10_pfeil_linie").css("stroke", "black");
$("#q10_pfeil_spitze").css("fill", "black");    
}, speed*step);
step++; 
} 

// TO-DO
// T an 2. Stelle wird im Band zu ⌴
var expression10 = expressionArray;
expressionQ10[1] = "⌴";
var expressionQ11 = expressionQ10;
    
// q10-Kreis wieder schwarz, q10q12-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q10_kreis").css("fill", "white");
$("#q10q12_pfeil_linie").css("stroke", "#8dc68d");
$("#q10q12_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ11);    
}, speed*step);
step++; 
  
// q10q12-Pfeil wieder schwarz, q12-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q10q12_pfeil_linie").css("stroke", "black");
$("#q10q12_pfeil_spitze").css("fill", "black");
$("#q12_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;
    
// RICHTUNGSWECHSEL NACH RECHTS - SCHLEIFE BIS ZUM NOCH VORHANDENEN E
for (a = 0; a < 6; a++) {  
// q12-Kreis wieder schwarz, q12-Pfeil wird grün angezeigt
setTimeout(function() { 
$("#q12_kreis").css("fill", "white");
$("#q12_pfeil_linie").css("stroke", "#8dc68d");
$("#q12_pfeil_spitze").css("fill", "#8dc68d");    
}, speed*step);
step++; 

// q12-Pfeil wieder schwarz, q10-Kreis grün
setTimeout(function() { 
$("#q12_kreis").css("fill", "#8dc68d");
$("#q12_pfeil_linie").css("stroke", "black");
$("#q12_pfeil_spitze").css("fill", "black");    
}, speed*step);
step++; 
}
// Springe zur 9. Index-Stelle im Array
i++;

// WENN NEUNTE STELLE = E
if (expressionArray[i] == "E") {
    
// TO-DO
// E wird im Band zu ⌴
var expressionQ12 = expressionArray;
expressionQ12[i] = "⌴";
var expressionQ13 = expressionQ12;
    
// q12-Kreis wieder schwarz, q12q13-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q12_kreis").css("fill", "white");
$("#q12q13_pfeil_linie").css("stroke", "#8dc68d");
$("#q12q13_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ13);    
}, speed*step);
step++; 
  
// q12q13-Pfeil wieder schwarz, q13-Kreis wird grün angezeigt, Endzustand
setTimeout(function() { 
$("#q12q13_pfeil_linie").css("stroke", "black");
$("#q12q13_pfeil_spitze").css("fill", "black");
$("#q13_kreis").css("fill", "#8dc68d");
// Band wird grün
$("#expressionband").css("color", "#709e70");
// Auswertung "Ausdruck gültig" in grün, damit Ende
$("#auswertung").css("color", "#709e70");  
$("#auswertung").append("Ausdruck ist gültig");
}, speed*step);
    
} // schließende Klammer für if (neunte Stelle = E)

} // schließende Klammer für if (achte Stelle = T)

} // schließende Klammer für if (siebte Stelle = E)
    
} // schließende Klammer für if (sechste Stelle = V)     
    
} // schließende Klammer für if (fünfte Stelle = V)    

// WENN FÜNFTE STELLE = T
else if (expressionArray[i] == "T") {
    
// TO-DO
// T wird im Band zu ⌴
var expressionQ4 = expressionArray;
expressionQ4[i] = "⌴";
var expressionQ5 = expressionQ4;
    
// q5-Kreis wieder schwarz, q5-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q5_kreis").css("fill", "white");
$("#q5_pfeil_linie").css("stroke", "#8dc68d");
$("#q5_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ5);    
}, speed*step);
step++; 
    
// q5-Pfeil wieder schwarz, q5-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q5_pfeil_linie").css("stroke", "black");
$("#q5_pfeil_spitze").css("fill", "black");
$("#q5_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;    
// Springe zur 6. Index-Stelle im Array
i++;
    
// WENN SECHSTE STELLE = T
if (expressionArray[i] == "T") {
    
// TO-DO
// T wird im Band zu ⌴
var expressionQ4 = expressionArray;
expressionQ4[i] = "⌴";
var expressionQ5_2 = expressionQ4;
    
// q5-Kreis wieder schwarz, q5-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q5_kreis").css("fill", "white");
$("#q5_pfeil_linie").css("stroke", "#8dc68d");
$("#q5_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ5_2);    
}, speed*step);
step++; 
    
// q5-Pfeil wieder schwarz, q5-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q5_pfeil_linie").css("stroke", "black");
$("#q5_pfeil_spitze").css("fill", "black");
$("#q5_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;    
// Springe zur 7. Index-Stelle im Array
i++;
    
// WENN SIEBTE STELLE = V
if (expressionArray[i] == "V") {
    
// TO-DO
// V wird im Band zu ⌴
var expressionQ5 = expressionArray;
expressionQ5[i] = "⌴";
var expressionQ7 = expressionQ5;
    
// q5-Kreis wieder schwarz, q5q7-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q5_kreis").css("fill", "white");
$("#q5q7_pfeil_linie").css("stroke", "#8dc68d");
$("#q5q7_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ7);    
}, speed*step);
step++; 
    
// q5q7-Pfeil wieder schwarz, q7-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q5q7_pfeil_linie").css("stroke", "black");
$("#q5q7_pfeil_spitze").css("fill", "black");
$("#q7_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;    
// Springe zur 8. Index-Stelle im Array
i++;
    
// WENN ACHTE STELLE = V
if (expressionArray[i] == "V") {
    
// TO-DO
// V wird im Band zu ⌴
var expressionQ7 = expressionArray;
expressionQ7[i] = "⌴";
var expressionQ8 = expressionQ7;
    
// q7-Kreis wieder schwarz, q7q8-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q7_kreis").css("fill", "white");
$("#q7q8_pfeil_linie").css("stroke", "#8dc68d");
$("#q7q8_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ8);    
}, speed*step);
step++; 
    
// q7q8-Pfeil wieder schwarz, q8-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q7q8_pfeil_linie").css("stroke", "black");
$("#q7q8_pfeil_spitze").css("fill", "black");
$("#q8_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;    
// Springe zur 9. Index-Stelle im Array
i++;
    
// WENN NEUNTE STELLE = E
if (expressionArray[i] == "E") {
    
// TO-DO
// E wird im Band zu ⌴
var expressionQ8 = expressionArray;
expressionQ8[i] = "⌴";
var expressionQ9 = expressionQ8;
    
// q8-Kreis wieder schwarz, q8q9-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q8_kreis").css("fill", "white");
$("#q8q9_pfeil_linie").css("stroke", "#8dc68d");
$("#q8q9_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ9);    
}, speed*step);
step++; 
    
// q6q8-Pfeil wieder schwarz, q8-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q8q9_pfeil_linie").css("stroke", "black");
$("#q8q9_pfeil_spitze").css("fill", "black");
$("#q9_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;    
// Springe zur 10. Index-Stelle im Array
i++;
    
// WENN ZEHNTE STELLE = P
if (expressionArray[i] == "P") {
    
// TO-DO
// P wird im Band zu ⌴
var expressionQ9 = expressionArray;
expressionQ9[i] = "⌴";
var expressionQ10 = expressionQ9;
    
// q9-Kreis wieder schwarz, q9q11-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q9_kreis").css("fill", "white");
$("#q9q11_pfeil_linie").css("stroke", "#8dc68d");
$("#q9q11_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ10);    
}, speed*step);
step++; 
  
// q9q11-Pfeil wieder schwarz, q11-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q9q11_pfeil_linie").css("stroke", "black");
$("#q9q11_pfeil_spitze").css("fill", "black");
$("#q11_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;

// RICHTUNGSWECHSEL NACH LINKS - SCHLEIFE BIS ZUM NOCH VORHANDENEN P
for (a = 0; a < 8; a++) {  
// q11-Kreis wieder schwarz, q11-Pfeil wird grün angezeigt
setTimeout(function() { 
$("#q11_kreis").css("fill", "white");
$("#q11_pfeil_linie").css("stroke", "#8dc68d");
$("#q11_pfeil_spitze").css("fill", "#8dc68d");    
}, speed*step);
step++; 

// q11-Pfeil wieder schwarz, q11-Kreis grün
setTimeout(function() { 
$("#q11_kreis").css("fill", "#8dc68d");
$("#q11_pfeil_linie").css("stroke", "black");
$("#q11_pfeil_spitze").css("fill", "black");    
}, speed*step);
step++; 
} 

// TO-DO
// P an 2. Stelle wird im Band zu ⌴
var expression9 = expressionArray;
expressionQ9[1] = "⌴";
var expressionQ11 = expressionQ10;
    
// q11-Kreis wieder schwarz, q11q12-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q11_kreis").css("fill", "white");
$("#q11q12_pfeil_linie").css("stroke", "#8dc68d");
$("#q11q12_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ11);    
}, speed*step);
step++; 
  
// q11q12-Pfeil wieder schwarz, q12-Kreis wird grün angezeigt
setTimeout(function() { 
$("#q11q12_pfeil_linie").css("stroke", "black");
$("#q11q12_pfeil_spitze").css("fill", "black");
$("#q12_kreis").css("fill", "#8dc68d");
}, speed*step);
step++;
    
// RICHTUNGSWECHSEL NACH RECHTS - SCHLEIFE BIS ZUM NOCH VORHANDENEN E
for (a = 0; a < 8; a++) {  
// q12-Kreis wieder schwarz, q12-Pfeil wird grün angezeigt
setTimeout(function() { 
$("#q12_kreis").css("fill", "white");
$("#q12_pfeil_linie").css("stroke", "#8dc68d");
$("#q12_pfeil_spitze").css("fill", "#8dc68d");    
}, speed*step);
step++; 

// q12-Pfeil wieder schwarz, q10-Kreis grün
setTimeout(function() { 
$("#q12_kreis").css("fill", "#8dc68d");
$("#q12_pfeil_linie").css("stroke", "black");
$("#q12_pfeil_spitze").css("fill", "black");    
}, speed*step);
step++; 
}
// Springe zur 11. Index-Stelle im Array
i++;

// WENN ELFTE STELLE = E
if (expressionArray[i] == "E") {
    
// TO-DO
// E wird im Band zu ⌴
var expressionQ12 = expressionArray;
expressionQ12[i] = "⌴";
var expressionQ13 = expressionQ12;
    
// q12-Kreis wieder schwarz, q12q13-Pfeil wird grün angezeigt, Band wird aktualisiert
setTimeout(function() { 
$("#q12_kreis").css("fill", "white");
$("#q12q13_pfeil_linie").css("stroke", "#8dc68d");
$("#q12q13_pfeil_spitze").css("fill", "#8dc68d");    
//$("#expressionband").html(expressionQ13);    
}, speed*step);
step++; 
  
// q12q13-Pfeil wieder schwarz, q13-Kreis wird grün angezeigt, Endzustand
setTimeout(function() { 
$("#q12q13_pfeil_linie").css("stroke", "black");
$("#q12q13_pfeil_spitze").css("fill", "black");
$("#q13_kreis").css("fill", "#8dc68d");
// Band wird grün
$("#expressionband").css("color", "#709e70");
// Auswertung "Ausdruck gültig" in grün, damit Ende
$("#auswertung").css("color", "#709e70");  
$("#auswertung").append("Ausdruck ist gültig");
}, speed*step);
    
} // schließende Klammer für if (elfte Stelle = E)
 
} // schließende Klammer für if (zehnte Stelle = P)
    
} // schließende Klammer für if (neunte Stelle = E)
    
} // schließende Klammer für if (achte Stelle = V)

} // schließende Klammer für if (siebte Stelle = V) 

} // schließende Klammer für if (sechste Stelle = T) 

} // schließende Klammer für if (fünfte Stelle = T)    
        
    
} // schließende Klammer für if (vierte Stelle = P)

// WENN VIERTE STELLE != T OR P
else {
// q3-Kreis wieder schwarz, q3q4-Pfeil und q3q5-Pfeil werden rot angezeigt
setTimeout(function() { 
$("#q3_kreis").css("fill", "white");
$("#q3q4_pfeil_linie").css("stroke", "#ff6666");
$("#q3q4_pfeil_spitze").css("fill", "#ff6666");
$("#q3q5_pfeil_linie").css("stroke", "#ff6666");
$("#q3q5_pfeil_spitze").css("fill", "#ff6666");
// Band wird rot
$("#expressionband").css("color", "#e55b5b");
// Auswertung "Ausdruck ungültig" in rot, damit Ende
$("#auswertung").css("color", "#e55b5b");  
$("#auswertung").append("Ausdruck ist ungültig");
}, speed*step);
step++;     
} // schließende Klammer für if (vierte Stelle != T OR P) 
    
} // schließende Klammer für if (dritte Stelle = B)

// WENN DRITTE STELLE != B
else {
// q2-Kreis wieder schwarz, q2q3-Pfeil wird rot angezeigt
setTimeout(function() { 
$("#q2_kreis").css("fill", "white");
$("#q2q3_pfeil_linie").css("stroke", "#ff6666");
$("#q2q3_pfeil_spitze").css("fill", "#ff6666");
// Band wird rot
$("#expressionband").css("color", "#e55b5b");
// Auswertung "Ausdruck ungültig" in rot, damit Ende
$("#auswertung").css("color", "#e55b5b");  
$("#auswertung").append("Ausdruck ist ungültig");
}, speed*step);
step++;     
} // schließende Klammer für if (dritte Stelle != B) 

} // schließende Klammer für if (zweite Stelle = T OR P)

// WENN ZWEITE STELLE != T OR P
else {
// q1-Kreis wieder schwarz, q1q2-Pfeil wird rot angezeigt
setTimeout(function() { 
$("#q1_kreis").css("fill", "white");
$("#q1q2_pfeil_linie").css("stroke", "#ff6666");
$("#q1q2_pfeil_spitze").css("fill", "#ff6666");
// Band wird rot
$("#expressionband").css("color", "#e55b5b");
// Auswertung "Ausdruck ungültig" in rot, damit Ende
$("#auswertung").css("color", "#e55b5b");  
$("#auswertung").append("Ausdruck ist ungültig");
}, speed*step);
step++;     
} // schließende Klammer für if (zweite Stelle != T OR P)    
    
} // schließende Klammer für if (erste Stelle = B)

// WENN ERSTE STELLE != B
else {
// q0-Kreis wieder schwarz, q0q1-Pfeil wird rot angezeigt
setTimeout(function() { 
$("#q0_kreis").css("fill", "white");
$("#q0q1_pfeil_linie").css("stroke", "#ff6666");
$("#q0q1_pfeil_spitze").css("fill", "#ff6666");
// Band wird rot
$("#expressionband").css("color", "#e55b5b");
// Auswertung "Ausdruck ungültig" in rot, damit Ende
$("#auswertung").css("color", "#e55b5b");  
$("#auswertung").append("Ausdruck ist ungültig");
}, speed*step);
step++;     
} // schließende Klammer für if (erste Stelle != B)
    
});   // schließende Klammer für click-function
    
});   // schließende Klammer document-ready-function

// Funktion des Reset-Buttons
function reloadThePage(){
    window.location.reload();
}