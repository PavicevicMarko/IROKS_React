System.register(["./Ekipa"], function (exports_1, context_1) {
    "use strict";
    var Ekipa_1, direktor, trener, igralec1, igralec2, igralec3, ekipa;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Ekipa_1_1) {
                Ekipa_1 = Ekipa_1_1;
            }
        ],
        execute: function () {
            direktor = {
                ime: "kuj",
                priimek: "nekaj",
                letoRojstva: 10102010,
                krajRojstva: "Vas",
                vloga: "direktor",
                veljavnost: 10
            };
            trener = {
                ime: "kuj",
                priimek: "neki",
                letoRojstva: 12122012,
                krajRojstva: "Mesto",
                vloga: "trener",
                veljavnost: 5
            };
            igralec1 = {
                ime: "a",
                priimek: "b",
                letoRojstva: 12122012,
                krajRojstva: "Mesto",
                visina: 180,
                teza: 80,
                poskodovan: false
            };
            igralec2 = {
                ime: "e",
                priimek: "d",
                letoRojstva: 12122012,
                krajRojstva: "Predmestje",
                visina: 190,
                teza: 90,
                poskodovan: false
            };
            igralec3 = {
                ime: "z",
                priimek: "y",
                letoRojstva: 12122012,
                krajRojstva: "Metropola",
                visina: 169,
                teza: 60,
                poskodovan: true
            };
            ekipa = new Ekipa_1.Ekipa(direktor, trener, 'abc', 1999);
            ekipa.dodajIgralca(igralec1);
            ekipa.dodajIgralca(igralec2);
            ekipa.dodajIgralca(igralec3);
            console.log(ekipa.izpisiPodatke());
        }
    };
});
