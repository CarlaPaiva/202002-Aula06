import {Lampada} from "./Lampada";

let lampada1 = new Lampada();
lampada1.Ligar();
console.log(`Lâmpada 1: ${lampada1.Observar()}`)

let lampada2 = new Lampada();
lampada2.Desligar();
console.log(`Lâmpada 2: ${lampada2.Observar()}`)