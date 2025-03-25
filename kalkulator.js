function izracunaj() {
    var prviBrojInput = document.getElementById("prviBroj").value;
    var drugiBrojInput = document.getElementById("drugiBroj").value;
    // console.log(typeof prviBrojInput); => .value vraca string

    // Provera da li su polja prazna
    if (prviBrojInput === "" || drugiBrojInput === "") {
        var rezultat = "Polja ne mogu ostati prazna!";
        document.getElementById("rez").innerText = rezultat;
        return; // Zaustavlja dalje izvršavanje koda
    }

    // Mora konvertovanje stringa u broj // najbolje parseFloat, jer ce parseInt da zaokruzi na manji br
    var prviBroj = parseFloat(prviBrojInput);
    var drugiBroj = parseFloat(drugiBrojInput);
    var operacija = document.getElementById("operacija").value;
    var rezultat; // deklarisemo promenljivu ovde, ali je jos uvek undefined, kasnije ce da joj bude dodljena venost, kada se izvrsi operacija ali je deklarisemo da ne postane globalna to nije dobra praksa

    // Izvršavanje operacije
    switch (operacija) {
        case "+":
            rezultat = prviBroj + drugiBroj;
            break;
        case "-":
            rezultat = prviBroj - drugiBroj;
            break;
        case "*":
            rezultat = prviBroj * drugiBroj;
            break;
        case "/":
            // Ako je deljenik (prviBroj) nula, rezultat je uvek nula
            if (prviBroj === 0) {
                rezultat = "Ako je NULA deljenik i količnik je uvek NULA!";
                document.getElementById("rez").innerText = rezultat;
                return;  // Prekidamo funkciju jer je završena
            }
            // Ako je delitelj (drugiBroj) nula, ne možemo da delimo
            if (drugiBroj === 0) {
                rezultat = "Nije moguće deliti sa nulom!";
                document.getElementById("rez").innerText = rezultat;
                return;
            }
            rezultat = prviBroj / drugiBroj;
            break;
        default:
            rezultat = "Nepoznata operacija!";
            document.getElementById("rez").innerText = rezultat;
            return;
    }

    // Čuvanje i prikaz rezultata na stranici
    document.getElementById("rez").innerText = "Rezultat je: " + rezultat;
}


