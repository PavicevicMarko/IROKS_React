import { Igralec, Funkcionar } from './Oseba';

class Ekipa {
	ime: string;
	letoUstanovitve: number; 
	direktor: Funkcionar ;
	trener: Funkcionar ;
	igralci: Igralec[];
 
	dodajIgralca = (igralec : Igralec) =>{
		this.igralci.push(igralec);
	}

	izpisiPodatke() : string{
		let izpis : string  = ("Ime: " + this.ime.toString + "\n" +
					"Direktor: " + this.direktor.toString + "\n" +
					"Trener: " + this.trener.toString +  "\n" + 
					"Leto ustanovitve: " + this.letoUstanovitve.toString + "\n" +
					"Igralci : " + this.igralci.toString) as string;

		return izpis;
	}

 constructor(direktor: Funkcionar, trener: Funkcionar ,ime: string, letoUstanovitve: number){
	this.direktor = direktor;
	this.trener= trener;
	this.ime = ime;
	this.letoUstanovitve = letoUstanovitve;
	this.igralci= new Array();
 }
}

 export {Ekipa};