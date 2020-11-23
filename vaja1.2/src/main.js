"use strict";
exports.__esModule = true;
var Ekipa_1 = require("./Ekipa");
var direktor = {
    ime: "kuj",
    priimek: "nekaj",
    letoRojstva: 10102010,
    krajRojstva: "Vas",
    vloga: "direktor",
    veljavnost: 10
};
var trener = {
    ime: "kuj",
    priimek: "neki",
    letoRojstva: 12122012,
    krajRojstva: "Mesto",
    vloga: "trener",
    veljavnost: 5
};
var igralec1 = {
    ime: "a",
    priimek: "b",
    letoRojstva: 12122012,
    krajRojstva: "Mesto",
    visina: 180,
    teza: 80,
    poskodovan: false
};
var igralec2 = {
    ime: "e",
    priimek: "d",
    letoRojstva: 12122012,
    krajRojstva: "Predmestje",
    visina: 190,
    teza: 90,
    poskodovan: false
};
var igralec3 = {
    ime: "z",
    priimek: "y",
    letoRojstva: 12122012,
    krajRojstva: "Metropola",
    visina: 169,
    teza: 60,
    poskodovan: true
};
var ekipa = new Ekipa_1.Ekipa(direktor, trener, 'abc', 1999);
ekipa.dodajIgralca(igralec1);
ekipa.dodajIgralca(igralec2);
ekipa.dodajIgralca(igralec3);
ekipa.izpisiPodatke();
