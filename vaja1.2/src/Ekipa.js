"use strict";
exports.__esModule = true;
exports.Ekipa = void 0;
var Ekipa = /** @class */ (function () {
    function Ekipa(direktor, trener, ime, letoUstanovitve) {
        var _this = this;
        this.dodajIgralca = function (igralec) {
            _this.igralci.push(igralec);
        };
        this.direktor = direktor;
        this.trener = trener;
        this.ime = ime;
        this.letoUstanovitve = letoUstanovitve;
        this.igralci = new Array();
    }
    Ekipa.prototype.izpisiPodatke = function () {
        var izpis = ("Ime: " + this.ime.toString + "\n" +
            "Direktor: " + this.direktor.toString + "\n" +
            "Trener: " + this.trener.toString + "\n" +
            "Leto ustanovitve: " + this.letoUstanovitve.toString + "\n" +
            "Igralci : " + this.igralci.toString);
        return izpis;
    };
    return Ekipa;
}());
exports.Ekipa = Ekipa;
