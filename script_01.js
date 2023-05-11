"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken



// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
function test()
{
    console.log("Hallo");
}


/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN
// ausgabeNamen();

function ausgabeNamen() 
{

      // what happens in VEGAS

    let firstName = "Peter";
    console.log("Hallo", firstName, "!");
   

}

// console.log(firstName); // Fehler: Scope!


/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNamenParam("Peter");
// ausgabeNamenParam("Claudia")


function ausgabeNamenParam(firstName) 
{
    
    console.log("Hallo", firstName, "!");
    
    
}



/***** Funktionen 02c *****/
// 2c. Mehrere Parameter
ausgabeNamenParams("Peter", "Zwegert");
ausgabeNamenParams("Claudia", 'Schmidt')
ausgabeNamenParams(prompt("Geben sie ihren Vornamen ein:"),prompt("Geben sie ihren Nachnamen ein:"))

function ausgabeNamenParams(firstName, familyName) 
{
   console.log("Hallo", firstName, familyName,"!");

}


