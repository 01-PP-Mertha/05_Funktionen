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
// ausgabeNamenParams("Peter", "Zwegert");
// ausgabeNamenParams("Claudia", 'Schmidt')
// ausgabeNamenParams(prompt("Geben sie ihren Vornamen ein:"),prompt("Geben sie ihren Nachnamen ein:"))

function ausgabeNamenParams(firstName, familyName) 
{
   console.log("Hallo", firstName, familyName,"!");

}



/***** Funktionen 03a *****/
// 03a. Vorbereitung
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNamenParams2("Claudia", 'Schmidt')

function ausgabeNamenParams2(firstName, familyName) 
{
    // 1. Funktionalität: string composing
    const GAP = " ";
    let outputStr = "Hallo" + GAP + firstName + GAP + familyName + "!";


    // 2. Funktionalität: string output

   console.log(outputStr);

}

/***** Funktionen 03b *****/
// Trennen der Funktionalitäten in Funktionen| return


output(getString("Max", "Mauser"));
output (getString (prompt("Gebe deinen Vornamen ein"),prompt("Gebe deinen Nachnamen ein")))

function getString(firstName, familyName) 
{
    const GAP = " ";
    let outputStr = "Hallo" + GAP + firstName + GAP + familyName + "!";
    return outputStr;  // return sendet Daten an den call zurück
}

// 2. Funktionalität: string output

// output("Hi")
// output(prompt("Geben sie ihren Namen ein:"))

function output(outputData) 
{
    console.log(outputData);
    

}







