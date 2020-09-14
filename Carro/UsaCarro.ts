import {Carro} from "./Carro";

let kadett = new Carro("Chevrolet", "Kadett", "ABC-1234", 50, 100);
kadett.Acelerar(10);
kadett.Acelerar(10);
kadett.Acelerar(10);
kadett.Acelerar(10);
kadett.Acelerar(10);
kadett.Acelerar(10);
console.log("Tempo de frenagem: " +  kadett.Frear());
kadett.ImprimirDados();