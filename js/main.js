let listaMailAutorizzate = [ "luca@lambiase.it", "utente@asd.net", "giorgio@boolean.careers", "federico@gmail.com" ];
let accessoConsentito;
let mailUtente;
const msgOkElem = document.getElementById("messaggioOK");
const msgKoElem = document.getElementById("messaggioKO");
const btn = document.getElementById("loginButton");

btn.addEventListener("click", function() {
    accessoConsentito = false;
    console.log("Lista email autorizzate", listaMailAutorizzate);
    mailUtente = document.getElementById("emailUtente").value;
    console.log("Email inserita: ", mailUtente);

    for (let c = 0; c < listaMailAutorizzate.length; c++) {
        const mailDaConfrontare = listaMailAutorizzate[c];
        
        if(mailUtente == mailDaConfrontare) {
            accessoConsentito = true;
            // console.log("Trovata corrispondenza");
        } /* else {
            console.log("NON trovata corrispondenza");
        }*/
    }

    console.log("Valore variabile di controllo: ", accessoConsentito);

    if(accessoConsentito==true) {
        console.log("Benvenuto utente autorizzato!");
        // msgOkElem.style.display = "block";
        // msgKoElem.style.display = "none";

        msgOkElem.classList.remove("hidden");
        msgKoElem.classList.add("hidden");

    } else {
        console.log("Torna a casa, oh utente malevolo");
        // msgOkElem.style.display = "none";
        // msgKoElem.style.display = "block";

        msgOkElem.classList.add("hidden");
        msgKoElem.classList.remove("hidden");
    }

});