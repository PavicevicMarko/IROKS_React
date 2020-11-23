class Ekipa {
    constructor(direktor, trener, ime, letoUstanovitve) {
        this.dodajIgralca = (igralec) => {
            this.igralci.push(igralec);
        };
        this.direktor = direktor;
        this.trener = trener;
        this.ime = ime;
        this.letoUstanovitve = letoUstanovitve;
        this.igralci = new Array();
    }
    izpisiPodatke() {
        let izpis = ("Ime: " + this.ime.toString + "\n" +
            "Direktor: " + this.direktor.toString + "\n" +
            "Trener: " + this.trener.toString + "\n" +
            "Leto ustanovitve: " + this.letoUstanovitve.toString + "\n" +
            "Igralci : " + this.igralci.toString);
        return izpis;
    }
}
export { Ekipa };
//# sourceMappingURL=Ekipa.js.map