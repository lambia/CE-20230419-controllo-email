let mailAutorizzate = [ "luca@lambiase.it", "utente@asd.net", "giorgio@boolean.careers", "federico@gmail.com" ];

let mailUtente = prompt("Inserisci la tua email");
console.log(`La mail inserita è ${mailUtente}`);

let mailAutorizzata = false;

for (let c = 0; c < mailAutorizzate.length; c++) {
    const mailDaConfrontare = mailAutorizzate[c];
    
    if(mailUtente == mailDaConfrontare) {
        mailAutorizzata = true;
        // console.log("Trovata corrispondenza");
    } /* else {
        console.log("NON trovata corrispondenza");
    }*/
}

console.log("Valore variabile di controllo: ", mailAutorizzata);

if(mailAutorizzata==true) {
    console.log("Benvenuto utente autorizzato!");
} else {
    console.log("Torna a casa, oh utente malevolo");
}