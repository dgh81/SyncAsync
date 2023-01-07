//https://www.youtube.com/watch?v=gcBPrGtUySs&ab_channel=SwiftixSoftware
//
// javascript er single thread execution
//
// I Javascript kan vi altså ikke have flere threads.
// Til gengæld kan vi styre udførsel af kode med await.
//
// Javascript vil altid bare fortætte i een lang snor, og stoppe op ved mangel på
// processorkraft eller når vi specifikt beder om at await'e

function takeYourTime() {
    //pending, resolve, reject
    //Pointe: funktionen herunder laver ikke noget i 10 sek, derfor fortsætter asyncCall bare.
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log("promise is resolved");
            resolve('resolved');
        }, 10000);
    });
};

async function asyncCall() {
    console.log("Calling async function");
    const p = takeYourTime();
    // Pointen her er at scriptet blot fortsætter med næste linje,
    // uden at awaite vores takeYourTime funktion
    console.log("Function returned:" + p);
    // const result = await p;
    // console.log("Final result is: " + result);
};

asyncCall();