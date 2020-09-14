export class Lampada{
    Status:boolean;

    Ligar(){ this.Status = true;}

    Desligar(){ this.Status = false;}

    Observar():string{ 
         return (this.Status ? 'Ligada' :  'Desligada')
    }
}