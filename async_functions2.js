//Pointe: funktionen herunder er travlt optaget af beregning. asyncCall funktionen kan ikke fortsætte, før takeYourTime er færdig.
function takeYourTime() {
    return new Promise(resolve => {
        var i = BigInt(0);
        var j = BigInt(0);
        while (i < BigInt(30000000)) {
            i += BigInt(1);
            j += i;
        };
        resolve("resolved");
    });
};

async function asyncCall() {
    console.log("Calling async function");
    const p = takeYourTime();
    // Scriptet kan ikke fortsætte til næste linje før takeYourTime er færdig:
    console.log("Function returned:" + p);
    const result = await p;
    console.log("Final result is: " + result);
};

asyncCall();