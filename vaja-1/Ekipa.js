"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ekipa = void 0;
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
}
exports.Ekipa = Ekipa;
