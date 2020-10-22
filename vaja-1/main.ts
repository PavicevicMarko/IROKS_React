import { Igralec, Funkcionar } from './Oseba';
import { Ekipa } from './Ekipa';

let direktor : Funkcionar = {
	ime : "kuj",
	priimek : "nekaj",
	letoRojstva : 10102010,
	krajRojstva : "Vas",
	vloga : "direktor",
	veljavnost : 10
};

let trener : Funkcionar = {
	ime : "kuj",
	priimek : "neki",
	letoRojstva : 12122012,
	krajRojstva : "Mesto",
	vloga : "trener",
	veljavnost : 5
};

let igralec1 : Igralec = {
	ime : "a",
	priimek : "b",
	letoRojstva : 12122012,
	krajRojstva : "Mesto",
	visina : 180,
	teza : 80,
	poskodovan : false
};

let igralec2 : Igralec = {
	ime : "e",
	priimek : "d",
	letoRojstva : 12122012,
	krajRojstva : "Predmestje",
	visina : 190,
	teza : 90,
	poskodovan : false

};

let igralec3 : Igralec = {
	ime : "z",
	priimek : "y",
	letoRojstva : 12122012,
	krajRojstva : "Metropola",
	visina : 169,
	teza : 60,
	poskodovan : true

};

let ekipa = new Ekipa(direktor, trener, 'abc', 1999); 
ekipa.dodajIgralca(igralec1);
ekipa.dodajIgralca(igralec2);
ekipa.dodajIgralca(igralec3);

ekipa.izpisiPodatke();


